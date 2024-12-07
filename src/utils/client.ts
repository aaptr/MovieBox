import axios from 'axios'

const client = axios.create({
  timeout: 1000,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDI2NDQ2YWU0NmNhYTQ1MzJkMDBiZjE1N2Q4YzNiYSIsIm5iZiI6MTczMjkxODg3Ny44OTEsInN1YiI6IjY3NGEzZTVkZDk0MDliMTNkMjk3NzA2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E03xJ1C0Lt09T224wQY9N68EpWV7HqYzJHxqKCfqSmo'
  }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }