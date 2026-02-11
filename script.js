document.getElementById('meal-modal').classList.remove('show');

function showMealDetails(mealId) {
    const mealDetails = {
'meal1': {
    name: 'Chicken Salad',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>2 boneless, skinless chicken breasts (about 12 oz / 340 g total)</li>
            <li>1/3 cup mayonnaise (or Greek yogurt for lighter option)</li>
            <li>1 celery stalk, finely chopped</li>
            <li>2 tablespoons red onion, finely diced</li>
            <li>1/3 cup red grapes, halved</li>
            <li>1 tablespoon Dijon mustard</li>
            <li>1 teaspoon lemon juice</li>
            <li>Salt and black pepper to taste</li>
            <li>Optional: chopped parsley or sliced almonds</li>
        </ul>

        <h3>Cooking Instructions (Chicken):</h3>
        <ol>
            <li>Bring a pot of lightly salted water to a boil.</li>
            <li>Add chicken breasts and reduce heat to a gentle simmer.</li>
            <li>Cook for 12–15 minutes, or until internal temperature reaches 165°F (75°C).</li>
            <li>Remove chicken and let cool completely.</li>
            <li>Dice or shred into small bite-sized pieces.</li>
        </ol>

        <h3>Assembly Instructions:</h3>
        <ol>
            <li>In a large bowl, combine mayonnaise, Dijon mustard, and lemon juice.</li>
            <li>Add chopped celery, red onion, and grapes.</li>
            <li>Fold in diced chicken and mix until evenly coated.</li>
            <li>Season with salt and pepper to taste.</li>
            <li>Refrigerate for at least 30 minutes before serving for best flavor.</li>
        </ol>

        <h3>Serving Suggestions:</h3>
        <ul>
            <li>Serve on whole grain bread</li>
            <li>Wrap in a tortilla</li>
            <li>Spoon over mixed greens</li>
            <li>Eat with crackers</li>
        </ul>

        <h3>Meal Prep & Storage:</h3>
        <ul>
            <li>Store in airtight container in refrigerator up to 4 days.</li>
            <li>Do not freeze (mayonnaise texture breaks down).</li>
        </ul>
    `,
    calories: 'Approx. 420 kcal per serving'
},

'meal2': {
    name: 'Grilled Salmon',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>2 salmon fillets (6 oz / 170 g each)</li>
            <li>1 tablespoon olive oil</li>
            <li>2 cloves garlic, minced</li>
            <li>1 tablespoon fresh lemon juice</li>
            <li>1 teaspoon lemon zest</li>
            <li>1/2 teaspoon salt</li>
            <li>1/4 teaspoon black pepper</li>
            <li>1/2 teaspoon paprika</li>
            <li>1 tablespoon chopped fresh parsley (optional)</li>
            <li>Lemon wedges for serving</li>
        </ul>

        <h3>Preparation:</h3>
        <ol>
            <li>Pat salmon fillets dry with paper towels.</li>
            <li>In a small bowl, mix olive oil, garlic, lemon juice, lemon zest, salt, pepper, and paprika.</li>
            <li>Brush mixture evenly over both sides of salmon.</li>
            <li>Let marinate 10–15 minutes at room temperature.</li>
        </ol>

        <h3>Grilling Instructions:</h3>
        <ol>
            <li>Preheat grill to medium-high heat (about 400°F / 200°C).</li>
            <li>Lightly oil grill grates to prevent sticking.</li>
            <li>Place salmon skin-side down on grill.</li>
            <li>Close lid and grill 4–5 minutes.</li>
            <li>Carefully flip and cook another 3–4 minutes.</li>
            <li>Salmon is done when internal temperature reaches 145°F (63°C) and flakes easily with a fork.</li>
            <li>Remove from grill and garnish with parsley and lemon wedges.</li>
        </ol>

        <h3>Serving Suggestions:</h3>
        <ul>
            <li>Serve with roasted vegetables</li>
            <li>Pair with quinoa or brown rice</li>
            <li>Add a fresh side salad</li>
        </ul>

        <h3>Meal Prep & Storage:</h3>
        <ul>
            <li>Store in airtight container in refrigerator up to 3 days.</li>
            <li>Reheat gently to avoid drying out.</li>
            <li>Can be flaked cold over salads.</li>
        </ul>
    `,
    calories: 'Approx. 520 kcal per serving'
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
                    <li>Remove from heat and serve hot over rice or noodles.</li>
                </ol>
            `,
            calories: '610 kcal'
        },

        'meal4': {
            name: 'Veggie Pasta',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>8 oz (225 g) penne or spaghetti</li>
                    <li>1 tablespoon olive oil</li>
                    <li>1 zucchini, sliced</li>
                    <li>1 cup cherry tomatoes, halved</li>
                    <li>1/2 red bell pepper, sliced</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1/2 teaspoon Italian seasoning</li>
                    <li>Salt and pepper to taste</li>
                    <li>1/4 cup grated Parmesan cheese</li>
                </ul>

                <h3>Instructions:</h3>
                <ol>
                    <li>Bring a large pot of salted water to a boil and cook pasta according to package instructions. Drain and set aside.</li>
                    <li>Heat olive oil in a large skillet over medium heat.</li>
                    <li>Add garlic and sauté for 30 seconds until fragrant.</li>
                    <li>Add zucchini, bell pepper, and tomatoes. Cook for 4–5 minutes until tender.</li>
                    <li>Season with Italian seasoning, salt, and pepper.</li>
                    <li>Add cooked pasta to the skillet and toss to combine.</li>
                    <li>Top with Parmesan cheese and serve warm.</li>
                </ol>
            `,
            calories: '450 kcal'
        },

        'meal5': {
            name: 'Turkey Wrap',
            instructions: `
                <h3>Ingredients:</h3>
                <ul>
                    <li>1 large whole wheat tortilla</li>
                    <li>4 oz sliced turkey breast</li>
                    <li>1 slice cheddar or Swiss cheese</li>
                    <li>1/4 avocado, sliced</li>
                    <li>1 leaf romaine lettuce</li>
                    <li>2 tomato slices</li>
                    <li>1 tablespoon hummus or mustard</li>
                    <li>Salt and pepper to taste</li>
                </ul>

                <h3>Instructions:</h3>
                <ol>
                    <li>Lay the tortilla flat on a clean surface.</li>
                    <li>Spread hummus or mustard evenly over the center.</li>
                    <li>Layer turkey, cheese, avocado, lettuce, and tomato.</li>
                    <li>Season lightly with salt and pepper.</li>
                    <li>Fold in the sides and roll tightly from the bottom.</li>
                    <li>Slice in half and serve immediately or wrap for meal prep.</li>
                </ol>
            `,
            calories: '350 kcal'
        }
    };

    const meal = mealDetails[mealId];

    document.getElementById('modal-title').innerText = meal.name;
    document.getElementById('modal-instructions').innerHTML = meal.instructions;
    document.getElementById('modal-calories').innerText = `Calories: ${meal.calories}`;

    document.getElementById('meal-modal').classList.add('show');
}

function closeModal() {
    document.getElementById("meal-modal").classList.remove("show");
}
