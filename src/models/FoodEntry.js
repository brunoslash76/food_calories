export class FoodEntry {
    constructor(foodName, foodCalories, date, time, userId) {
        const localTime = new Date(time)
        const localDate = new Date(date)

        this.foodName = foodName
        this.foodCalories = foodCalories
        this.date = localDate.getTime()
        this.time = localTime.getTime()
        this.userId = userId
    }
}