import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Modal, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

import { SubTitle } from '../Typography'
import Button from '../Button'
import FoodList from './components/FoodsList'
import {
  AddEntryButton,
  CloseButton,
  FoodEntryContainer,
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  ModalFormContainer,
  Wrapper,
} from './styles'
import { useSelector } from 'react-redux';
import { addFoodEntry, getFoodEntries } from '../../http/foodEntry';
import { connectFirestoreEmulator } from '@firebase/firestore';

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
          setFoodEntries(data)
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
    const data = {
      userId: user.uid,
      foodName: foodName.value,
      foodCalories: foodCalories.value,
      date: dateTime.date,
      time: dateTime.time
    }
    clearInputs(event.target)
    setFoodEntries(state => ([...state, data]))
    const res = await addFoodEntry(data)
  }

  const clearInputs = (form) => {
    form.foodName.value = null
    form.foodCalories.value = null
    setDateTime({
      date: null,
      time: null,
    })
  }

  const handleCancel = () => {
    setOpen(false)
    setDateTime({
      date: null,
      time: null
    })
  }

  const handleTimeChange = (newValue) => {
    const date = new Date(newValue)

    const time = date.getTime()
    setDateTime(state => ({ ...state, time }));
  }

  const handleDateChange = (newValue) => {
    const date = new Date(newValue)
    const formatedDate = date.toISOString().split('T')[0]
    setDateTime(state => ({ ...state, date: formatedDate }));
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
      <Modal
        open={open}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <ModalCard>
          <ModalFormContainer onSubmit={handleSubmit}>
            <ModalCardHeader>
              <SubTitle color="primary">New Food Entry</SubTitle>
              <CloseButton onClick={handleCloseModal}>x</CloseButton>
            </ModalCardHeader>
            <ModalCardBody>
              <FoodEntryContainer >
                <section style={{ paddingRight: '4px' }}>
                  <TextField
                    id="foodName"
                    label="Food Name"
                    fullWidth
                    style={{ marginBottom: '24px' }}
                    variant="standard"
                    color="primary"
                  />
                  <TextField
                    id="foodCalories"
                    label="Food Calories"
                    fullWidth
                    style={{ marginBottom: '24px' }}
                    variant="standard"
                    color="primary"
                  />
                </section>
                <section style={{ paddingLeft: '4px', flex: 1 }}>
                  <div style={{ marginBottom: '24px' }}>
                    <DatePicker
                      style={{ marginBottom: '24px' }}
                      label="Date"
                      value={dateTime.date}
                      onChange={handleDateChange}

                      renderInput={(params) => {
                        return <TextField
                          id="date" {...params}
                          variant="standard"
                          fullWidth
                          color="primary"
                        />
                      }}
                      variant="standard"
                    />
                  </div>
                  <TimePicker
                    style={{ marginBottom: '24px' }}
                    label="Time"
                    value={dateTime.time}
                    onChange={handleTimeChange}

                    renderInput={(params) => {
                      return <TextField
                        id="time" {...params}
                        variant="standard"
                        fullWidth
                        color="primary"
                      />
                    }}
                  />
                </section>
              </FoodEntryContainer>
            </ModalCardBody>
            <ModalCardFooter>
              <Button
                type="button"
                color="danger"
                withRightSpacing
                onClick={handleCancel}
              >
                cancel
              </Button>
              <Button
                type="submit"
                color="primary"
              >
                submit
              </Button>
            </ModalCardFooter>
          </ModalFormContainer>
        </ModalCard>
      </Modal>
      <AddEntryButton onClick={handleAddFoodEntry}>
        +
      </AddEntryButton>
    </Wrapper >
  )
}

export default FoodsWrapper