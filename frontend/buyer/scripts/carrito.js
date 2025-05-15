// Variables para almacenar la hamburguesa seleccionada y el carrito
let selectedBurger = '';
let cart = [];

// Cargar el carrito del almacenamiento local cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    // Intenta cargar el carrito del almacenamiento local
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartCount();
        } catch (e) {
            console.error('Error al cargar el carrito:', e);
            cart = [];
        }
    }
    
    // Configuración del cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('theme-text');
    
    if (themeToggle) {
        // Comprueba si hay una preferencia guardada
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        // Aplica el modo según la preferencia guardada
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '🌙';
            if (themeText) {
                themeText.textContent = 'Modo Oscuro';
            }
        }
        
        // Agrega el manejador de eventos al botón
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Actualiza el icono del botón y el texto
            const isDark = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '🌙' : '☀️';
            if (themeText) {
                themeText.textContent = isDark ? 'Modo Oscuro' : 'Modo Claro';
            }
            
            // Guarda la preferencia
            localStorage.setItem('darkMode', isDark.toString());
        });
    }

    // Manejador para botón del carrito
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        cartButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir navegación
            showCartModal();
        });
    }
    
    // Verificar si faltan modales en el DOM y crearlos si es necesario
    checkAndCreateModals();
});

// Verificar modales y crearlos si faltan
function checkAndCreateModals() {
    // Verificar modal para agrandar
    if (!document.getElementById('upgradeModal')) {
        createUpgradeModal();
    }
    
    // Verificar modal para comprar
    if (!document.getElementById('buyModal')) {
        createBuyModal();
    }
    
    // Verificar modal del carrito
    if (!document.getElementById('cartModal')) {
        createCartModal();
    }
}

