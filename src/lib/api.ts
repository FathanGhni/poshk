import axios from 'axios';
let urlMain = 'http://127.0.0.1:8080/';
 urlMain = 'http://172.20.2.84:8000/';
let url = urlMain+'api/apps/hk/';
export let axi = axios.create({
    baseURL: url
});
axi.defaults.headers.post['Content-Type'] = 'application/json'
axi.defaults.headers.post['Accept'] = 'application/json'

export function apiCall(uri: string, data: any) {
	if(uri){
		return axi.post(uri, data);
	}
}