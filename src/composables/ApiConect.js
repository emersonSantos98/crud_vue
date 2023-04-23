import axios from 'axios'

let api = null


export function createApi() {
    console.log('testeENV', process.env.VUE_APP_API_URL)
    api = axios.create({
        baseURL: `https://apicontactsnode.up.railway.app/api/v1/
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
