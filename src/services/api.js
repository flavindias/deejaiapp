import {create} from 'apisauce';


const api = create({
    baseURL: 'http://localhost:3000/v1',
});

api.addAsyncRequestTransform( request => async () => {
    const token = window.sessionStorage.getItem("@DeejAI:token");

    if (token)
        request.headers['Authorization'] = token
})

api.addResponseTransform(response => {
    if(!response.ok)  throw response;
})


export default api;