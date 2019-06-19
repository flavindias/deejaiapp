export const isAuthenticated = () => {
    console.log(window.sessionStorage.getItem("@DeejAI:token"))
    return window.sessionStorage.getItem("@DeejAI:token") != null ? true : false;
};
//TODO checar no localstorage se tem o token do usuário