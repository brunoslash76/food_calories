import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

import { SubTitle } from '../Typography'
import FoodList from './components/FoodsList'
import {
  addFoodEntry,
  getFoodEntries
} from '../../http/foodEntry';
import {
  AddEntryButton,
  Wrapper,
} from './styles'
import { AddFoodEntryModal } from '../Modals';
import { FoodEntry } from '../../models/FoodEntry';

const FoodsWrapper = () => {
  const [foodEntries, setFoodEntries] = useState([])
  const [dateTime, setDateTime] = useState({
    date: null,
    time: null
  })
  const [open, setOpen] = useState(false)
  const { user } = useSelector(state => state.authReducer)

  useEffect(() => {
    async function fetchFoodEntries() {
      if (user.uid) {
        try {
          const data = await getFoodEntries(user.uid)
          setFoodEntries(data ?? [])
        } catch (error) {
          toast.error('Oops something wrong is not right!')
        }
      }
    }
    fetchFoodEntries()
  }, [user])

  const handleAddFoodEntry = () => setOpen(true)

  const handleCloseModal = () => setOpen(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { foodName, foodCalories } = event.target
    const data = new FoodEntry(
      foodName.value,
      foodCalories.value,
      dateTime.date,
      dateTime.time,
      user.uid
    )


    setFoodEntries(state => ([...state, data]))
    await addFoodEntry(data)
    event.target.reset()
  }

  const handleCancel = () => {
    setOpen(false)
    setDateTime({
      date: null,
      time: null
    })
  }

  return (

    <Wrapper>
      {foodEntries.length <= 0
        ? (
          <SubTitle weigth="light" color="primary" style={{ textAlign: 'center' }}>
            You don't have entries
          </SubTitle>
        )
        : <FoodList foodArray={foodEntries} />
      }
      <AddFoodEntryModal
        open={open}
        handleCancel={handleCancel}
        handleCloseModal={handleCloseModal}
        handleDateChange={(newValue) => setDateTime(state => ({ ...state, date: newValue }))}
        handleSubmit={handleSubmit}
        handleTimeChange={(newValue) => setDateTime(state => ({ ...state, time: newValue }))}
        state={{
          ...foodEntries,
          ...dateTime
        }}
      />
      <AddEntryButton onClick={handleAddFoodEntry}>
        +
      </AddEntryButton>
    </Wrapper >
  )
}

export default FoodsWrapper