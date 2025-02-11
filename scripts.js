document.getElementById('menuButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique no botão propague para o documento
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var menuButton = document.getElementById('menuButton');
    
    // Verifica se o clique foi fora do menu e do botão
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open'); // Fecha o menu
    }
});

// Fecha o menu ao clicar em um item do menu
var menuItems = document.querySelectorAll('#sidebar ul li a');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('open'); // Fecha o menu
    });
});