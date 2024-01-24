import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios'

enum AxiosStatusErrorCode {
    Unauthorized = 401,
    Forbidden = 403,
    TooManyRequests = 429,
    InternalServerError = 500,
}

const injectToken = (config: InternalAxiosRequestConfig) => {
    const token = ''
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
}
const handleResponseError = (error: AxiosError) => {
    const status = error.response?.status

    if(status === AxiosStatusErrorCode.Unauthorized){
        // remove token from navigator and delete sesion
    } else if( status === AxiosStatusErrorCode.Forbidden){
        // forbidden
    }
}

const initAxios = (): AxiosInstance => {
    const apiUrl = ''

    const instance = axios.create({
        baseURL: apiUrl
    })
    instance.interceptors.request.use(injectToken, (error) => Promise.reject(error))
    instance.interceptors.response.use(response => response, handleResponseError)

    return instance
}

const instance = initAxios()
export default instance