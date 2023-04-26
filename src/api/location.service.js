import { api } from './api'
<<<<<<< HEAD
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/evento`
=======
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/locations`
>>>>>>> loginscreen

export const getLocationList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
<<<<<<< HEAD
    throw new Error('could not fetch Eventos')
=======
    throw new Error('could not fetch locations')
>>>>>>> loginscreen
  }
}