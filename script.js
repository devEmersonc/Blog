// Modo Oscuro
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode'); // Cambiamos entre dark-mode y light-mode
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Navegar entre páginas con las flechas
function navigatePage(direction) {
    const pages = ['index.html', 'page2.html', 'page3.html']; // Lista de páginas
    const currentPage = window.location.pathname.split("/").pop(); // Obtener la página actual
    const currentIndex = pages.indexOf(currentPage); // Buscar índice de la página actual
    let newIndex = currentIndex + direction; // Determinar nueva página

    // En caso de que el índice salga de los límites del array
    if (newIndex < 0) newIndex = pages.length - 1;
    if (newIndex >= pages.length) newIndex = 0;

    window.location.href = pages[newIndex]; // Cambiar a la nueva página
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
};
