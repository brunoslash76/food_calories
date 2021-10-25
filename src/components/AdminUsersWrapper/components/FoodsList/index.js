import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import FoodItem from '../FoodItem'

const FoodList = ({ foodArray }) => {
    const [foods, setFoods] = useState(foodArray)

    useEffect(() => {
        setFoods(foodArray)
    }, [foodArray])

    const mapFoodItem = () => {
        return foods.map((food, index) => (
            <FoodItem
                key={`food-${food.foodName}-${index}`}
                food={food}
                setFoods={setFoods}
            />
        ))
    }
    if (foodArray.length <= 0) return <div>No food entries</div>

    return (<ul>{mapFoodItem()}</ul>)
}

FoodList.propTypes = {
    foodArray: PropTypes.array.isRequired
}

FoodList.defaultProps = {
    foodArray: []
}

export default FoodList