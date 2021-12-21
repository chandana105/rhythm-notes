import axios from "axios";

export function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  }
  delete axios.defaults.headers.common["Authorization"];
}


export const setupAuthExceptionHandler = (logout, navigate, dispatch) => {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error?.response?.request?.status === UNAUTHORIZED) {
                dispatch(logout())
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );
}