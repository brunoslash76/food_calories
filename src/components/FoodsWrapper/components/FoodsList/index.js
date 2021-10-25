import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import BlockIcon from '@mui/icons-material/Block';
import { TextField } from '@mui/material'
import { Title, Text } from '../../../Typography'
import FoodItem from '../FoodItem'
import { Header } from './styles'
import Button from '../../../Button'


const FoodList = ({ foodArray = [] }) => {
    const { caloriesThreshold } = useSelector(state => state.caloriesReducer)
    const dispatch = useDispatch()
    const [localFoodArray, setLocalFoodArray] = useState(foodArray)
    const [showCaloriesInput, setShowCaloriesInput] = useState(false)
    const [calories, setCalories] = useState(caloriesThreshold)

    useEffect(() => {
        setLocalFoodArray(foodArray)
    }, [foodArray])

    if (foodArray.length <= 0) return null

    const handleAlterCalories = () => {
        setShowCaloriesInput(true)
    }

    const handleSaveCalories = () => {
        console.log(calories)
        dispatch({ type: 'SET_NEW_DAILY_CALORIES', payload: calories })
        setShowCaloriesInput(false)
    }

    const mapFoodArray = () => {
        const datesAux = localFoodArray.map(food => {
            const date = new Date(food.date)
            return date.toISOString().split('T')[0]
        })
        const dates = new Set(datesAux)
        const array = []
        dates.forEach(date => {
            const obj = {
                date,
                foods: []
            }
            for (let i = 0; i < localFoodArray.length; i++) {
                const foodDate = new Date(localFoodArray[i].date)
                if (foodDate.toISOString().split('T')[0] === date) {
                    obj.foods.push(localFoodArray[i])
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
                {showCaloriesInput
                    ? (
                        <div>
                            <TextField
                                type="number"
                                onChange={event => setCalories(event.target.value)} value={calories}
                                variant='standard'
                                style={{ marginRight: '16px' }}
                            />
                            <Button
                                style={{ marginRight: '16px' }}
                                onClick={handleSaveCalories}

                            >
                                Save
                            </Button>
                            <Button
                                onClick={() => setShowCaloriesInput(false)}
                            >
                                <BlockIcon />
                            </Button>
                        </div>
                    )
                    : (
                        <Text onClick={handleAlterCalories}>
                            Daily Calories Limit
                            <strong> {calories} </strong>
                            kcal
                        </Text>
                    )}
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
const a = [
    '1633907387000',
    '1633908312000',
    '1633993805000',
    '1634080221000',
    '1634166635000',
    '1634253051000',
    '1634339466000',
    '1634426167000',
    '1634512518000',
    '1634698800000',
    '1634858198000',
    '1635031337000',
    '1635117719000',
]