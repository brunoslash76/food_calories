import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Title, Text } from '../../../Typography'
import FoodItem from '../FoodItem'
import { Header } from './styles'

const FoodList = ({ foodArray = [] }) => {
    const { caloriesThreshold } = useSelector(state => state.caloriesReducer)

    if (foodArray.length <= 0) return null


    const mapFoodArray = () => {
        const datesAux = foodArray.map(food => food.date)
        const dates = new Set(datesAux)
        const array = []
        dates.forEach(date => {
            const obj = {
                date,
                foods: []
            }
            for (let i = 0; i < foodArray.length; i++) {
                if (foodArray[i].date === date) {
                    obj.foods.push(foodArray[i])
                }
            }
            array.push(obj)
        })
        return array.map(data => {
            return (
                <section key={data.date} style={{ marginBottom: '40px', overflowY: 'auto' }}>
                    <FoodItem foodArray={data} />
                </section>
            )
        })
    }

    return (
        <>
            <Header>
                <Title>Foods</Title>
                <Text>
                    Daily Calories Limit
                    <strong> {caloriesThreshold} </strong>
                    kcal
                </Text>
            </Header>
            {mapFoodArray()}
        </>
    )
}

FoodList.propTypes = {
    foodArray: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.any.isRequired,
            foodName: PropTypes.string.isRequired,
            foodCalories: PropTypes.string.isRequired,
            time: PropTypes.any.isRequired,
            userId: PropTypes.string.isRequired
        })
    )
}



export default FoodList