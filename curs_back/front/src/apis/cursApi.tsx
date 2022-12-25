import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import NewsData from '../models/CursData';


const newsPath = baseURL + '/api/curs/'

export async function getCurs(resultHandler: (data: any)=>void, name:string=''){

    Axios.get(
        newsPath+name+'/',
        { params:{}, responseType: "json" }
    ).then
    (result => {
        const data: NewsData[] = (result as AxiosResponse<NewsData[]>).data;
        resultHandler(data)
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}