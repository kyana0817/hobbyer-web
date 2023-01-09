import api from '../utils/ApiClient' 

const BASEPATH = 'user'


export async function read (data) {
  return await api.get(`${BASEPATH}/`, data)
}
