import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({ path, isAdmin, component }) => {

    if (!isAdmin) return <Redirect exact path='/' />

    return (
        <Route exact path={path} component={component} />
    )

}

export default AdminRoute
