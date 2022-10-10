import axios from 'axios'

/**
 * create a new instance axios
 */
export const http = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    content: 'application/json',
  }
})
