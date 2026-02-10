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
                    <li>Salmon fillet</li>
                    <li>Olive oil</li>
                    <li>Lemon</li>
                    <li>Garlic</li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    <li>Season salmon with oil, garlic, and lemon.</li>
                    <li>Grill for 4–5 minutes per side.</li>
                    <li>Serve with vegetables.</li>
                </ol>
            `,
            calories: '520 kcal'
        },

        'meal3': {
            name: 'Beef Stir Fry',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>Beef strips</li>
                    <li>Bell peppers</li>
                    <li>Soy sauce</li>
                    <li>Garlic</li>
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    <li>Cook beef in a hot pan.</li>
                    <li>Add vegetables and sauce.</li>
                    <li>Stir fry until tender.</li>
                </ol>
            `,
            calories: '600 kcal'
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
