import { Switch, Route, Redirect } from 'react-router-dom'

import {
    AdminHomePage,
    AdminUserDetailsPage,
    HomePage,
    LoginPage,
    RegisterPage
} from '../pages'

import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'

const Routes = () => {
    const isAuthenticated = false
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <PrivateRoute exact path='/' component={HomePage} isAuthenticated={isAuthenticated} />
            <AdminRoute path='/admin-home' component={AdminHomePage} isAdmin={false} />
            <AdminRoute path='/admin-user-details' component={AdminUserDetailsPage} isAdmin={false} />
        </Switch>
    )
}

export default Routes
