import api from './api'

export const users= async()=>{
    return await api.get('/users')
}
