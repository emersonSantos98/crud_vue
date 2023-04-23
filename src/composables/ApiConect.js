import axios from 'axios'

let api = null

let URL = 'https://apicontactsnode.up.railway.app/api/v1/'
export function createApi() {
    api = axios.create({
        baseURL:`${URL}` || 'http://localhost:3035/api/v1/',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })

    return api
}

export function useApi() {
    if (!api) {
        createApi()
    }
    return api
}
