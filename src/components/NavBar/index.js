import { useDispatch } from 'react-redux'
import { signOut } from '@firebase/auth'
import Avatar from '@mui/material/Avatar'
import { auth } from '../../config/firebase'
import { LOGOFF_USER } from '../../store/constants'
import Title from '../Typography/Title'
import { NavContainer } from './styles'

const NavBar = ({ title }) => {
    const dispatch = useDispatch()
    const logoff = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            dispatch({ type: LOGOFF_USER })
        })
    }

    return (
        <NavContainer>
            <Title color="white">{title}</Title>
            <Avatar size='large' onClick={logoff} style={{ cursor: 'pointer' }} />
        </NavContainer>
    )
}

export default NavBar
