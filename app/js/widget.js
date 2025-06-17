// Inicializar Zoho CRM SDK
ZOHO.embeddedApp.on("PageLoad", function() {
    // Inicializar el widget
    inicializarWidget();
    
    // Inicializar el SDK de Zoho
    ZOHO.embeddedApp.init();
});

// Inicializar el widget
function inicializarWidget() {
    // Obtener elementos del DOM
    const widgetContainer = document.getElementById('widget-container');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');
    
    // Agregar evento de clic para mostrar el modal
    widgetContainer.addEventListener('click', function() {
        modal.style.display = 'flex';
        
        // Opcional: Registrar evento usando el SDK de Zoho
        console.log("Widget clickeado");
    });
    
    // Agregar evento de clic para cerrar el modal con el botón
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Agregar evento para cerrar el modal haciendo clic fuera del contenido
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Opcional: Obtener datos del registro actual
    ZOHO.CRM.API.getRecord({
        Entity: "Leads",
        RecordID: ZOHO.CRM.ENTITY.getRecordID()
    })
    .then(function(data) {
        if (data && data.data && data.data.length > 0) {
            console.log("Datos del registro:", data.data[0]);
            // Aquí puedes personalizar el contenido del modal basado en los datos del registro
        }
    });
}