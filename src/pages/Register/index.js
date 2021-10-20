import { Link } from 'react-router-dom'

import { RegistrationForm } from '../../components'
import Unauthenticated from '../../layouts/UnauthenticatedWrapper'

const Register = () => {
    return (
        <Unauthenticated title="Registration">
            <RegistrationForm />
            <p style={{ textAlign: 'right', marginTop: '24px' }}>Already have an account? <Link underline="none" to="/login">Log in</Link></p>
        </Unauthenticated>
    )
}

export default Register
