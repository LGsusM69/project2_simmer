// ARRAY OF RECIPES DATA:

const recipes = [
    {
        title: "Spicy Garlicky Sesame Tofu",
        description: "Pair with rice and steamed veggies for a simple, 30-minute meal that’s vegan, gluten-free, and naturally sweetened. Let’s make it! delicious Italian dish with a crispy crust and flavorful toppings.",
        ingredients: ["tofu, sesame sauce, olive oil or avocado oil, sea salt"],
        instructions: "Preheat the oven to 425 degrees F (218 C) and line a baking sheet with parchment paper. Crumble the tofu into pieces 1/2 to 1 inch in size and arrange them on the parchment-lined baking sheet. Add oil, sprinkle with salt, and toss to evenly coat the tofu. Once the oven is preheated, bake for 10 minutes, flip with a spatula, and bake for another 10-15 minutes or until the tofu is a little firm and golden with crispy edges. SAUCE: To a medium saucepan, add the maple syrup, soy sauce or tamari, rice vinegar, sesame oil, red pepper flakes, and garlic. Bring to a simmer over medium heat. Meanwhile, to a small bowl, add the cornstarch and water and stir to combine. Once the sauce is simmering, add the cornstarch mixture, stir, and continue simmering, stirring occasionally until the sauce becomes thick like honey — about 3 minutes. Remove from heat and stir in the sesame seeds. Taste and adjust as needed, adding more maple syrup for sweetness, tamari for overall flavor, garlic for zing, or red pepper flakes for heat. Set aside. Once the tofu is golden brown, place it into the sauce and stir to fully coat. Serve warm with rice, steamed vegetables, or other sides for a tasty meal!",
        imgURL: "/images/sesame_tofu/.png"
    },
    {
        title: "Vegan Chili Cheese Fries",
        description: "This versatile, nutrient-packed side pairs well with Asian-inspired entrées and makes a simple meal with rice + your choice of protein. Let’s make crave-worthy greens!",
        ingredients: ["sesame oil, 2 cloves garlic, red pepper flakes, 1 bunch swiss chard leaves, tamari, 1/4 cup water"],
        instructions: "Heat a large rimmed skiller over low-medium heat. Add the sesame oil, garlic, ginger, and red pepper flakes and cook until lightly sizzling. Add the water and cover and turn the heat to low. Cook for 8-10 minutes, until the water has evaporated. Taste and adjust, addming more tamari for saltiness and flavor. Ejoy warm paired Asian-inspired entrees or rice + your protein of choice.",
        imgURL: "/images/cheese_fries.png"
    },
    {
        title: "Sesame Sautéed Swiss Chard",
        description: "A refreshing mix of greens and vegetables.",
        ingredients: ["Mixed greens, cherry tomatoes, cucumber, red onion, bell pepper, feta cheese, balsamic vinaigrette"],
        instructions: "Wash and dry mixed greens. Chop vegetables and toss with greens in a large bowl. Crumble feta cheese on top. Drizzle with balsamic vinaigrette. Toss to combine and serve immediately.",
        imgURL: "/images/swiss_chard.png"
    },

    { 
        title: "Creamy Carrot Ginger Soup",
        description: "Just 1 pot and 8 simple ingredients required for this vibrant, warming chilly weather staple. Let us show you how it’s done!",
        ingredients: ["olive oil, 2 pounds carrots, 1 medium onion, fresh ginger, garlic, sea salt, red pepper flakes"],
        instructions: "Heat the oil in a large pot over medium heat. Once hot, add the carrots and onion and cook, stirring occasionally, until the onions are translucent and the carrots are starting to soften, about 5-7 minutes. Add the giner, garlic, sea salt, and red ppeper flakes and cook for another 2 minutes. Add broth of choice and bring the soup to a simmer for 15 minutes. Turn off the heat and stir in the coconut milk. Using an immersion blender, blend the soup until a smooth consistency is reached. Season to taste with salt and enjoy!",
        imgURL: "/images/carrot_soup.png"
    },

    {
        title: "Vegan Key Lime Pie",
        description: "Just 9 ingredients required and perfect for sharing with family and friends! Start zesting, we have pie to make!",
        ingredients: ["1/2 cups headed graham cracker crumbs, vegan butter, raw cashews, key lime zest, key lime juice, cornstarch, sea salt, vanilla extract"],
        instructions: "Preheat your oven to 350 degrees F (176 C). To a bowl, add graham cracker crumbs, vegan butter, raw cashews, key lime zest, key lime juice, cornstarch, sea salt and vanilla extract. Place it in the oven for 10 minutes and allow for it to cool before serving. Slice and enjoy!",
        imgURL: "/images/keylime_pie.png"
    },

    { 
        title: "Skillet Ratatouille & Eggs",
        description: "Just 10 ingredients required and perfect for pairing with bread or polenta. Let us show you how it’s done!",
        ingredients: ["olive oil, 1/2 onion, garlic, large red bell pepper, medium eggplant, 3 cups cherry tomatos, 4 large eggs"],
        instructions: "Heat a large skillet and add olive oil, onion, and garlic and saute for 5 minutes. Add red bell pepper, eggplant, tomatoes. Cover the skillet for 10 minutes. Add 4 eggs and cook on low heat for 5 minutes. Turn off the heat, sprinke with basil, and serve!",
        imgURL: "/images/skillet_eggs.png"
    }

];

const savedRecipes = [
    {title: "Spicy Garlicky Sesame Tofu", imgURL: "/images/sesame_tofu.png"},
    {title: "Vegan Chili Cheese Fries", imgURL: "/images/cheese_fries.png"},
    {title: "Sesame Sautéed Swiss Chard", imguRL: "/images/swiss_chard.png"},
    {title: "Creamy Carrot Ginger Soup", imgURL: "/images/carrot_soup.png"},
    {title: "Vegan Key Lime Pie", imgURL: "/images/keylime_pie.png"},
    {title: "Skillet Ratatouille & Eggs", imguRL: "/images/skillet_eggs.png"}
]

module.exports = {recipes, savedRecipes};
