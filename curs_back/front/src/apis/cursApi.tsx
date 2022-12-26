import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import NewsData from '../models/CursData';


const newsPath = baseURL + '/curs/'

function parseJwt (token: any) {
    console.log(token)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
export async function getCurs(resultHandler: (data: any)=>void){
    console.log("error1")
    const user_name = parseJwt(localStorage.getItem('access')).name
    Axios.get(
        newsPath,
        { params:{username:user_name}, responseType: "json" }
    ).then
    (result => {
        const data: NewsData[] = (result as AxiosResponse<NewsData[]>).data;
        resultHandler(data)
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}