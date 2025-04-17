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
    
    // Esta función actualiza el estado de apertura de las sucursales
    function actualizarEstadoSucursales() {
        // Obtener la fecha y hora actual
        const ahora = new Date();
        const diaSemana = ahora.getDay(); // 0 es domingo, 1 es lunes, etc.
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        
        // Convertir a formato decimal para comparaciones más fáciles (ej: 14:30 = 14.5)
        const horaDecimal = hora + (minutos / 60);
        
        // Seleccionar todas las tarjetas de sucursales
        const sucursales = document.querySelectorAll('.sucursal-card');
        
        // Para cada sucursal, determinar si está abierta o cerrada
        sucursales.forEach((sucursal, index) => {
            let estaAbierto = false;
            let mensajeHorario = '';
            
            // Lógica para determinar si está abierto
            // [Código existente para determinar el estado]
            
            // Actualizar el DOM con el estado
            const estadoElement = sucursal.querySelector('.sucursal-estado');
            const mensajeElement = estadoElement.nextElementSibling;
            
            if (estaAbierto) {
                estadoElement.textContent = 'ABIERTO AHORA';
                estadoElement.className = 'sucursal-estado abierto';
            } else {
                estadoElement.textContent = 'CERRADO';
                estadoElement.className = 'sucursal-estado cerrado';
            }
            
            mensajeElement.textContent = mensajeHorario;
        });
    }
    
    // Ejecutar la función al cargar la página
    actualizarEstadoSucursales();
    
    // Actualizar cada minuto (opcional)
    setInterval(actualizarEstadoSucursales, 60000);
});