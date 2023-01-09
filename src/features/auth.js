import api from '../utils/ApiClient' 

const BASEPATH = 'auth'

export async function register(data) {
  return await api.post(`${BASEPATH}/register`, data)
}

export async function currentUser() {
  return await api.get(`${BASEPATH}/current_user`)
}
