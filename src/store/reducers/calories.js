const caloriesInitialState = {
    caloriesThreshold: 2100
}

export default function caloriesReducer(state = caloriesInitialState, action) {
    switch (action.type) {
        case 'SET_NEW_DAILY_CALORIES': {
            return {
                calories: action.payload
            }
        }
        default:
            return state
    }
}
