import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import NewsData from '../models/CursData';


const newsPath = baseURL + '/api/curs/'

function parseJwt (token: any) {
    console.log("error2")
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
export async function getCurs(resultHandler: (data: any)=>void){
    console.log("error1")
    Axios.get(
        newsPath+parseJwt(localStorage.get('access')).name+'/',
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