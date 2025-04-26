// themeToggler.js - Maneja la funcionalidad del cambio de tema claro/oscuro

function initThemeToggler() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error("No se encontró el elemento con ID 'themeToggle'");
        return;
    }
    
    // Comprueba si hay una preferencia guardada
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Aplica el modo según la preferencia guardada
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
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

    console.log("Theme toggler inicializado");
}

export { initThemeToggler };