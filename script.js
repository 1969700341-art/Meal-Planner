function showMealDetails(mealId) {
    // Here we would dynamically load meal details based on mealId
    const mealDetails = {
        'meal1': {
            name: 'Chicken Salad',
            image: 'meal1.jpg',
            instructions: '
                <h3>Ingredients:</h3>
                <ul>
                    <li>2 boneless, skinless chicken breasts (about 1 lb)</li>
                    <li>1 tablespoon olive oil</li>
                    <li>Salt and pepper to taste</li>
                    <li>1 tablespoon mustard (optional)</li>
                    <li>1 tablespoon honey (optional)</li>
                    <li>1/2 cup mayonnaise</li>
                    <li>1 tablespoon Dijon mustard (optional)</li>
                    <li>1/4 cup celery (chopped)</li>
                    <li>1/4 cup red onion (finely chopped)</li>
                    <li>1/2 cup grapes (cut in halves or quarters)</li>
                    <li>1/2 cup chopped apples (optional)</li>
                    <li>1/4 cup chopped almonds or walnuts (optional)</li>
                </ul>

                <h3>Instructions:</h3>
                <ol>
                    <li><strong>Cook the Chicken:</strong> Season the chicken breasts with salt and pepper. Heat a pan over medium heat and add 1 tablespoon of olive oil. Cook the chicken for about 6-7 minutes on each side until fully cooked (internal temperature should reach 165°F or 75°C). Let the chicken rest for a few minutes before shredding or cutting it into small pieces.</li>
                    <li><strong>Prepare the Salad Base:</strong> In a large bowl, combine the celery, red onion, grapes, and apples (if using). Add the shredded or diced chicken to the bowl.</li>
                    <li><strong>Make the Dressing:</strong> In a separate bowl, mix the mayonnaise, mustard, and honey (optional). Adjust the flavor with salt and pepper. Add a bit of Dijon mustard if you prefer a tangier taste.</li>
                    <li><strong>Combine:</strong> Pour the dressing over the chicken and veggie mixture. Toss until everything is well coated.</li>
                    <li><strong>Serve:</strong> Serve the chicken salad on a bed of greens, as a sandwich, or with crackers. Optionally garnish with chopped almonds or walnuts for extra crunch.</li>
                </ol>
        ',
            calories: '400 kcal'
        },
        // Add more meals here in the same format
    };

    const meal = mealDetails[mealId];

    // Update modal with meal details
    document.getElementById('modal-title').innerText = meal.name;
    document.getElementById('modal-instructions').innerText = meal.instructions;
    document.getElementById('modal-calories').innerText = `Calories: ${meal.calories}`;

    // Show the modal
    document.getElementById('meal-modal').style.display = "block";
}

function closeModal() {
    // Close the modal
    document.getElementById('meal-modal').style.display = "none";
}
