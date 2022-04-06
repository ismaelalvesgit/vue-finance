import axios from "axios";

export default class HttpAdapter {

    /** @type { import ('axios').AxiosInstance} */
    instance

    constructor({
        baseUrl, 
        headers = {}, 
        params = {}
    }){
        this.instance = axios.create({
            baseURL: baseUrl,
            headers: headers,
            params
        });
    }

    /**
     * 
     * @param {import('axios').AxiosRequestConfig} config 
     * @returns { Promise<AxiosResponse<any>> }
     */
    send(config){
        return this.instance.request(config);
    }
}