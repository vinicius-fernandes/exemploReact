export const TOKEN = "" ;
export const isAuthenticated = () => localStorage.getItem(TOKEN) !== null;
export const getToken = () => localStorage.getItem(TOKEN);
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token.token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN);
};
