import UserItem from "../UserItem"

const UsersList = ({ usersArray = [] }) => {

    const mapUsers = () => {
        return usersArray.map((data, index) => {
            return <UserItem key={`user-${data.user.username}-${index}`} user={data} />
        })
    }

    if (usersArray.length <= 0) {
        return <div>No users</div>
    }

    return (
        <ul>
            {mapUsers()}
        </ul>
    )
}

export default UsersList
