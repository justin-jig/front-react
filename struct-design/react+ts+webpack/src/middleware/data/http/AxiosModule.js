import Axios from 'axios';
import Cookies from 'js-cookie';

class _CustomAxiosModule {

    AXIOS;
    constructor() {
        // with credential
        this.AXIOS = Axios.create({
            baseURL: process.env.ADDRESS,
            headers: {
                'Content-Type': 'application/json',
                'authorization': Cookies.get('etk') ? `bearer ${Cookies.get('etk')}` : '',
                'withCredentials': true
            },
            withCredentials: true,
            timeout: 15000,
            // proxy:{ port: 9000,},
        });

        this.AXIOS.interceptors.response.use(
            // 성공 시
            (response) => {
                return Promise.resolve(response);
            },

            // 실패 시 
            (error) => {
                if (error.response.status === 401) {
               
                }
                if (error.response.status === 404) {
   
                }
                if (error.response.status === 406) {
   
                }
                if (error.response.status === 500) {
   
                }
                return Promise.reject(error);
            }
        )
    }

    
    get(params) { 
        const {URL} = params;
        return this.AXIOS && this.AXIOS.get(URL);
    }

    post(params) {
        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.post(URL,DATA);
    }

    patch(params) {
        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.patch(URL,DATA);
    }

    put(params){
        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.put(URL,DATA)
    }
    
    delete(params){
        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.delete(URL, { data : DATA })
    }
}

export const axios = new _CustomAxiosModule;