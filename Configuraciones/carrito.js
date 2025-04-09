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
        cartButton.addEventListener('click', function() {
            showCartModal();
        });
    }
});

// Mostrar modal para agrandar
function showUpgradeModal(burgerName) {
    selectedBurger = burgerName;
    const upgradeBurgerNameElement = document.getElementById('upgradeBurgerName');
    const upgradeModalElement = document.getElementById('upgradeModal');
    
    if (upgradeBurgerNameElement && upgradeModalElement) {
        upgradeBurgerNameElement.textContent = burgerName;
        upgradeModalElement.style.display = 'block';
    }
}

// Mostrar modal para comprar
function showBuyModal(burgerName) {
    selectedBurger = burgerName;
    const buyBurgerNameElement = document.getElementById('buyBurgerName');
    const buyModalElement = document.getElementById('buyModal');
    
    if (buyBurgerNameElement && buyModalElement) {
        buyBurgerNameElement.textContent = burgerName;
        buyModalElement.style.display = 'block';
    }
}

// Mostrar modal del carrito
function showCartModal() {
    renderCartItems();
    const cartModalElement = document.getElementById('cartModal');
    if (cartModalElement) {
        cartModalElement.style.display = 'block';
    }
}

// Cerrar modal
function closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        modalElement.style.display = 'none';
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
    
    const total = cart.reduce((sum, item) => sum + ((item.price + item.extrasCost) * item.quantity), 0);
    
    alert(`¡Gracias por tu compra! Total: $${total.toFixed(2)}`);
    
    // Vaciar carrito
    cart = [];
    saveCart();
    updateCartCount();
    closeModal('cartModal');
}