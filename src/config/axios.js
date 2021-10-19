import axios from 'axios'

const api = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2',
})

export default api
