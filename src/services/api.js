import axios from 'axios'

const baseURL = process.env.REACT_APP_TMDB_API_URL

console.log(baseURL)

const tmdbAPI = axios.create({
    baseURL: baseURL,
})

tmdbAPI.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_TMDB_API_TOKEN;
tmdbAPI.defaults.params = {
    language: 'pt-BR',
    certification_country: 'BR',
}