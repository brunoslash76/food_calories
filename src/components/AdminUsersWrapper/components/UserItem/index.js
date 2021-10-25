import { useState } from 'react';
import { toast } from 'react-toastify';

import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import SubTitle from '../../../Typography/SubTitle'
import FoodsList from '../FoodsList'
import { AddFoodEntryModal } from '../../../Modals';
import { addFoodEntry } from '../../../../http/foodEntry';

import {
    AddEntryButton,
    Body,
    Header,
    UserContainer,
    ListItem,
    Link
} from './styles'
import { FoodEntry } from '../../../../models/FoodEntry';

const UserItem = (data) => {
    const { user, foodEntries } = data.user

    const [localFoodEntries, setLocalFoodEntries] = useState(foodEntries)
    const [open, setOpen] = useState(false)
    const [dateTime, setDateTime] = useState({
        date: null,
        time: null,
    })

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
        try {
            const res = await addFoodEntry(data)
            setLocalFoodEntries([...res])
            toast.success(`${data.foodName} added successfully!`)
            setOpen(false)
            clearInputs(event.target)
        } catch (error) {
            toast.error('Oopss, something went wrong while adding your entry!')
        }
    }

    const clearInputs = (target) => {
        target.reset()
        setDateTime({
            date: null,
            time: null
        })
    }
    return (
        <>
            <ListItem>
                <Header>
                    <UserContainer>
                        <Avatar />
                        <Link to={`admin-user-details/${user.uid}`}>
                            <SubTitle style={{ marginLeft: '24px' }}>{user.username}</SubTitle>
                        </Link>
                    </UserContainer>
                    <AddEntryButton onClick={() => setOpen(true)}>
                        <AddIcon color='inherit' />
                    </AddEntryButton>
                </Header>
                <Body>
                    <FoodsList foodArray={localFoodEntries} />
                </Body>
            </ListItem>
            <AddFoodEntryModal
                open={open}
                handleSubmit={handleSubmit}
                handleCloseModal={() => setOpen(false)}
                handleDateChange={newValue => setDateTime(state => ({
                    ...state,
                    date: newValue
                }))}
                handleTimeChange={newValue => setDateTime(state => ({
                    ...state,
                    time: newValue
                }))}
                handleCancel={() => setOpen(false)}
                state={dateTime}
            />
        </>
    )
}

export default UserItem