// Crear modal para agrandar si falta
function createUpgradeModal() {
    const modalHTML = `
    <div id="upgradeModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('upgradeModal')">&times;</span>
            <h2>Agrandar <span id="upgradeBurgerName"></span></h2>
            <div class="option-list">
                <div class="option">
                    <label>
                        <input type="checkbox"> Agrandar papas (+$3000)
                    </label>
                    <span>$3000</span>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox"> Agregar carne (+$2500)
                    </label>
                    <span>$2500</span>
                </div>
                <div class="option">
                    <label>
                        <input type="checkbox"> Extra queso (+$2000)
                    </label>
                    <span>$2000</span>
                </div>
            </div>
            <div class="modal-buttons">
                <button class="btn btn-secondary" onclick="closeModal('upgradeModal')">Cancelar</button>
                <button class="btn btn-primary" onclick="addToCart()">Agregar al carrito</button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Crear modal para comprar si falta
function createBuyModal() {
    const modalHTML = `
    <div id="buyModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('buyModal')">&times;</span>
            <h2>Comprar <span id="buyBurgerName"></span></h2>
            <p>¿Deseas agregar esta hamburguesa al carrito?</p>
            <div class="modal-buttons">
                <button class="btn btn-secondary" onclick="closeModal('buyModal')">Cancelar</button>
                <button class="btn btn-primary" onclick="purchase()">Confirmar compra</button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Crear modal del carrito si falta
function createCartModal() {
    const modalHTML = `
    <div id="cartModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('cartModal')">&times;</span>
            <h2>Tu Carrito</h2>
            <div id="cartItems" class="cart-items">
                <!-- Los items del carrito se insertarán aquí dinámicamente -->
            </div>
            <div class="cart-total">
                <h3>Total: $<span id="cartTotal">0</span></h3>
            </div>
            <div class="modal-buttons">
                <button class="btn btn-secondary" onclick="closeModal('cartModal')">Seguir comprando</button>
                <button class="btn btn-primary" onclick="checkout()">Finalizar compra</button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Crear modales de checkout si faltan
function createCheckoutModals() {
    // Comprobar si ya existen
    if (!document.getElementById('checkoutTypeModal')) {
        const modalHTML = `
        <div id="checkoutTypeModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('checkoutTypeModal')">&times;</span>
                <h2>¿Cómo quieres recibir tu pedido?</h2>
                <div class="checkout-options">
                    <button class="btn btn-primary checkout-option" onclick="selectCheckoutType('local')">
                        Compra en el Local
                    </button>
                    <button class="btn btn-primary checkout-option" onclick="selectCheckoutType('delivery')">
                        Compra desde Casa
                    </button>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    if (!document.getElementById('localCheckoutModal')) {
        const modalHTML = `
        <div id="localCheckoutModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('localCheckoutModal')">&times;</span>
                <h2>Finalizar Compra en el Local</h2>
                <div class="checkout-form">
                    <div class="form-group">
                        <label for="localCustomerName">Nombre del Cliente:</label>
                        <input type="text" id="localCustomerName" required>
                    </div>
                    <div class="form-group">
                        <label for="tableNumber">Número de Mesa:</label>
                        <input type="number" id="tableNumber" min="1" required>
                    </div>
                    
                    <h3>Resumen del Pedido</h3>
                    <div id="localOrderSummary" class="order-summary">
                        <!-- El resumen del pedido se insertará aquí dinámicamente -->
                    </div>
                    <div class="order-total">
                        <h3>Total: $<span id="localOrderTotal">0</span></h3>
                    </div>
                    
                    <div class="modal-buttons">
                        <button class="btn btn-secondary" onclick="closeModal('localCheckoutModal')">Cancelar</button>
                        <button class="btn btn-primary" onclick="processLocalOrder()">Pagar</button>
                    </div>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    if (!document.getElementById('deliveryCheckoutModal')) {
        const modalHTML = `
        <div id="deliveryCheckoutModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('deliveryCheckoutModal')">&times;</span>
                <h2>Entrega a Domicilio</h2>
                <div class="checkout-form">
                    <div class="form-group">
                        <label>Número de Pedido: <span id="orderNumber">P123456</span></label>
                    </div>
                    <div class="form-group">
                        <label for="deliveryCustomerName">Nombre Completo:</label>
                        <input type="text" id="deliveryCustomerName" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryAddress">Dirección de Entrega:</label>
                        <input type="text" id="deliveryAddress" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryPhone">Número de Teléfono:</label>
                        <input type="tel" id="deliveryPhone" required>
                    </div>
                    <div class="form-group">
                        <label for="deliveryNotes">Especificaciones Adicionales:</label>
                        <textarea id="deliveryNotes" rows="3" placeholder="Indicaciones para llegar, preferencias del pedido, etc."></textarea>
                    </div>
                    
                    <h3>Resumen del Pedido</h3>
                    <div id="deliveryOrderSummary" class="order-summary">
                        <!-- El resumen del pedido se insertará aquí dinámicamente -->
                    </div>
                    <div class="order-total">
                        <h3>Total: $<span id="deliveryOrderTotal">0</span></h3>
                    </div>
                    
                    <div class="modal-buttons">
                        <button class="btn btn-secondary" onclick="closeModal('deliveryCheckoutModal')">Cancelar</button>
                        <button class="btn btn-primary" onclick="processDeliveryOrder()">Confirmar y Enviar a WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>`;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

// Mostrar modal para agrandar
function showUpgradeModal(burgerName) {
    selectedBurger = burgerName;
    
    // Verificar si existe el modal, si no, crearlo
    if (!document.getElementById('upgradeModal')) {
        createUpgradeModal();
    }
    
    const upgradeBurgerNameElement = document.getElementById('upgradeBurgerName');
    const upgradeModalElement = document.getElementById('upgradeModal');
    
    if (upgradeBurgerNameElement && upgradeModalElement) {
        upgradeBurgerNameElement.textContent = burgerName;
        upgradeModalElement.style.display = 'block';
    } else {
        console.error('No se encontraron elementos necesarios para el modal de agrandar');
    }
}

// Mostrar modal para comprar
function showBuyModal(burgerName) {
    selectedBurger = burgerName;
    
    // Verificar si existe el modal, si no, crearlo
    if (!document.getElementById('buyModal')) {
        createBuyModal();
    }
    
    const buyBurgerNameElement = document.getElementById('buyBurgerName');
    const buyModalElement = document.getElementById('buyModal');
    
    if (buyBurgerNameElement && buyModalElement) {
        buyBurgerNameElement.textContent = burgerName;
        buyModalElement.style.display = 'block';
    } else {
        console.error('No se encontraron elementos necesarios para el modal de compra');
    }
}

// Mostrar modal del carrito
function showCartModal() {
    // Verificar si existe el modal, si no, crearlo
    if (!document.getElementById('cartModal')) {
        createCartModal();
    }
    
    renderCartItems();
    const cartModalElement = document.getElementById('cartModal');
    if (cartModalElement) {
        cartModalElement.style.display = 'block';
    } else {
        console.error('No se encontró el modal del carrito');
    }
}

// Cerrar modal
function closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        modalElement.style.display = 'none';
    } else {
        console.error(`Modal con ID ${modalId} no encontrado`);
    }
}

// Función para extraer el precio correctamente
function extractPrice(element) {
    if (!element || !element.textContent) return 0;
    
    // Buscar el formato $XX.XX o XX.XX en el texto
    const priceRegex = /\$?(\d+(\.\d+)?)/;
    const match = element.textContent.match(priceRegex);
    
    if (match && match[1]) {
        return parseFloat(match[1]);
    }
    
    return 0;
}

// Agregar al carrito después de agrandar
function addToCart() {
    // Encuentra la información de la hamburguesa seleccionada
    const cards = document.querySelectorAll('.card');
    let cardElement = null;
    
    for (const card of cards) {
        const titleElement = card.querySelector('h3');
        if (titleElement && titleElement.textContent === selectedBurger) {
            cardElement = card;
            break;
        }
    }
    
    if (!cardElement) {
        console.error('No se encontró la tarjeta para:', selectedBurger);
        return;
    }
    
    // Encuentra el elemento de precio (puede ser un <p> o cualquier elemento con el precio)
    const priceElement = cardElement.querySelector('.price') || cardElement.querySelector('p');
    if (!priceElement) {
        console.error('No se encontró el elemento de precio');
        return;
    }
    
    // Extrae el precio utilizando la función auxiliar
    const price = extractPrice(priceElement);
    
    if (price === 0) {
        console.error('No se pudo extraer el precio correctamente');
        return;
    }
    
    const extras = [];
    let extrasCost = 0;
    
    // Recoger los extras seleccionados
    const checkboxes = document.querySelectorAll('#upgradeModal input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const option = checkbox.closest('.option');
        if (option) {
            const labelElement = option.querySelector('label');
            const priceElement = option.querySelector('span');
            
            if (labelElement && labelElement.textContent) {
                const extraName = labelElement.textContent.split('(')[0].trim();
                extras.push(extraName);
                
                // Extraer el precio del extra
                if (priceElement) {
                    const extraPrice = extractPrice(priceElement);
                    extrasCost += extraPrice;
                }
            }
        }
    });
    
    // Crear objeto del item
    const item = {
        id: Date.now().toString(), // ID único
        name: selectedBurger,
        price: price,
        extras: extras,
        extrasCost: extrasCost,
        quantity: 1
    };
    
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(cartItem => {
        // Verificación exacta del nombre
        if (cartItem.name !== item.name) return false;
        
        // Verificación de que ambos arrays tengan la misma longitud
        if (cartItem.extras.length !== item.extras.length) return false;
        
        // Verificación de que contengan los mismos extras (ordenados)
        const sortedCartExtras = [...cartItem.extras].sort();
        const sortedItemExtras = [...item.extras].sort();
        
        return sortedCartExtras.every((value, index) => value === sortedItemExtras[index]);
    });
    
    if (existingItemIndex !== -1) {
        // Incrementar cantidad si ya existe
        cart[existingItemIndex].quantity += 1;
    } else {
        // Agregar nuevo item si no existe
        cart.push(item);
    }
    
    // Guardar carrito en almacenamiento local
    saveCart();
    
    // Actualizar contador del carrito
    updateCartCount();
    
    alert('¡Se agregó ' + selectedBurger + ' con extras al carrito!');
    closeModal('upgradeModal');
}

// Realizar compra directa
function purchase() {
    // Encuentra la información de la hamburguesa seleccionada
    const cards = document.querySelectorAll('.card');
    let cardElement = null;
    
    for (const card of cards) {
        const titleElement = card.querySelector('h3');
        if (titleElement && titleElement.textContent === selectedBurger) {
            cardElement = card;
            break;
        }
    }
    
    if (!cardElement) {
        console.error('No se encontró la tarjeta para:', selectedBurger);
        return;
    }
    
    // Encuentra el elemento de precio (puede ser un <p> o cualquier elemento con el precio)
    const priceElement = cardElement.querySelector('.price') || cardElement.querySelector('p');
    if (!priceElement) {
        console.error('No se encontró el elemento de precio');
        return;
    }
    
    // Extrae el precio utilizando la función auxiliar
    const price = extractPrice(priceElement);
    
    if (price === 0) {
        console.error('No se pudo extraer el precio correctamente');
        return;
    }
    
    // Crear objeto del item
    const item = {
        id: Date.now().toString(), // ID único
        name: selectedBurger,
        price: price,
        extras: [],
        extrasCost: 0,
        quantity: 1
    };
    
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(cartItem => 
        cartItem.name === item.name && 
        cartItem.extras.length === 0
    );
    
    if (existingItemIndex !== -1) {
        // Incrementar cantidad si ya existe
        cart[existingItemIndex].quantity += 1;
    } else {
        // Agregar nuevo item si no existe
        cart.push(item);
    }
    
    // Guardar carrito en almacenamiento local
    saveCart();
    
    // Actualizar contador del carrito
    updateCartCount();
    
    alert('¡Se agregó ' + selectedBurger + ' al carrito!');
    closeModal('buyModal');
}

// Guardar carrito en almacenamiento local
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = count.toString();
    }
}

// Renderizar items del carrito
function renderCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (!cartItemsElement || !cartTotalElement) return;
    
    // Limpiar contenedor
    cartItemsElement.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p>No hay productos en el carrito</p>';
        cartTotalElement.textContent = '0';
        return;
    }
    
    let total = 0;
    
    // Agregar cada item al contenedor
    cart.forEach(item => {
        const itemPrice = item.price + item.extrasCost;
        const itemTotal = itemPrice * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${itemPrice.toFixed(2)} ${item.extras.length > 0 ? '(' + item.extras.join(', ') + ')' : ''}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">🗑️</button>
            </div>
        `;
        
        cartItemsElement.appendChild(cartItemElement);
    });
    
    // Actualizar total
    cartTotalElement.textContent = total.toFixed(2);
}

