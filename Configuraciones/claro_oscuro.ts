// Guardar en un archivo theme.ts
document.addEventListener('DOMContentLoaded', (): void => {
    const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;
    
    // Interface para definir estados del tema
    interface ThemeState {
        isDark: boolean;
        icon: string;
    }
    
    // Función para actualizar el tema
    const updateTheme = (state: ThemeState): void => {
        if (state.isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        themeToggle.textContent = state.icon;
        localStorage.setItem('darkMode', state.isDark.toString());
    };
    
    // Comprobar la preferencia guardada
    const savedDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
    
    // Aplicar el tema inicial
    updateTheme({
        isDark: savedDarkMode,
        icon: savedDarkMode ? '🌙' : '☀️'
    });
    
    // Manejar el cambio de tema
    themeToggle.addEventListener('click', (): void => {
        const isDark: boolean = !document.body.classList.contains('dark-mode');
        updateTheme({
            isDark: isDark,
            icon: isDark ? '🌙' : '☀️'
        });
    });
});