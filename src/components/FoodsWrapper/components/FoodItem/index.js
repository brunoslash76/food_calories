import { ListItem, Span, Header, DateText } from './styles'
import CaloriesCalculator from '../CaloriesCalculator'
import { Text } from '../../../Typography'

const FoodItem = ({ foodArray }) => {
  const mapFoodArry = () => {
    return foodArray.foods.map((food, index) => {
      const time = new Date(food.time)
      return (
        <ListItem key={`${food.name}_${index}`}>
          <Text>{food.foodName}</Text>
          <div>
            <Span style={{ marginRight: '32px' }}>{food.foodCalories} Kcal</Span>
            <Span small>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Span>
          </div>
        </ListItem>
      )
    })
  }

  return (
    <>
      <Header>
        <CaloriesCalculator foods={foodArray} />
        <DateText>{foodArray.date}</DateText>
      </Header>
      <ul>
        {mapFoodArry()}
      </ul>
    </>
  )
}

export default FoodItem
