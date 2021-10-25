import { useSelector } from 'react-redux'
import { CaloriesLimit } from './styles';

const CaloriesCalculator = ({ foods }) => {

    const { caloriesThreshold } = useSelector(state => state.caloriesReducer)
    console.log(caloriesThreshold)
    let kcalTotal = 0;
    if (foods.foods.length > 0) {
        for (let i = 0; i < foods.foods.length; i++) {
            kcalTotal += Number(foods.foods[i].foodCalories)
        }
    }
    return (
        <CaloriesLimit
            error={kcalTotal > caloriesThreshold}
        >
            total de calorias: {kcalTotal} kcal
        </CaloriesLimit>
    )
}

export default CaloriesCalculator