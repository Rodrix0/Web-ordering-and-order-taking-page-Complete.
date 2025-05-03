// menuItems.js - Datos del menú con productos específicos
const menuCategories = [
    {
        name: "Ofertas",
        image: "/Pagina_para_Vendedores/Imagenes/Ofertas.jpg",
        shortDescription: "Descuentos especiales para nuestros clientes.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuOfertas.html"
    },
    {
        name: "Hamburguesas",
        image: "/Pagina_para_Vendedores/Imagenes/Hamburguesa.jpg",
        shortDescription: "Deliciosas hamburguesas caseras.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuHambur.html"
    },
    {
        name: "Pizzas",
        image: "/Pagina_para_Vendedores/Imagenes/Pizzas.jpg",
        shortDescription: "Pizzas con masa artesanal.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuPizzas.html"
    },
    {
        name: "Empanadas",
        image: "/Pagina_para_Vendedores/Imagenes/Empanada.jpg",
        shortDescription: "Empanadas con diversos rellenos.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuEmpanadas.html"
    },
    {
        name: "Postres",
        image: "/Pagina_para_Vendedores/Imagenes/Postre.jpg",
        shortDescription: "Deliciosos postres caseros.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuPostres.html"
    },
    {
        name: "Ensaladas",
        image: "/Pagina_para_Vendedores/Imagenes/Ensalada.jpg",
        shortDescription: "Ensaladas frescas y saludables.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuEnsaladas.html"
    },
    {
        name: "Bebidas",
        image: "/Pagina_para_Vendedores/Imagenes/Bebidas.jpg",
        shortDescription: "Refrescantes opciones de bebidas.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuBebidas.html"
    },
    {
        name: "Tartas",
        image: "/Pagina_para_Vendedores/Imagenes/Tarta.jpg",
        shortDescription: "Tartas saladas para todos los gustos.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuTartas.html"
    },
    {
        name: "Sándwiches",
        image: "/Pagina_para_Vendedores/Imagenes/Sandwiches.jpg",
        shortDescription: "Sándwiches gourmet y tradicionales.",
        pageUrl: "/Pagina_para_Vendedores/Menu-Comidas/MenuSandwiches.html"
    }
];

// Productos específicos por categoría
const menuProducts = {
    "Hamburguesas": [
        {
            id: "hambur-comun",
            name: "Hamburguesa Comun",
            price: 1236.00,
            description: "Producto 1 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-comun.jpg"
        },
        {
            id: "hambur-doble",
            name: "Hamburguesa Doble",
            price: 1976.00,
            description: "Producto 2 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-doble.jpg"
        },
        {
            id: "hambur-triple",
            name: "Hamburguesa triple",
            price: 1541.00,
            description: "Producto 3 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-triple.jpg"
        },
        {
            id: "hambur-queso",
            name: "Hamburguesa con Queso",
            price: 1538.00,
            description: "Producto 4 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-queso.jpg"
        },
        {
            id: "hambur-bacon",
            name: "Hamburguesa con Bacon",
            price: 1525.00,
            description: "Producto 5 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-bacon.jpg"
        },
        {
            id: "hambur-completa",
            name: "Hamburguesa Con Tomate y Lechuga",
            price: 1677.00,
            description: "Producto 6 de la categoría Hamburguesas",
            image: "/Pagina_para_Vendedores/Imagenes/Hamburguesas/hamburguesa-completa.jpg"
        }
    ],
    "Pizzas": [
        {
            id: "pizza-mozzarella",
            name: "Pizza mozzarella",
            price: 9000.00,
            description: "Una deliciosa pizza con mozzarella, jamon y aceitunas.",
            image: "/Pagina-Para-Compradores/Menu-Comidas/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaMoza.jpg"
        },
        {
            id: "pizza-napolitana",
            name: "Pizza napolitana",
            price: 7000.00,
            description: "Una deliciosa pizza con mucha salsa y queso, con una aceituna.",
            image: "/Pagina-Para-Compradores/Menu-Comidas/Imagenes-de-Comidas/Imagenes de Pizzas/PizzNapo.jpg"
        },
        {
            id: "pizza-cuatroquesos",
            name: "Pizza cuatro quesos",
            price: 8000.00,
            description: "Una deliciosa Pizza con Mozzarrella, Queso rallado, Queso cremoso, Queso parmesano.",
            image: "/Pagina-Para-Compradores/Menu-Comidas/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaCuatroQuesos.jpg"
        }
    ],
    "Empanadas": [
        {
            id: "empanada-horno",
            name: "Empanadas al Horno",
            price: 800.00,
            description: "Empanadas horneadas tradicionales",
            image: "/Pagina_para_Vendedores/Imagenes/Empanadas/empanada-horno.jpg"
        },
        {
            id: "empanada-frita",
            name: "Empanadas Fritas",
            price: 850.00,
            description: "Empanadas fritas crujientes",
            image: "/Pagina_para_Vendedores/Imagenes/Empanadas/empanada-frita.jpg"
        },
        {
            id: "empanada-carne",
            name: "Empanada de Carne",
            price: 900.00,
            description: "Empanadas con relleno de carne",
            image: "/Pagina_para_Vendedores/Imagenes/Empanadas/empanada-carne.jpg"
        }
    ]
    // Puedes agregar las demás categorías siguiendo el mismo formato
};

