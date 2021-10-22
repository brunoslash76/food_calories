import { Redirect, Route } from "react-router-dom"

const PublicRoute = ({ component, isAuthenticated, path }) => {
    if (isAuthenticated) return <Redirect to='/' />
    return <Route exact path={path} component={component} />
}

export default PublicRoute
