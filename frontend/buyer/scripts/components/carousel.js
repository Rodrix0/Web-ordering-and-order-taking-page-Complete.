// Función para crear carruseles reutilizables
function createCarousel(containerId, carouselItems) {
    const carouselContainer = document.getElementById(containerId);
    let currentSlide = 0;
    let slideInterval;

    // Crear elementos del carrusel
    function initCarousel() {
        if (!carouselContainer) return;
        
        // Crear las diapositivas
        carouselItems.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            
            slide.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="carousel-image">
                <div class="carousel-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            carouselContainer.appendChild(slide);
        });

        // Crear controles de navegación
        const navDiv = document.createElement('div');
        navDiv.className = 'carousel-nav';
        
        carouselItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            navDiv.appendChild(dot);
        });
        
        carouselContainer.appendChild(navDiv);

        // Crear botones de anterior y siguiente
        const prevBtn = document.createElement('button');
        prevBtn.id = 'prevBtn';
        prevBtn.className = 'carousel-btn';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.addEventListener('click', prevSlide);
        
        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextBtn';
        nextBtn.className = 'carousel-btn';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.addEventListener('click', nextSlide);
        
        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);

        // Iniciar el cambio automático
        startAutoSlide();
    }

    // Cambiar a la diapositiva específica
    function goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        
        slides.forEach((slide) => slide.classList.remove('active'));
        dots.forEach((dot) => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
        
        // Reiniciar el temporizador cuando se cambia manualmente
        resetAutoSlide();
    }

    // Ir a la diapositiva anterior
    function prevSlide() {
        const newIndex = currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1;
        goToSlide(newIndex);
    }

    // Ir a la diapositiva siguiente
    function nextSlide() {
        const newIndex = currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1;
        goToSlide(newIndex);
    }

    // Iniciar cambio automático cada 10 segundos
    function startAutoSlide() {
        slideInterval = window.setInterval(() => {
            nextSlide();
        }, 10000); // 10 segundos
    }

    // Reiniciar el temporizador
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    if (carouselContainer) {
        // Pausar el carrusel al pasar el mouse
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        // Reanudar el carrusel al quitar el mouse
        carouselContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }

    // Inicializar el carrusel
    initCarousel();

    // Detectar cambios en el tema
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                // El carrusel se adapta automáticamente a los cambios de tema
                // gracias a las variables CSS
            }
        });
    });

    if (document.body) {
        observer.observe(document.body, { attributes: true });
    }
}