export { menuCategories, menuProducts };

// menuDisplay.js - Funciones para mostrar el menú
import { menuCategories, menuProducts } from './menuItems.js';

// Función para crear tarjetas de categorías en la página principal
function createCategoryCards() {
    const menuContainer = document.getElementById('menuCards');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    menuCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${category.pageUrl}" class="card-link">
                <img src="${category.image}" alt="${category.name}" class="card-image">
                <div class="card-content">
                    <h3>${category.name}</h3>
                    <p>${category.shortDescription}</p>
                </div>
            </a>
        `;
        
        menuContainer.appendChild(card);
    });
}

// Función para abrir modal con productos de una categoría
function openCategoryModal(categoryName) {
    const modal = document.getElementById('categoryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalItemList = document.getElementById('modalItemList');
    
    if (!modal || !modalTitle || !modalItemList) return;
    
    modalTitle.textContent = categoryName;
    modalItemList.innerHTML = '';
    
    // Obtener productos de la categoría
    const products = menuProducts[categoryName];
    
    if (!products || products.length === 0) {
        modalItemList.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
        modal.style.display = 'block';
        return;
    }
    
    // Crear tarjetas de productos
    products.forEach(product => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        
        itemCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <div class="quantity-selector">
                    <button class="decrease-qty">-</button>
                    <span class="qty-value">1</span>
                    <button class="increase-qty">+</button>
                </div>
                <button class="add-to-cart" 
                        data-id="${product.id}" 
                        data-name="${product.name}" 
                        data-price="${product.price.toFixed(2)}">
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

// Función para mostrar productos específicos en páginas de categoría
function displayCategoryProducts(categoryName) {
    const productsContainer = document.getElementById('categoryProducts');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    const products = menuProducts[categoryName];
    
    if (!products || products.length === 0) {
        productsContainer.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
        return;
    }
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="card-image">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <div class="card-description">
                    ${product.description}
                </div>
                <div class="actions">
                    <button class="btn btn-secondary" onclick="showUpgradeModal('${product.name}')">Agrandar</button>
                    <button class="btn btn-primary" onclick="addToCartFromPage('${product.id}', '${product.name}', ${product.price})">Comprar</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(card);
    });
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
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const qtyElement = this.parentElement.querySelector('.qty-value');
            const qty = parseInt(qtyElement.textContent);
            
            // Llamar a la función del carrito
            cartModule.addToCart(id, name, price, qty);
            
            // Restablecer cantidad a 1
            qtyElement.textContent = '1';
        });
    });
}

// Función para manejar clic en categoría desde la página principal
function handleCategoryClick(event) {
    const cardElement = event.target.closest('.card, .featured-offer');
    if (!cardElement) return;

    // Prevenir navegación a la página
    event.preventDefault();

    // Buscar link y obtener URL
    const link = cardElement.querySelector('a');
    if (!link) return;

    // Determinar qué categoría se seleccionó
    const categoryName = cardElement.querySelector('h3').textContent;
    
    // Abrir modal con productos de esa categoría
    openCategoryModal(categoryName);
}

export {
    createCategoryCards,
    openCategoryModal,
    displayCategoryProducts,
    handleCategoryClick,
    setupProductEvents
};

// cartModule.js - Funciones para manejar el carrito de compras
const cartModule = (function() {
    // Variables para el carrito
    let cart = [];
    let currentStep = 'menu'; // 'menu', 'cart', o 'checkout'
    
    // Función para agregar al carrito
    function addToCart(id, name, price, quantity) {
        // Buscar si el producto ya está en el carrito
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: id,
                name: name,
                price: price,
                quantity: quantity
            });
        }
        
        // Actualizar vista del carrito
        updateCartView();
        
        // Mostrar mensaje
        alert(`${quantity} ${name} agregado al carrito.`);
    }
    
    // Función para agregar al carrito desde página de categoría
    function addToCartFromPage(id, name, price) {
        addToCart(id, name, price, 1);
        // Opcionalmente podemos mostrar el carrito después de agregar
        showCart();
    }
    
    // Actualizar vista del carrito
    function updateCartView() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems || !cartTotal) return;
        
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
        
        // Guardar carrito en localStorage
        saveCartToStorage();
    }
    
    // Eliminar producto del carrito
    function removeFromCart(index) {
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            updateCartView();
        }
    }
    
    // Guardar carrito en localStorage
    function saveCartToStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
    // Cargar carrito desde localStorage
    function loadCartFromStorage() {
        const savedCart = localStorage.getItem('shoppingCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartView();
        }
    }
    
    // Cambiar al paso de carrito
    function showCart() {
        // Mostrar sección del carrito
        const cartSection = document.querySelector('.cart-section');
        const customerSection = document.getElementById('customerInfoSection');
        
        if (cartSection) cartSection.style.display = 'block';
        if (customerSection) customerSection.style.display = 'none';
        
        currentStep = 'cart';
    }
    
    // Cambiar al paso de información del cliente
    function showCustomerInfo() {
        if (cart.length === 0) {
            alert('El carrito está vacío. Agrega productos antes de continuar.');
            return;
        }
        
        const cartSection = document.querySelector('.cart-section');
        const customerSection = document.getElementById('customerInfoSection');
        
        if (cartSection) cartSection.style.display = 'none';
        if (customerSection) customerSection.style.display = 'block';
        
        currentStep = 'checkout';
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
        
        // Guardar pedido
        saveOrder(order);
        
        // Limpiar carrito y formulario
        cart = [];
        document.getElementById('customerForm').reset();
        
        // Mostrar mensaje de éxito
        alert(`¡Pedido #${order.id} creado exitosamente!\n\nTotal: $${order.total.toFixed(2)}`);
        
        // Volver a la vista de menú
        const cartSection = document.querySelector('.cart-section');
        const customerSection = document.getElementById('customerInfoSection');
        
        if (cartSection) cartSection.style.display = 'block';
        if (customerSection) customerSection.style.display = 'none';
        
        updateCartView();
        saveCartToStorage();
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
    
    // API pública del módulo
    return {
        addToCart,
        addToCartFromPage,
        removeFromCart,
        updateCartView,
        showCart,
        showCustomerInfo,
        finalizePedido,
        loadCartFromStorage
    };
})();

