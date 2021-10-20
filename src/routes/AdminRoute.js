import { Route } from 'react-router-dom'

const AdminRoute = ({ path, isAdmin }) => {

    if (!isAdmin) return <Route exact path='/' />

    return (
        <Route exact path={path} />
    )

}

export default AdminRoute
