export default class AuthService {
  isAuthenticated = () => {
    return window.sessionStorage.getItem("@DeejAI:token_expires_in") != null ?
      new Date().getTime() < new Date(parseInt(window.sessionStorage.getItem("@DeejAI:token_expires_in"))).getTime() :
      false;
  };
  //TODO checar no localstorage se tem o token do usuário
  isLoggedIn = async () => {
    return window.sessionStorage.getItem("@DeejAI:token") != null ?
      true :
      false;


  }
}

