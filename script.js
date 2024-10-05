// Modo Oscuro
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode'); // Cambiamos entre dark-mode y light-mode
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Navegar entre páginas con las flechas
function navigatePage(direction) {
    const pages = ['index.html', 'page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html', 'page6.html', 'page7.html', 'page8.html', 'page9.html']; // Lista de páginas
    const currentPage = window.location.pathname.split("/").pop(); // Obtener la página actual
    const currentIndex = pages.indexOf(currentPage); // Buscar índice de la página actual
    let newIndex = currentIndex + direction; // Determinar nueva página

    // En caso de que el índice salga de los límites del array
    if (newIndex < 0) newIndex = pages.length - 1; // Regresar a la última página si se está en la primera
    if (newIndex >= pages.length) newIndex = pages.length - 1; // Mantener en la última página si se va hacia adelante

    // Cambiar a la nueva página
    window.location.href = pages[newIndex];
    updateButtonStates(); // Actualizar estados de los botones
}

// Cambiar con el select
function changePage() {
    const select = document.getElementById('page-select');
    window.location.href = select.value; // Cambiar página según el valor seleccionado
}

// Detectar la página actual y seleccionar el valor adecuado en el select al cargar la página
window.onload = () => {
    const select = document.getElementById('page-select');
    const currentPage = window.location.pathname.split("/").pop(); // Obtener la página actual
    select.value = currentPage; // Establecer el valor del select según la página actual
    updateButtonStates(); // Actualizar estados de los botones
};

// Actualiza el estado de los botones de navegación
function updateButtonStates() {
    const pages = ['index.html', 'page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html', 'page6.html', 'page7.html', 'page8.html', 'page9.html']; // Lista de páginas
    const currentPage = window.location.pathname.split("/").pop(); // Obtener la página actual
    const currentIndex = pages.indexOf(currentPage); // Buscar índice de la página actual

    // Obtener referencias a los botones
    const prevButton = document.querySelector('.btn-dark:first-of-type'); // Botón de retroceso
    const nextButton = document.querySelector('.btn-dark:last-of-type'); // Botón de siguiente

    // Deshabilitar el botón de retroceso si estamos en la primera página
    prevButton.disabled = currentIndex === 0;

    // Deshabilitar el botón de siguiente si estamos en la última página
    nextButton.disabled = currentIndex === pages.length - 1;
}
