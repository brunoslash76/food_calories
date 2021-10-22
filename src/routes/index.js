import { Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageGetItem } from '../adapters/localStorageAdapter'
import {
    AdminHomePage,
    AdminUserDetailsPage,
    HomePage,
    LoginPage,
    RegisterPage
} from '../pages'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import PublicRoute from './PublicRoute'
import { AUTH_USER_WITH_LOCALSTORAGE } from '../store/constants'
import { useEffect } from 'react'

const Routes = () => {
    const { user } = useSelector(state => state.authReducer)
    const localUser = localStorageGetItem('user')
    const dispatch = useDispatch()
    const isAuthenticated = user.isAuthenticated || !!localUser

    useEffect(() => {
        if (!user.isAuthenticated && !!localUser) {
            dispatch({
                type: AUTH_USER_WITH_LOCALSTORAGE, payload: {
                    ...localUser,
                    isAuthenticated: !!localUser.uid
                }
            })
        }
    }, [])

    return (
        <Switch>
            <PrivateRoute exact path='/' component={HomePage} isAuthenticated={isAuthenticated} />
            <AdminRoute path='/admin-home' component={AdminHomePage} isAdmin={user.isAdmin} />
            <AdminRoute path='/admin-user-details' component={AdminUserDetailsPage} isAdmin={user.isAdmin} />
            <PublicRoute path='/login' component={LoginPage} isAuthenticated={isAuthenticated} />
            <PublicRoute path='/register' component={RegisterPage} isAuthenticated={isAuthenticated} />
        </Switch>
    )
}

export default Routes
