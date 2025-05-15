// main.js - Archivo principal que inicializa todas las funcionalidades
import { initThemeToggler } from './components/themeToggler.js';
import { createMenuCards } from './menu/menuCards.js';

// Función principal de inicialización
function initApp() {
    console.log('Inicializando aplicación...');
    
    // Inicializar el toggle de tema
    initThemeToggler();
    
    // Inicializar las tarjetas del menú si estamos en la página principal
    if (document.getElementById('menuCards')) {
        createMenuCards();
    }
    
    console.log('Aplicación inicializada correctamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);