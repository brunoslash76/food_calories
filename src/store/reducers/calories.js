const caloriesInitialState = {
    caloriesThreshold: 2100
}

export default function caloriesReducer(state = caloriesInitialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_NEW_DAILY_CALORIES': {
            return {
                caloriesThreshold: action.payload
            }
        }
        default:
            return state
    }
}
