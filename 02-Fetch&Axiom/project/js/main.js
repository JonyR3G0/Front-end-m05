	// 1. Recibe y maneja las peticiones
	// 2. Carga un versículo diario al inicio
	// 3. Renderiza el versículo
	// 4. Maneja los temas
	// 5. Maneja la petición de versículos por el buscador

    addEventListener('DOMContentLoaded', () => {
        // 1. Recibe y maneja las peticiones
        //TODO: Implementar la función para recibir y manejar las peticiones
        handleRequests();

        // 2. Carga un versículo diario al inicio
        //TODO: Implementar la función para cargar un versículo diario
        loadDailyVerse();

        // 3. Renderiza el versículo
        //TODO: Implementar la función para renderizar el versículo
        renderVerse();
        
        // 4. Maneja los temas
        // const themeSelect = document.getElementById('theme-select');
        // themeSelect.addEventListener('change', handleThemeChange);
    
        // 5. Maneja la petición de versículos por el buscador
        //TODO: Implementar la función para manejar la petición de versículos por el buscador
    }