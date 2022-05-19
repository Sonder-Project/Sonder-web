import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

const API_URL = "http://localhost:8080/api/auth/";

interface IUserRegister {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  roles: String;
  active: boolean;
}

interface IUserLogin {
  email: String;
  password: String;
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

const register: SubmitHandler<IUserRegister> = data => {
  return axios.post(API_URL + "signup", data, headers);
};


// POST & save JWT to local storage
const login: SubmitHandler<IUserLogin> = data => {
  return axios.post(API_URL + "signup", data, headers)
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
}

// remove JWT from local storage 
const logout = () => {
  localStorage.removeItem("user");
}

export default {
  register,
  login,
  logout
};



// JAVASCRIPT VERSION IN CASE SOMETHING GOES WRONG HAHA
// const register = (username, email, password) => {
//   return axios.post(API_URL + "signup", {
//     username,
//     email,
//     password,
//   });
// };


// // POST & save JWT to local storage
// const login = (username, password) => {
//   return axios.post(API_URL + "signin", {
//     username,
//     password,
//   })
//     .then((res) => {
//       if (res.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(res.data));
//       }
//       return res.data;
//     });
// };

// // remove JWT from local storage
// const logout = () => {
//   localStorage.removeItem("user");
// };

// export default {
//   register,
//   login,
//   logout
// };