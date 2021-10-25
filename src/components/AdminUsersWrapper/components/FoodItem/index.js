import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { Delete, ModeEdit } from '@mui/icons-material';

import { Container, Content, Actions } from './styles'
import { AddFoodEntryModal, ConfirmationModal } from '../../../Modals';
import { deleteFoodEntry, updateFoodEntry } from '../../../../http/foodEntry';
import { toast } from 'react-toastify';

const FoodItem = ({ food, setFoods }) => {
  const [foodEntry, setFoodEntry] = useState({ ...food })
  const [openAddEntryModal, setOpenAddEntryModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const time = new Date(foodEntry?.time)

  const handleDateChange = (newValue) => setFoodEntry(state => ({ ...state, date: newValue }))
  const handleTimeChange = (newValue) => setFoodEntry(state => ({ ...state, time: newValue }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { foodName, foodCalories } = event.target
    const data = {
      userId: food.userId,
      foodName: foodName.value,
      foodCalories: foodCalories.value,
      date: foodEntry.date,
      time: foodEntry.time,
      uid: food.uid
    }
    setFoodEntry(data)
    setOpenAddEntryModal(false)
    await updateFoodEntry(data)
  }

  const handleDeleteFoodEntry = async (event) => {
    event.preventDefault()
    try {
      await deleteFoodEntry(foodEntry.uid)
      setFoods(state => state.filter(entry => entry.uid !== foodEntry.uid))
      toast.success(`${foodEntry.foodName} deleted!`)
    } catch (error) {
      toast.error('Oops we had a problem deleting!')
    }
  }

  return (
    <>
      <Container>
        <Content>
          <p style={{ width: '33%' }}>
            {foodEntry?.foodName}
          </p>
          <p style={{ width: '33%', textAlign: 'center' }}>
            {foodEntry?.foodCalories} kcal
          </p>
          <p style={{ width: '33%', textAlign: 'right' }}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </Content>
        <Actions>
          <IconButton onClick={() => setOpenAddEntryModal(true)}>
            <ModeEdit />
          </IconButton>
          <IconButton onClick={() => setOpenDeleteModal(true)}>
            <Delete />
          </IconButton>
        </Actions>
      </Container>
      <AddFoodEntryModal
        handleCancel={() => setOpenAddEntryModal(false)}
        handleCloseModal={() => setOpenAddEntryModal(false)}
        handleDateChange={handleDateChange}
        handleSubmit={handleSubmit}
        handleTimeChange={handleTimeChange}
        open={openAddEntryModal}
        state={foodEntry || {}}
      />
      <ConfirmationModal
        handleCancel={() => setOpenDeleteModal(false)}
        handleCloseModal={() => setOpenDeleteModal(false)}
        handleSubmit={handleDeleteFoodEntry}
        open={openDeleteModal}
        title={`Delete item ${foodEntry.foodName}`}
      >
        <p style={{ textAlign: 'center' }}>Are you sure you want to delete this entry?</p>
      </ConfirmationModal>
    </>
  )
}

export default FoodItem
