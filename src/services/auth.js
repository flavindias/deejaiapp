export const isAuthenticated = () => {
    console.log(window.sessionStorage.getItem("token"))
    return window.sessionStorage.getItem("token") != null ? true : false;
};
//TODO checar no localstorage se tem o token do usuário