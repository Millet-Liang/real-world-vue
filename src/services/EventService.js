import axios from 'axios'

// a Single Axios instance for our entire app
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for all calls to use
  withCredentials: false,
  // For authentication & configuration
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    // Calls http://lacalhost:3000/events
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
