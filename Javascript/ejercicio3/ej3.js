// Función para mostrar la ventana de confirmación
function mostrarWindowConfirmacion() {
    // Llamada a confirm() que devuelve true o false según la elección del usuario
    const respuesta = confirm("Hola Mundo!");
    
    // Verifica la respuesta y muestra el mensaje correspondiente en la consola
    if (respuesta) {
        console.log("Has clicado OK");
    } else {
        console.log("Has clicado Cancelar");
    }
}

// Ejecuta la función al cargar la página o al hacer clic en un botón, por ejemplo.
mostrarWindowConfirmacion();