// Aumentar cantidad
function increaseQuantity(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Disminuir cantidad
function decreaseQuantity(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Eliminar del carrito
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Verificar y crear modales de checkout si son necesarios
    createCheckoutModals();
    
    // Ocultamos el modal del carrito
    closeModal('cartModal');
    
    // Mostramos el modal de selección de tipo de compra
    document.getElementById('checkoutTypeModal').style.display = 'block';
}

// Función para manejar la selección de tipo de compra
function selectCheckoutType(type) {
    // Ocultamos el modal de selección
    closeModal('checkoutTypeModal');
    
    if (type === 'local') {
        // Mostramos el formulario de compra en local
        document.getElementById('localCheckoutModal').style.display = 'block';
        // Actualizamos el resumen del pedido y el total
        updateOrderSummary('localOrderSummary', 'localOrderTotal');
    } else if (type === 'delivery') {
        // Mostramos el formulario de entrega a domicilio
        document.getElementById('deliveryCheckoutModal').style.display = 'block';
        // Actualizamos el resumen del pedido y el total
        updateOrderSummary('deliveryOrderSummary', 'deliveryOrderTotal');
        // Generamos un número de pedido aleatorio
        document.getElementById('orderNumber').textContent = generateOrderNumber();
    }
}

// Función para actualizar el resumen del pedido
function updateOrderSummary(summaryElementId, totalElementId) {
    const summaryElement = document.getElementById(summaryElementId);
    const totalElement = document.getElementById(totalElementId);
    
    if (!summaryElement || !totalElement) {
        console.error('No se encontraron elementos necesarios para el resumen');
        return;
    }
    
    // Limpiamos el contenido anterior
    summaryElement.innerHTML = '';
    
    // Calculamos el total
    let total = 0;
    
    // Agregamos cada ítem al resumen
    cart.forEach(item => {
        const itemPrice = item.price + item.extrasCost;
        const itemTotal = itemPrice * item.quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.classList.add('order-item');
        itemElement.innerHTML = `
            <span>${item.name} ${item.extras.length > 0 ? '(' + item.extras.join(', ') + ')' : ''} x${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        summaryElement.appendChild(itemElement);
    });
    
    // Actualizamos el total
    totalElement.textContent = total.toFixed(2);
}

// Función para generar un número de pedido aleatorio
function generateOrderNumber() {
    return 'P' + Math.floor(100000 + Math.random() * 900000);
}

// Función para procesar el pedido en local
function processLocalOrder() {
    const customerName = document.getElementById('localCustomerName').value;
    const tableNumber = document.getElementById('tableNumber').value;
    
    if (!customerName || !tableNumber) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }
    
    // Aquí podrías enviar los datos a un servidor
    alert(`¡Gracias por tu pedido, ${customerName}! Tu orden para la mesa ${tableNumber} ha sido recibida.`);
    
    // Limpiamos el carrito
    cart = [];
    saveCart();
    updateCartCount();
    
    // Cerramos el modal
    closeModal('localCheckoutModal');
}

// Función para procesar el pedido a domicilio
function processDeliveryOrder() {
    const customerName = document.getElementById('deliveryCustomerName').value;
    const address = document.getElementById('deliveryAddress').value;
    const phone = document.getElementById('deliveryPhone').value;
    const notes = document.getElementById('deliveryNotes').value;
    
    if (!customerName || !address || !phone) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }
    
    // Preparamos el mensaje para WhatsApp
    const orderNumber = document.getElementById('orderNumber').textContent;
    
    let message = `*Pedido #${orderNumber}*\n`;
    message += `*Cliente:* ${customerName}\n`;
    message += `*Dirección:* ${address}\n`;
    message += `*Teléfono:* ${phone}\n`;
    if (notes) {
        message += `*Notas:* ${notes}\n`;
    }
    
    message += `\n*Detalle del pedido:*\n`;
    let total = 0;
    
    cart.forEach(item => {
        const itemPrice = item.price + item.extrasCost;
        const itemTotal = itemPrice * item.quantity;
        message += `- ${item.name} ${item.extras.length > 0 ? '(' + item.extras.join(', ') + ')' : ''} x${item.quantity}: $${itemTotal.toFixed(2)}\n`;
        total += itemTotal;
    });
    
    message += `\n*Total:* $${total.toFixed(2)}`;
    
    // Codificamos el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    
    const businessPhone = '+123456789'; // Reemplazar con el número real
    
    // Creamos la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Limpiamos el carrito
    cart = [];
    saveCart();
    updateCartCount();
    
    // Cerramos el modal
    closeModal('deliveryCheckoutModal');
}