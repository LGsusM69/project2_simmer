document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.nav-img');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('close-btn');

    //open menu
    menuButton.addEventListener('click', function() {
        menu.classList.add('open'); 
    });
    //close menu
    closeButton.addEventListener('click', function() {
        menu.classList.remove('open');
    });
});
