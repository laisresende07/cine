import axios from 'axios'

const baseURL = process.env.REACT_APP_TMDB_API_URL
const apiToken = process.env.REACT_APP_TMDB_API_TOKEN

const tmdbAPI = axios.create({
    baseURL: baseURL,
})

tmdbAPI.defaults.params = {
    api_key: apiToken,
    language: 'pt-BR',
    certification_country: 'BR',
}

const baseImgURL = 'https://image.tmdb.org/t/p/';

export { baseImgURL };

export default tmdbAPI;

