import Avatar from '@mui/material/Avatar'
import Title from '../Title'
import { NavContainer } from './styles'

const NavBar = ({ title }) => {
    const user = {
        name: 'Bruno Russo',
        uid: '1234567890'
    }
    return (
        <NavContainer>
            <Title>{title}</Title>
            <Avatar user={user} size='large' />
        </NavContainer>
    )
}

export default NavBar
