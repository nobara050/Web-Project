const toggleButton = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active'); // Show/hide the dropdown menu
});