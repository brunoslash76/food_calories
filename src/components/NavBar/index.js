import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '@firebase/auth'
import Avatar from '@mui/material/Avatar'

import { auth } from '../../config/firebase'
import { LOGOFF_USER } from '../../store/constants'
import Title from '../Typography/Title'
import { NavContainer } from './styles'

const NavBar = ({ title }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.authReducer)
    const history = useHistory()
    const logoff = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            dispatch({ type: LOGOFF_USER })
        })
    }

    const handleNavibarLink = () => {
        if (user.isAdmin && history.location.pathname === '/admin-home') {
            return <Link to=''>Home</Link>
        } else if (!user.isAdmin) {
            return null
        } else {
            return <Link to='/admin-home'>Admin</Link>
        }
    }

    return (
        <NavContainer>
            <Title color="white">{title}</Title>
            {handleNavibarLink()}
            <Avatar
                size='large'
                onClick={logoff}
                style={{ cursor: 'pointer' }}
                title={user.username}
            />
        </NavContainer>
    )
}

export default NavBar
