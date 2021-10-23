export const handleUsersFoodEntries = (users = [], foodEntries = []) => {
    if (users.length <= 0) return null
    const data = []
    for (let i = 0; i < users.length; i++) {
        const userFoodEntries = {
            user: users[i],
            foodEntries: []
        }
        for (let j = 0; j < foodEntries.length; j++) {
            if (foodEntries[j].userId === users[i].uid) {
                userFoodEntries.foodEntries.push(foodEntries[j])
            }
        }
        data.push(userFoodEntries)
    }
    return data
}