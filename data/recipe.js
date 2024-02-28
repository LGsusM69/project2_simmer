// ARRAY OF RECIPES DATA:

const recipes = [
    {
        title: "Pizza",
        description: "A delicious Italian dish with a crispy crust and flavorful toppings.",
        ingredients: "Pizza dough, tomato sauce, mozzarella cheese, pepperoni, mushrooms, bell peppers, onions",
        instructions: "Preheat oven to 450°F (230°C). Roll out pizza dough on a floured surface. Spread tomato sauce evenly over the dough. Sprinkle shredded mozzarella cheese over the sauce. Add desired toppings such as pepperoni, mushrooms, bell peppers, and onions. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown and the cheese is bubbly. Slice and serve hot.",
        imgURL: "/images/pizza.png"
    },
    {
        title: "Pasta",
        description: "A simple yet delicious Italian staple.",
        ingredients: "Pasta, tomato sauce, garlic, olive oil, basil, Parmesan cheese",
        instructions: "Cook pasta according to package instructions. In a pan, heat olive oil over medium heat. Add minced garlic and sauté until fragrant. Add tomato sauce and simmer for a few minutes. Toss cooked pasta with the sauce. Serve hot with freshly grated Parmesan cheese and chopped basil.",
        imgURL: "/images/pasta.png"
    },
    {
        title: "Salad",
        description: "A refreshing mix of greens and vegetables.",
        ingredients: "Mixed greens, cherry tomatoes, cucumber, red onion, bell pepper, feta cheese, balsamic vinaigrette",
        instructions: "Wash and dry mixed greens. Chop vegetables and toss with greens in a large bowl. Crumble feta cheese on top. Drizzle with balsamic vinaigrette. Toss to combine and serve immediately.",
        imgURL: "/images/salad.png"
    },

];

const savedRecipes = [
    {title: "Salad", imgURL: "/images/salad.png"},
    {title: "Pasta", imgURL: "/images/pasta.png"},
    {title: "Pizza", imgURL: "/images/pizza.png"}
];

module.exports = {recipes, savedRecipes};