export { cartModule };

// themeManager.js - Funciones para manejar el tema (claro/oscuro)
const themeManager = (function() {
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
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }
    
    // API pública del módulo
    return {
        toggleTheme,
        loadSavedTheme
    };
})();

export { themeManager };

// main.js - Archivo principal
import { createCategoryCards, handleCategoryClick } from './menuDisplay.js';
import { cartModule } from './cartModule.js';
import { themeManager } from './themeManager.js';

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear tarjetas de categorías
    createCategoryCards();

    // Configurar evento para el botón de tema
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', themeManager.toggleTheme);
    }

    // Inicializar modal
    const modal = document.getElementById('categoryModal');
    if (modal) {
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.style.display = 'none');
        }

        // Cerrar modal al hacer clic fuera de él
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Agregar eventos a las categorías (delegación de eventos)
    const menuContainer = document.getElementById('menuCards');
    if (menuContainer) {
        menuContainer.addEventListener('click', handleCategoryClick);
    }

    // Evento para continuar con información del cliente
    const checkoutBtn = document.getElementById('proceedToCheckout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', cartModule.showCustomerInfo);
    }

    // Evento para volver al carrito
    const backBtn = document.getElementById('backToCart');
    if (backBtn) {
        backBtn.addEventListener('click', cartModule.showCart);
    }

    // Evento para finalizar pedido
    const customerForm = document.getElementById('customerForm');
    if (customerForm) {
        customerForm.addEventListener('submit', cartModule.finalizePedido);
    }
    
    // Cargar tema al iniciar
    themeManager.loadSavedTheme();
    
    // Cargar carrito guardado
    cartModule.loadCartFromStorage();
});

// Exponer funciones globalmente para uso en HTML
window.addToCartFromPage = cartModule.addToCartFromPage;
window.showUpgradeModal = function(productName) {
    alert(`Opciones para agrandar ${productName}`);
    // Aquí puedes implementar la lógica para mostrar opciones de agrandar
};