import axios from 'axios'

const client = axios.create({
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }