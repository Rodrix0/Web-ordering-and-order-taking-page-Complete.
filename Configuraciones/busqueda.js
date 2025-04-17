document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    // Crear el contenedor de resultados si no existe
    let searchResults = document.getElementById('searchResults');
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.id = 'searchResults';
        document.body.appendChild(searchResults);
    }
    
    // Evento para el botón de búsqueda
    searchButton.addEventListener('click', performSearch);
    
    // Evento para buscar al presionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Evento para cerrar los resultados al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchButton.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Función para buscar comida
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') return;
        
        // Función para cargar los datos del menú (asincrónica)
        async function loadMenuItems() {
            try {
                // Primero intentamos cargar desde el módulo (si estamos en una página que lo usa)
                if (typeof menuItems !== 'undefined') {
                    return menuItems;
                }
                
                // Si no está disponible, hacemos una solicitud fetch para obtenerlo
                const response = await fetch('/configuraciones/menuData.json');
                if (!response.ok) {
                    throw new Error('No se pudo cargar el menú');
                }
                return await response.json();
            } catch (error) {
                console.error("Error cargando datos del menú:", error);
                // Usar un conjunto de datos de respaldo o mostrar un mensaje de error
                return [];
            }
        }
        
        // Realizar la búsqueda y mostrar resultados
        loadMenuItems().then(items => {
            // Procesar los resultados de búsqueda
            const results = searchMenuItems(items, searchTerm);
            
            // Mostrar resultados
            displaySearchResults(results);
        });
    }
    
    // Nueva función para búsqueda mejorada que evita duplicados
    function searchMenuItems(items, searchTerm) {
        // Crear un mapa para rastrear elementos únicos por nombre
        const uniqueItemMap = new Map();
        
        // Procesar cada categoría del menú
        items.forEach(category => {
            // Buscar coincidencias en la categoría principal
            if (category.name.toLowerCase().includes(searchTerm) || 
                (category.shortDescription && category.shortDescription.toLowerCase().includes(searchTerm))) {
                // Si la categoría coincide, agregamos la categoría como un resultado
                uniqueItemMap.set(category.name, {
                    name: category.name,
                    image: category.image,
                    shortDescription: category.shortDescription,
                    pageUrl: category.pageUrl,
                    isCategory: true
                });
            }
            
            // Buscar en los elementos detallados (si existen)
            if (category.items && Array.isArray(category.items)) {
                category.items.forEach(item => {
                    if (item.name.toLowerCase().includes(searchTerm) || 
                        (item.shortDescription && item.shortDescription.toLowerCase().includes(searchTerm)) ||
                        (item.fullDescription && item.fullDescription.toLowerCase().includes(searchTerm))) {
                        
                        // Si el elemento coincide, lo agregamos como un resultado único
                        uniqueItemMap.set(item.name, {
                            name: item.name,
                            image: item.image || category.image,
                            shortDescription: item.shortDescription || `${item.name} - ${category.name}`,
                            price: item.price,
                            pageUrl: item.pageUrl || category.pageUrl
                        });
                    }
                });
            }
            
            // Buscar en las descripciones completas para elementos implícitos
            // Esto lo hacemos solo si no encontramos coincidencias directas para el término
            if (category.fullDescription && typeof category.fullDescription === 'string' && 
                !category.name.toLowerCase().includes(searchTerm)) {
                
                const subItems = category.fullDescription.split('<br>').filter(text => text.trim().length > 0);
                
                subItems.forEach(subItemText => {
                    const subItemName = subItemText.trim();
                    
                    // Solo agregar si el subitem coincide con la búsqueda y no existe ya
                    if (subItemName.toLowerCase().includes(searchTerm) && !uniqueItemMap.has(subItemName)) {
                        uniqueItemMap.set(subItemName, {
                            name: subItemName,
                            image: category.image,
                            shortDescription: `${category.name}`,
                            pageUrl: category.pageUrl
                        });
                    }
                });
            }
        });
        
        // Convertir el mapa a un array de resultados
        return Array.from(uniqueItemMap.values());
    }
    
    // Función para mostrar los resultados de búsqueda
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No se encontraron resultados</div>';
        } else {
            results.slice(0, 8).forEach(item => { // Limitar a 8 resultados para mejor rendimiento
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                
                // Construir el contenido HTML del resultado
                let htmlContent = `
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='/Imagenes/default-food.jpg'">
                    <div class="search-result-info">
                        <h4>${item.name}</h4>
                `;
                
                // Agregar detalles adicionales según el tipo de resultado
                if (item.price) {
                    htmlContent += `<p class="price">$${item.price}</p>`;
                }
                
                if (item.shortDescription) {
                    htmlContent += `<p>${item.shortDescription}</p>`;
                }
                
                // Si es una categoría, agregar una etiqueta
                if (item.isCategory) {
                    htmlContent += `<span class="category-tag">Categoría</span>`;
                }
                
                htmlContent += `</div>`;
                resultItem.innerHTML = htmlContent;
                
                // Evento de clic para navegar
                resultItem.addEventListener('click', () => {
                    window.location.href = item.pageUrl;
                });
                
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.style.display = 'block';
    }
});