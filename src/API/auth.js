import api from "./api"

export const login =  async (user) => {
    return await api.post('/users/login',user);
}

export const create = async (user) => {
    return await api.post('/users/create',user)
}
