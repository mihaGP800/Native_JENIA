import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '995f97b1';
const axiosInstance = axios.create(configOMB);

const APIs = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get<{}, TestType<ResponseType>>(query);
        //return axiosInstance.get(query).then(res => res.data);
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};

type TestType<T> = {
    data: T
}

type ResponseType = {
    Search: Array<any>;
    Error: string;
    Response: string;
}


export default APIs;
