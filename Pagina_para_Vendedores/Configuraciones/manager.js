// Variables para el carrito
import { createMenuCards } from '/Pagina_para_Vendedores/Configuraciones/menuCardsVendedor.js';
import { menuItems } from '/Pagina_para_Vendedores/Configuraciones/menuItemsVendedor.js';
let cart = [];
let currentStep = 'menu'; // 'menu', 'cart' o 'checkout'

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear tarjetas de menú
    createMenuCards();

    // Configurar evento para el botón de tema
    const themeToggleBtn = document.getElementById('themeToggle');
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Inicializar modal
    const modal = document.getElementById('categoryModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Agregar eventos a las categorías (delegación de eventos)
    const menuContainer = document.getElementById('menuCards');
    menuContainer.addEventListener('click', handleCategoryClick);

    // Evento para continuar con información del cliente
    const checkoutBtn = document.getElementById('proceedToCheckout');
    checkoutBtn.addEventListener('click', showCustomerInfo);

    // Evento para volver al carrito
    const backBtn = document.getElementById('backToCart');
    backBtn.addEventListener('click', showCart);

    // Evento para finalizar pedido
    const customerForm = document.getElementById('customerForm');
    customerForm.addEventListener('submit', finalizePedido);
    
    // Cargar tema al iniciar
    loadSavedTheme();
});

// Función para manejar clic en categoría
function handleCategoryClick(event) {
    const cardElement = event.target.closest('.card, .featured-offer');
    if (!cardElement) return;

    // Prevenir navegación a la página
    event.preventDefault();

    // Buscar link y obtener URL
    const link = cardElement.querySelector('a');
    if (!link) return;

    // Determinar qué categoría se seleccionó
    const categoryUrl = link.getAttribute('href');
    const categoryName = cardElement.querySelector('h3').textContent;
    
    // Abrir modal con productos de esa categoría
    openCategoryModal(categoryName, categoryUrl);
}

// Función para abrir modal con productos de una categoría
function openCategoryModal(categoryName, categoryUrl) {
    const modal = document.getElementById('categoryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalItemList = document.getElementById('modalItemList');

    modalTitle.textContent = categoryName;
    modalItemList.innerHTML = ''; // Limpiar lista anterior

    // Encontrar la categoría en menuItems
    const category = menuItems.find(item => item.pageUrl === categoryUrl);
    
    if (!category) {
        console.error('Categoría no encontrada:', categoryUrl);
        return;
    }

    // Para este ejemplo, vamos a crear productos ficticios basados en la descripción
    const descriptions = category.fullDescription.split('<br>').filter(desc => desc.trim() !== '');
    
    descriptions.forEach((desc, index) => {
        desc = desc.trim();
        if (!desc) return;
        
        // Crear tarjeta de producto
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        // Generar precio aleatorio entre 500 y 2000
        const price = Math.floor(Math.random() * 1500) + 500;
        
        itemCard.innerHTML = `
            <img src="/Pagina-Para-Compradores/Imagenes/${categoryName.toLowerCase()}.jpg" alt="${desc}">
            <div class="item-info">
                <h4>${desc}</h4>
                <p>Producto ${index + 1} de la categoría ${categoryName}</p>
                <p class="price">$${price.toFixed(2)}</p>
                <div class="quantity-selector">
                    <button class="decrease-qty">-</button>
                    <span class="qty-value">1</span>
                    <button class="increase-qty">+</button>
                </div>
                <button class="add-to-cart" data-name="${desc}" data-price="${price.toFixed(2)}">
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        modalItemList.appendChild(itemCard);
    });

    // Configurar eventos para botones de cantidad y agregar al carrito
    setupProductEvents();

    // Mostrar modal
    modal.style.display = 'block';
}

// Configurar eventos para productos en el modal
function setupProductEvents() {
    // Botones de incremento/decremento de cantidad
    const decreaseBtns = document.querySelectorAll('.decrease-qty');
    const increaseBtns = document.querySelectorAll('.increase-qty');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    decreaseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const qtyElement = this.nextElementSibling;
            let qty = parseInt(qtyElement.textContent);
            if (qty > 1) {
                qtyElement.textContent = qty - 1;
            }
        });
    });

    increaseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const qtyElement = this.previousElementSibling;
            let qty = parseInt(qtyElement.textContent);
            qtyElement.textContent = qty + 1;
        });
    });

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const qtyElement = this.parentElement.querySelector('.qty-value');
            const qty = parseInt(qtyElement.textContent);
            
            addToCart(name, price, qty);
            alert(`${qty} ${name} agregado al carrito.`);
            
            // Restablecer cantidad a 1
            qtyElement.textContent = '1';
        });
    });
}

// Función para agregar al carrito
function addToCart(name, price, quantity) {
    // Buscar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }
    
    // Actualizar vista del carrito
    updateCartView();
}

// Actualizar vista del carrito
function updateCartView() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Limpiar contenido actual
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">El carrito está vacío.</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    // Crear elemento para cada item en el carrito
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong> x ${item.quantity}
            </div>
            <div>
                $${itemTotal.toFixed(2)}
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Actualizar total
    cartTotal.textContent = total.toFixed(2);
    
    // Añadir eventos para botones de eliminar
    const removeBtns = document.querySelectorAll('.remove-item');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

// Eliminar producto del carrito
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        updateCartView();
    }
}

// Cambiar al paso de información del cliente
function showCustomerInfo() {
    if (cart.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de continuar.');
        return;
    }
    
    document.querySelector('.cart-section').style.display = 'none';
    document.getElementById('customerInfoSection').style.display = 'block';
    currentStep = 'checkout';
}

// Volver al paso de carrito
function showCart() {
    document.querySelector('.cart-section').style.display = 'block';
    document.getElementById('customerInfoSection').style.display = 'none';
    currentStep = 'cart';
}

// Finalizar pedido
function finalizePedido(event) {
    event.preventDefault();
    
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerAddress = document.getElementById('customerAddress').value.trim();
    const deliveryOption = document.getElementById('deliveryOption').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const notes = document.getElementById('notes').value.trim();
    
    if (!customerName || !customerPhone || !customerAddress || !deliveryOption || !paymentMethod) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }
    
    // Crear objeto de pedido
    const order = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        customer: {
            name: customerName,
            phone: customerPhone,
            address: customerAddress
        },
        delivery: deliveryOption,
        payment: paymentMethod,
        notes: notes,
        items: [...cart],
        status: 'pendiente',
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    // Guardar pedido (por ahora solo en localStorage)
    saveOrder(order);
    
    // Limpiar carrito y formulario
    cart = [];
    document.getElementById('customerForm').reset();
    
    // Mostrar mensaje de éxito
    alert(`¡Pedido #${order.id} creado exitosamente!\n\nTotal: $${order.total.toFixed(2)}`);
    
    // Volver a la vista de menú
    document.querySelector('.cart-section').style.display = 'block';
    document.getElementById('customerInfoSection').style.display = 'none';
    updateCartView();
}

// Generar ID único para el pedido
function generateOrderId() {
    const timestamp = new Date().getTime();
    return `ORD-${timestamp.toString().slice(-6)}`;
}

// Guardar pedido
function saveOrder(order) {
    // Obtener pedidos existentes
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Agregar nuevo pedido
    orders.push(order);
    
    // Guardar en localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Alternar entre modos claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-toggle i');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const themeIcon = document.querySelector('.theme-toggle i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Exportar las funciones que necesitas usar en otros archivos
export {
    addToCart,
    removeFromCart,
    updateCartView,
    showCustomerInfo,
    showCart,
    finalizePedido,
    toggleTheme
};