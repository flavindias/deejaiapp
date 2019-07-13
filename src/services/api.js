import { create } from 'apisauce';


const api = create({
  baseURL: 'https://api.deejai.me/v1',
  // baseURL: 'http://localhost:3001/v1',

});

api.addAsyncRequestTransform(request => async () => {
  const token = window.sessionStorage.getItem("@DeejAI:token");

  if (token)
    request.headers[ 'Authorization' ] = `Bearer ${token}`
})

api.addResponseTransform(response => {
  if (!response.ok) throw response;
})


export default api;
