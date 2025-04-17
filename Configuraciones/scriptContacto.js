document.addEventListener('DOMContentLoaded', function () {
    // Configuración del cambio de tema
    const themeToggle = document.getElementById('themeToggle');
    
    // Comprueba si hay una preferencia guardada
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Aplica el modo según la preferencia guardada
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }
    
    // Agrega el manejador de eventos al botón
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Actualiza el icono del botón
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDark ? '🌙' : '☀️';
        
        // Guarda la preferencia
        localStorage.setItem('darkMode', isDark.toString());
    });
});

// Script para el menú hamburguesa en móviles
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Script para el formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí se añadiría el código para procesar el formulario
    alert('Gracias por contactarnos. Te responderemos lo antes posible.');
    contactForm.reset();
});