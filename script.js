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
            <li>1 lb (450 g) flank steak, thinly sliced against the grain</li>
            <li>1 tablespoon vegetable oil (divided)</li>
            <li>1 red bell pepper, sliced</li>
            <li>1 green bell pepper, sliced</li>
            <li>1 cup broccoli florets</li>
            <li>1 medium carrot, thinly sliced</li>
            <li>3 cloves garlic, minced</li>
            <li>1 tablespoon fresh ginger, grated</li>
            <li>2 green onions, sliced (optional)</li>
        </ul>

        <h3>Stir Fry Sauce:</h3>
        <ul>
            <li>1/4 cup low-sodium soy sauce</li>
            <li>1 tablespoon oyster sauce</li>
            <li>1 tablespoon hoisin sauce</li>
            <li>1 teaspoon sesame oil</li>
            <li>1 teaspoon cornstarch</li>
            <li>1/4 cup beef broth or water</li>
            <li>1 teaspoon brown sugar (optional)</li>
        </ul>

        <h3>Preparation:</h3>
        <ol>
            <li>Slice steak thinly against the grain for tenderness.</li>
            <li>In a small bowl, whisk together all sauce ingredients until smooth. Set aside.</li>
            <li>Prepare and chop all vegetables before cooking (stir frying moves quickly).</li>
        </ol>

        <h3>Cooking Instructions:</h3>
        <ol>
            <li>Heat a large skillet or wok over high heat.</li>
            <li>Add 1/2 tablespoon oil.</li>
            <li>Add beef in a single layer. Sear 2–3 minutes until browned.</li>
            <li>Remove beef from pan and set aside.</li>
            <li>Add remaining oil to pan.</li>
            <li>Add garlic and ginger; cook 30 seconds until fragrant.</li>
            <li>Add vegetables and stir fry 3–4 minutes until tender-crisp.</li>
            <li>Return beef to the pan.</li>
            <li>Pour in sauce and stir continuously until thickened (1–2 minutes).</li>
            <li>Remove from heat and garnish with green onions.</li>
        </ol>

        <h3>Serving Suggestions:</h3>
        <ul>
            <li>Serve over steamed white or brown rice</li>
            <li>Pair with rice noodles</li>
            <li>Serve in lettuce wraps for a low-carb option</li>
        </ul>

        <h3>Meal Prep & Storage:</h3>
        <ul>
            <li>Store in airtight container up to 4 days in refrigerator.</li>
            <li>Reheat in skillet for best texture.</li>
            <li>Freezes well up to 2 months.</li>
        </ul>
    `,
    calories: 'Approx. 620 kcal per serving (without rice)'
},

'meal4': {
    name: 'Veggie Pasta',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>12 oz (340 g) penne or spaghetti</li>
            <li>1 tablespoon olive oil</li>
            <li>1 zucchini, sliced into half-moons</li>
            <li>1 red bell pepper, sliced</li>
            <li>1 cup cherry tomatoes, halved</li>
            <li>1 cup fresh spinach</li>
            <li>3 cloves garlic, minced</li>
            <li>1/2 teaspoon Italian seasoning</li>
            <li>1/4 teaspoon red pepper flakes (optional)</li>
            <li>Salt and black pepper to taste</li>
            <li>1/3 cup grated Parmesan cheese</li>
            <li>Fresh basil for garnish (optional)</li>
        </ul>

        <h3>Preparation:</h3>
        <ol>
            <li>Wash and chop all vegetables before starting.</li>
            <li>Bring a large pot of water to a rolling boil.</li>
            <li>Add 1 tablespoon salt to the water (this flavors the pasta).</li>
        </ol>

        <h3>Cooking Instructions:</h3>
        <ol>
            <li>Add pasta to boiling water and cook according to package instructions until al dente (usually 8–10 minutes).</li>
            <li>Reserve 1/2 cup pasta water before draining.</li>
            <li>Heat olive oil in a large skillet over medium heat.</li>
            <li>Add garlic and sauté 30 seconds until fragrant.</li>
            <li>Add zucchini and bell pepper; cook 3–4 minutes.</li>
            <li>Add cherry tomatoes and cook until slightly softened.</li>
            <li>Stir in spinach and cook until wilted.</li>
            <li>Season with Italian seasoning, red pepper flakes, salt, and pepper.</li>
            <li>Add drained pasta to skillet and toss to combine.</li>
            <li>If needed, add reserved pasta water a few tablespoons at a time to loosen sauce.</li>
            <li>Stir in Parmesan cheese until melted and evenly distributed.</li>
            <li>Remove from heat and garnish with fresh basil.</li>
        </ol>

        <h3>Serving Suggestions:</h3>
        <ul>
            <li>Add grilled chicken for extra protein</li>
            <li>Top with extra Parmesan or feta cheese</li>
            <li>Serve with garlic bread and a side salad</li>
        </ul>

        <h3>Meal Prep & Storage:</h3>
        <ul>
            <li>Store in airtight container up to 4 days in refrigerator.</li>
            <li>Add a splash of water before reheating to prevent dryness.</li>
            <li>Freezes up to 2 months (texture may soften slightly).</li>
        </ul>
    `,
    calories: 'Approx. 480 kcal per serving'
},

'meal5': {
    name: 'Turkey Wrap',
    instructions: `
        <h3>Ingredients:</h3>
        <ul>
            <li>1 large whole wheat tortilla (10-inch)</li>
            <li>4 oz sliced turkey breast (deli or roasted)</li>
            <li>1 slice Swiss or cheddar cheese</li>
            <li>1/4 avocado, sliced</li>
            <li>1 leaf romaine lettuce</li>
            <li>2 slices tomato</li>
            <li>2 tablespoons shredded carrots (optional)</li>
            <li>1 tablespoon hummus, mayonnaise, or mustard</li>
            <li>Salt and black pepper to taste</li>
        </ul>

        <h3>Preparation:</h3>
        <ol>
            <li>Lay tortilla flat on a clean surface or cutting board.</li>
            <li>Spread hummus, mayo, or mustard evenly over the center.</li>
            <li>Layer turkey evenly across the middle.</li>
            <li>Add cheese slice on top of turkey.</li>
        </ol>

        <h3>Assembly Instructions:</h3>
        <ol>
            <li>Add avocado slices, lettuce, tomato, and shredded carrots.</li>
            <li>Season lightly with salt and black pepper.</li>
            <li>Fold in both sides of the tortilla.</li>
            <li>Roll tightly from the bottom up to form a wrap.</li>
            <li>Slice in half diagonally before serving.</li>
        </ol>

        <h3>Optional Toasted Version:</h3>
        <ol>
            <li>Heat a skillet over medium heat.</li>
            <li>Place wrap seam-side down in the pan.</li>
            <li>Cook 2–3 minutes per side until lightly golden and cheese melts.</li>
            <li>Remove, rest 1 minute, then slice.</li>
        </ol>

        <h3>Serving Suggestions:</h3>
        <ul>
            <li>Serve with baked sweet potato fries</li>
            <li>Pair with a side salad</li>
            <li>Add fresh fruit for a balanced meal</li>
        </ul>

        <h3>Meal Prep & Storage:</h3>
        <ul>
            <li>Wrap tightly in foil or plastic wrap for meal prep.</li>
            <li>Store in refrigerator up to 3 days.</li>
            <li>If meal prepping, add avocado just before eating to prevent browning.</li>
        </ul>
    `,
    calories: 'Approx. 390 kcal per wrap'
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
