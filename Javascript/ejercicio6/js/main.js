document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces
    const enlaces = document.querySelectorAll("a");
  
    // Añade el evento de click a cada enlace
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function (event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
  
        // Obtén el párrafo hermano (elemento <p> dentro del mismo <div>)
        const contenido = enlace.previousElementSibling;
  
        // Alterna la visibilidad del contenido
        if (contenido.style.display === "none") {
          contenido.style.display = "block";
          enlace.textContent = "Ocultar contenidos";
        } else {
          contenido.style.display = "none";
          enlace.textContent = "Mostrar contenidos";
        }
      });
    });
  });
  