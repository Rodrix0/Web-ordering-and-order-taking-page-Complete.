// menuCards.js - Crea las tarjetas del menú en la página
import { menuItems } from './menuItemsVendedor.js';

function createMenuCards() {
    console.log("Iniciando función createMenuCards");
    
    // Obtener el contenedor
    const cardsContainer = document.getElementById('menuCards');
    
    // Verificar si el contenedor existe
    if (!cardsContainer) {
        console.error("ERROR: No se encontró el elemento con ID 'menuCards'");
        return;
    }
    
    console.log("Contenedor encontrado, generando tarjetas...");
    
    // Limpiar el contenedor antes de agregar nuevas tarjetas
    cardsContainer.innerHTML = '';
    
    // Agregar la tarjeta de Ofertas primero (será la primera en el array)
    const ofertaItem = menuItems[0];
    
    if (ofertaItem && ofertaItem.name === "Ofertas") {
        console.log("Creando tarjeta destacada para Ofertas");
        
        // Crear contenedor para la oferta destacada
        const featuredContainer = document.createElement('div');
        featuredContainer.className = 'featured-offer-container';
        
        // Crear la tarjeta de oferta
        const featuredCard = document.createElement('div');
        featuredCard.className = 'featured-offer';
        
        featuredCard.innerHTML = `
            <a href="${ofertaItem.pageUrl}">
                <img src="${ofertaItem.image}" alt="${ofertaItem.name}" class="card-image">
                <span class="featured-badge">¡Oferta Especial!</span>
            </a>
            <div class="card-content">
                <h3>${ofertaItem.name}</h3>
                <p>${ofertaItem.shortDescription}</p>
                <div class="card-description">
                    <p>${ofertaItem.fullDescription}</p>
                </div>
            </div>
        `;
        
        // Añadir la tarjeta al contenedor y el contenedor al DOM
        featuredContainer.appendChild(featuredCard);
        cardsContainer.appendChild(featuredContainer);
    }
    
    // Mostrar el resto de los ítems (empezando desde el índice 1)
    for (let i = 1; i < menuItems.length; i++) {
        const item = menuItems[i];
        console.log(`Creando tarjeta para ${item.name}`);
        
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <a href="${item.pageUrl}">
                <img src="${item.image}" alt="${item.name}" class="card-image">
            </a>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.shortDescription}</p>
                <div class="card-description">
                    <p>${item.fullDescription}</p>
                </div>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    }
    
    console.log("Tarjetas generadas correctamente");
}

export { createMenuCards };