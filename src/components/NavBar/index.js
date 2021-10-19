import Avatar from '../Avatar'
import { NavContainer, Title } from './styles'

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
