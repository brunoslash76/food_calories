import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { subWeeks, isSameWeek } from 'date-fns'
import { getLastTwoWeekEntries } from '../../http/foodEntry'
import { SubTitle } from '../Typography'
import { Container, ListItem } from './styles'
import { getUserById } from "../../http/usersData"

const AdminUserDetailsWrapper = () => {
    const { uid } = useParams()
    const [weeks, setWeeks] = useState({
        thisWeek: [],
        lastWeek: []
    })
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function fetchLastTwoWeeksEntries() {
            const data = await getLastTwoWeekEntries(uid)
            handleWeeks(data)
        }
        fetchLastTwoWeeksEntries()
    }, [uid])

    useEffect(() => {
        async function fetchUser() {
            const user = await getUserById(uid)
            console.log(user)
            setUser(user)
        }
        fetchUser()
    }, [uid])

    const handleWeeks = (array) => {
        if (array.leght <= 0) return
        const lastWeek = subWeeks(new Date(), 2)
        const thisWeek = subWeeks(new Date(), 1)
        const data = {
            lastWeek: {
                averageCalories: 0,
                foods: []
            },
            thisWeek: {
                averageCalories: 0,
                foods: []
            }
        }
        const averageCalories = {
            lastWeek: {
                total: 0,
                count: 0,
            },
            thisWeek: {
                total: 0,
                count: 0,
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (isSameWeek(thisWeek, array[i].date)) {
                averageCalories.thisWeek.count += 1
                averageCalories.thisWeek.total += Number(array[i].foodCalories)
                data.thisWeek.foods.push(array[i])
            } else if (isSameWeek(lastWeek, array[i].date)) {
                averageCalories.lastWeek.total += Number(array[i].foodCalories)
                averageCalories.lastWeek.count += 1
                data.lastWeek.foods.push(array[i])
            }
        }
        data.lastWeek.averageCalories = averageCalories.lastWeek.total / averageCalories.lastWeek.count
        data.thisWeek.averageCalories = averageCalories.thisWeek.total / averageCalories.thisWeek.count
        setWeeks(data)
    }

    const mapList = (foods = []) => {
        return foods.map(food => {
            const date = new Date(food.date)
            return (
                <ListItem>
                    <span style={{ width: '33%', }}>{food.foodName}</span>
                    <span style={{ width: '33%', textAlign: 'center' }}>{food.foodCalories} kcal</span>
                    <span style={{ width: '33%', textAlign: 'right' }}>{date.toISOString().split('T')[0]}</span>
                </ListItem>
            )
        })
    }

    return (
        <>
            {user && <SubTitle style={{ marginBottom: '56px' }}>{user.username}'s Profile</SubTitle>}
            <Container>

                <section style={{ width: '45%' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <SubTitle>This week's calories</SubTitle>
                        <p>
                            Average Caories:
                            {
                                weeks.thisWeek.averageCalories
                                    ? ` ${Math.floor(weeks.thisWeek.averageCalories)} kcal`
                                    : 'No entries'
                            }
                        </p>
                    </div>
                    <ul>{mapList(weeks.thisWeek.foods)}</ul>
                </section>
                <section style={{ width: '45%' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <SubTitle>Last week's calories</SubTitle>
                        <p>
                            Average Caories:
                            {
                                weeks.lastWeek.averageCalories
                                    ? ` ${Math.floor(weeks.lastWeek.averageCalories)} kcal`
                                    : 'No entries'
                            }
                        </p>
                    </div>
                    <ul>{mapList(weeks.lastWeek.foods)}</ul>
                </section>
            </Container>
        </>
    )
}

export default AdminUserDetailsWrapper
