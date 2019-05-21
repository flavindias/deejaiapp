export const isAuthenticated = () => {
    window.sessionStorage.getItem("token");
};
//TODO checar no localstorage se tem o token do usuário