// main.js - Archivo principal que inicializa todas las funcionalidades
import { initThemeToggler } from './components/themeToggler.js';
import { createMenuCards } from './menu/menuCardsVendedor.js';

// Función de inicialización principal
function initApp() {
    console.log("Inicializando aplicación...");
    
    // Inicializar el cambiador de tema
    initThemeToggler();
    
    // Crear las tarjetas del menú
    createMenuCards();
    
    console.log("Aplicación inicializada correctamente");
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // El DOM ya está listo
    initApp();
}