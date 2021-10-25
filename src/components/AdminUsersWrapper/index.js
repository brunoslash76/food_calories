import { useEffect, useState } from "react"
import { usersData } from "../../http/usersData"
import UsersList from "./components/UsersList"

const AdminUsersWrapper = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsersData() {
            const data = await usersData()
            setUsers(data)
        }
        getUsersData()
    }, [])


    return (
        <UsersList usersArray={users} />
    )
}

export default AdminUsersWrapper
