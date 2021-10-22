import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { register } from '../../http/register';
import { createUserFromForm } from '../../models/User';
import { validateRegistration } from '../../validators'
import { REGISTRATION_FAILED, REGISTRATION_SUCCESSFUL } from '../../store/constants';
import { Form } from './styles'

const RegistrationForm = () => {
    const [state, setState] = useState({
        error: false,
        emailErrorMessage: null,
        passwordErrorMessage: null,
        confirmationPasswordErrorMessage: null,
        usernameErrorMessage: null,
        isAdmin: null
    })

    const dispatch = useDispatch()

    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const user = createUserFromForm(event.target)
        const validation = validateRegistration(user)
        if (!validation.error) {
            try {
                const res = await register(user)
                if (res.error) {
                    dispatch({ type: REGISTRATION_FAILED })
                } else {
                    dispatch({ type: REGISTRATION_SUCCESSFUL, payload: { firebaseRes: res, user } })
                    history.push('/')
                }
            } catch (error) {
                //TODO: Implement user error message
            }
        } else {
            setState(validation)
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
            <TextField
                id="username"
                label="Username"
                helperText={state.usernameErrorMessage ?? "Add your username"}
                fullWidth
                style={{ marginBottom: '24px' }}
                autoComplete="off"
                error={!!state.usernameErrorMessage}
            />
            <TextField
                id="email"
                label="E-mail"
                helperText={state.emailErrorMessage ?? "Type your e-mail"}
                fullWidth
                style={{ marginBottom: '24px' }}
                autoComplete="off"
                error={!!state.emailErrorMessage}
            />

            <TextField
                id="password"
                label="Password"
                helperText={state.passwordErrorMessage ?? "Type your password"}
                type="password"
                fullWidth
                style={{ marginBottom: '24px' }}
                autoComplete="off"
                error={!!state.passwordErrorMessage}
            />

            <TextField
                id="confirmPassword"
                label="Confirm Password"
                helperText={state.confirmationPasswordErrorMessage ?? "Confirm your password"}
                type="password"
                fullWidth
                autoComplete="off"
                error={!!state.confirmationPasswordErrorMessage}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        id="isAdmin"
                    />
                }
                label="Admin"
                style={{ alignSelf: 'flex-end', margin: '0 0 24px 0' }}
            />
            <Button
                variant="contained"
                fullWidth
                style={{ height: '40px' }}
                type="submit"
            >
                Submit
            </Button>
        </Form >
    )
}

export default RegistrationForm
