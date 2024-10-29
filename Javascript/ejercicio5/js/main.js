document.addEventListener("DOMContentLoaded", function () {
    // Referencia a la lista y al botón
    const lista = document.getElementById("lista");
    const addButton = document.getElementById("addButton");
  
    // Evento de clic en el botón
    addButton.addEventListener("click", function () {
      // Calcula la posición del nuevo elemento
      const newItemPosition = lista.children.length + 1;
      const newItemText = `Elemento ${newItemPosition}`;
  
      // Crear el nuevo elemento de lista
      const newItem = document.createElement("li");
      newItem.className = "list-group-item"; // Clase Bootstrap para el estilo
      newItem.textContent = newItemText;
  
      // Agregar el nuevo elemento a la lista
      lista.appendChild(newItem);
    });
  });
  