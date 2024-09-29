
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton'); // Reference to search button
    const recipesContainer = document.getElementById('recipesContainer');

    // Function to fetch recipes based on search query
    async function fetchRecipes(query) {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=e33f5f19&app_key=11dbd7ae36372f71fc8abebf9e4d394a
`);
        const data = await response.json();
        return data.hits;
    }

    // Function to render recipes to the DOM
    function renderRecipes(recipes) {
        recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.recipe.label}</h2>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <p>${recipe.recipe.source}</p>
                <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
            `;
            recipesContainer.appendChild(recipeElement);
        });
    }

    // Function to handle search button click
    searchButton.addEventListener('click', async function () {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            const recipes = await fetchRecipes(query);
            renderRecipes(recipes);
        } else {
            recipesContainer.innerHTML = ''; // Clear recipes container if search input is empty
        }
    });

    // Optional: Handle enter key press in search input
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
