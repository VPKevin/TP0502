import api from "./api.service";
import TokenService from "./token.service";
// const register = (email, password) => {
//     return api.post("/auth/signup", {
//         email,
//         password
//     });
// };
const login = (email, password) => {
    return api
        .post("/login_check", {
            email,
            password
        })
        .then((response) => {
            if (response.data.token) {
                TokenService.setUser(response.data);
            }
            console.log(getCurrentUser())
            return response.data;
        });
};

const logout = () => {
    TokenService.removeUser();
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
    // register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;
