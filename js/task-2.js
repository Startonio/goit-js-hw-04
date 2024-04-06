function calcAverageCalories(days) {
    // Якщо масив днів порожній, повертаємо 0
    if (days.length === 0) {
        return 0;
    }
    
    let totalCalories = 0;
    
    // Сумуємо кількість калорій для кожного дня
    for (let i = 0; i < days.length; i++) {
        totalCalories += days[i].calories;
    }
    
    // Обчислюємо середнє значення кількості калорій
    const averageCalories = totalCalories / days.length;
    
    return averageCalories;
}

// Перевірка роботи функції
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040
