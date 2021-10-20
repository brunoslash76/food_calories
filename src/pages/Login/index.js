import { Link } from "react-router-dom"

import UnauthenticatedWrapper from "../../layouts/UnauthenticatedWrapper"
import { LoginForm } from '../../components'

const Login = () => {
    return (
        <UnauthenticatedWrapper title="Login">
            <LoginForm />
            <p style={{ textAlign: 'right', marginTop: '24px' }}>Don't have an account? <Link to="/register">Sing Up</Link></p>
        </UnauthenticatedWrapper>
    )
}

export default Login
