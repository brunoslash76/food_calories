import { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

import { SubTitle } from '../../../Typography'
import Button from '../../../Button'
import {
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  ModalFormContainer,
  CloseButton,
} from '../shared'
import { FoodEntryContainer } from './styles'

const AddFoodEntryModal = ({
  open,
  handleSubmit,
  handleCloseModal,
  handleDateChange,
  handleTimeChange,
  handleCancel,
  state
}) => {
  const [localState, setLocalState] = useState(state)
  return (
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
                  value={localState.foodName}
                  onChange={(event) => setLocalState(state => ({ ...state, foodName: event.target.value }))}
                />
                <TextField
                  id="foodCalories"
                  label="Food Calories"
                  fullWidth
                  style={{ marginBottom: '24px' }}
                  variant="standard"
                  color="primary"
                  value={localState.foodCalories}
                  onChange={(event) => setLocalState(state => ({ ...state, foodCalories: event.target.value }))}
                />
              </section>
              <section style={{ paddingLeft: '4px', flex: 1 }}>
                <div style={{ marginBottom: '24px' }}>
                  <DatePicker
                    style={{ marginBottom: '24px' }}
                    label="Date"
                    value={state.date}
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
                  value={state.time}
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
  )
}

AddFoodEntryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleTimeChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}

export default AddFoodEntryModal
