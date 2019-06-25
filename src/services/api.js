import {create} from 'apisauce';


const api = create({
    baseURL: 'https://apideejai.flavianodias.com.br/v1',
});

api.addAsyncRequestTransform( request => async () => {
    const token = window.sessionStorage.getItem("@DeejAI:token");

    if (token)
        request.headers['Authorization'] = `Bearer ${token}`
})

api.addResponseTransform(response => {
    if(!response.ok)  throw response;
})


export default api;