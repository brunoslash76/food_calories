import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { login } from '../../http/login';
import { validateLogin } from '../../validators'
import { LOGIN_SUCCESSFUL, LOGIN_FAILURE } from '../../store/constants';
import { localStorageSetItem } from '../../adapters/localStorageAdapter';

const LoginForm = () => {
    const [state, setState] = useState({
        error: false,
        emailErrorMessage: null,
        passwordErrorMessage: null,
    })
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = event.target
        const validation = validateLogin(email.value, password.value)
        if (!validation.error) {
            const res = await login(email.value, password.value)
            if (res.error) {
                dispatch({ type: LOGIN_FAILURE, payload: res })
            } else {
                dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data })
                localStorageSetItem('user', res.data)
                history.push('/')
            }
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
                    autoComplete="off"
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
