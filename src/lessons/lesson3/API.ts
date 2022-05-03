import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '947a4437';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) =>
        axiosInstance
            .get<getDataType>(`/?apikey=${key}&s=${title}`).then(res => res.data),
    searchFilmsByType: (title: string, type: string) =>
        axiosInstance.get<getDataType>(`/?apikey=${key}&s=${title}&type=${type}`).then(res => res.data)
};

type getDataType = {
    Response: string
    Search: Array<any>
    totalResults: string
    Error: string
}


export default API;
