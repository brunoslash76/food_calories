import { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { login } from '../../http/login';

import { validateLogin } from '../../validators'

const LoginForm = () => {

    const [state, setState] = useState({
        error: false,
        emailErrorMessage: null,
        passwordErrorMessage: null,
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const validation = validateLogin(email, password)
        console.log(email, password)
        if (!validation.error) {
            const res = login(email, password)
            console.log(res)
        } else {
            setState(validation)
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <section style={{ marginBottom: '40px' }}>
                <TextField
                    id="email"
                    error={!!state.emailErrorMessage}
                    label="E-mail"
                    helperText={state.emailErrorMessage ?? "Type your e-mail"}
                    fullWidth
                    style={{ marginBottom: '24px' }}
                />

                <TextField
                    error={!!state.passwordErrorMessage}
                    id="password"
                    label="Password"
                    helperText={state.passwordErrorMessage ?? "Type your password"}
                    fullWidth
                    type="password"
                />
            </section>
            <section>
                <Button
                    variant="contained"
                    fullWidth
                    style={{ height: '40px' }}
                    type="submit"
                >
                    Submit
                </Button>
            </section>
        </form >
    )
}

export default LoginForm
