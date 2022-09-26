import axios from 'axios'

/**
 * create a new instance axios
 */
export const Http = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
