// Variable global para llevar el estado del texto adicional
let textoVisible = false;

function toggleText() {
  // Seleccionar el elemento de texto adicional y el enlace
  const additionalText = document.querySelector('.additional');
  const toggleLink = document.querySelector('a');

 // Verificar si se encuentra el elemento de texto adicional
  if (!additionalText) {
    console.error("El elemento de texto adicional no se encuentra.");
    return;
  }

  // Cambiar la visibilidad del texto adicional y el texto del enlace según el estado actual
  if (textoVisible) {
    // Si el texto está visible, lo ocultamos
    additionalText.classList.add('hidden');
    additionalText.classList.remove('visible');
    toggleLink.textContent = "Seguir leyendo";
  } else {
    // Si el texto está oculto, lo mostramos
    additionalText.classList.remove('hidden');
    additionalText.classList.add('visible');
    toggleLink.textContent = "Ocultar exceso de texto";
  }

  // Invertir el estado de visibilidad para la próxima vez
  textoVisible = !textoVisible;
}
