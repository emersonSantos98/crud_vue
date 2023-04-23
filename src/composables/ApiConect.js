import axios from 'axios'

let api = null


export function createApi() {
    console.log('testeENV', process.env.VUE_APP_API_URL)
    api = axios.create({
        baseURL: `http://localhost:3035/api/v1/
`,
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
