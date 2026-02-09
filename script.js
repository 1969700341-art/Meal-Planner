function showMealDetails(mealId) {
    // Here we would dynamically load meal details based on mealId
    const mealDetails = {
        'meal1': {
            name: 'Chicken Salad',
            image: 'meal1.jpg',
            instructions: 'Grill chicken, mix with veggies, and add dressing.',
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
