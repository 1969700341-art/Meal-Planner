function showMealDetails(mealId) {
    const mealDetails = {
        'meal1': {
            name: 'Chicken Salad',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>Chicken breast</li>
                    <li>Mayonnaise</li>
                    <li>Celery</li>
                    <li>Red onion</li>
                    <li>Grapes</li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    <li>Cook and dice chicken.</li>
                    <li>Mix all ingredients in a bowl.</li>
                    <li>Serve chilled.</li>
                </ol>
            `,
            calories: '400 kcal'
        },

        'meal2': {
    name: 'Grilled Salmon',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>1 salmon fillet (6 oz / 170 g)</li>
            <li>1 tablespoon olive oil</li>
            <li>1 clove garlic (minced)</li>
            <li>1/2 teaspoon salt</li>
            <li>1/4 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1 lemon (sliced)</li>
        </ul>

        <h3>Instructions:</h3>
        <ol>
            <li>Preheat grill or grill pan to medium-high heat.</li>
            <li>Brush salmon with olive oil and season with garlic, salt, pepper, and paprika.</li>
            <li>Place salmon skin-side down on the grill.</li>
            <li>Grill for 4–5 minutes per side, until fish flakes easily with a fork.</li>
            <li>Remove from heat and serve with lemon slices.</li>
        </ol>
    `,
    calories: '520 kcal'
        },

'meal3': {
    name: 'Beef Stir Fry',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>8 oz (225 g) flank steak, thinly sliced</li>
            <li>1 tablespoon vegetable oil</li>
            <li>1 red bell pepper, sliced</li>
            <li>1 green bell pepper, sliced</li>
            <li>1 cup broccoli florets</li>
            <li>2 cloves garlic, minced</li>
            <li>1 tablespoon fresh ginger, grated</li>
            <li>3 tablespoons soy sauce</li>
            <li>1 tablespoon oyster sauce</li>
            <li>1 teaspoon cornstarch</li>
            <li>1/4 cup water</li>
        </ul>

        <h3>Instructions:</h3>
        <ol>
            <li>In a small bowl, mix soy sauce, oyster sauce, cornstarch, and water. Set aside.</li>
            <li>Heat vegetable oil in a large pan or wok over high heat.</li>
            <li>Add beef and cook for 2–3 minutes until browned. Remove and set aside.</li>
            <li>Add garlic and ginger, then vegetables. Stir fry for 3–4 minutes.</li>
            <li>Return beef to the pan, pour in sauce, and stir until thickened.</li>
            <li>Remove from heat and serve hot.</li>
        </ol>
    `,
    calories: '610 kcal'
},

        'meal4': {
            name: 'Veggie Pasta',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>Pasta</li>
                    <li>Zucchini</li>
                    <li>Tomatoes</li>
                    <li>Olive oil</li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    <li>Boil pasta.</li>
                    <li>Sauté vegetables.</li>
                    <li>Combine and serve.</li>
                </ol>
            `,
            calories: '450 kcal'
        },

        'meal5': {
            name: 'Turkey Wrap',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>Whole wheat wrap</li>
                    <li>Turkey slices</li>
                    <li>Lettuce</li>
                    <li>Cheese</li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    <li>Layer ingredients on wrap.</li>
                    <li>Roll tightly.</li>
                    <li>Slice and serve.</li>
                </ol>
            `,
            calories: '350 kcal'
        }
    };

    const meal = mealDetails[mealId];

    document.getElementById('modal-title').innerText = meal.name;
    document.getElementById('modal-instructions').innerHTML = meal.instructions;
    document.getElementById('modal-calories').innerText = `Calories: ${meal.calories}`;
    document.getElementById('meal-modal').style.display = "block";
}

function closeModal() {
    document.getElementById("meal-modal").style.display = "none";
}
