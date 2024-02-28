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

    const APP_ID = '024e9288';
    const APP_KEY = 'd42396aaf1425c70436f98ca4589217e';
    const recipeContainer = document.getElementById('recipe-container');
    const loadRecipesButton = document.getElementById('load-recipes');
    const categoryDropdown = document.getElementById('category');

    loadRecipesButton.addEventListener('click', function() {
      const category = categoryDropdown.value;
      const API_URL = `https://api.edamam.com/api/recipes/v2/search?q=${category}&app_id=${APP_ID}&app_key=${APP_KEY}`;

      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          const recipes = data.hits.map(hit => ({
            label: hit.recipe.label,
            image: hit.recipe.image
          }));

          recipeContainer.innerHTML = '';
          recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
              <h3>${recipe.label}</h3>
              <img src="${recipe.image}" alt="${recipe.label}">
            `;
            recipeContainer.appendChild(recipeElement);
          });
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
          recipeContainer.innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
        });
    });