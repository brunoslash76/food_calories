import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ path, component, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to='login' />
    }
    return (
        <Route exact path={path} component={component} />
    )
}

export default PrivateRoute
