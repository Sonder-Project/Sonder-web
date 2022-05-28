// register, login, logout actions

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import authService from "../services/auth.service";

import { SubmitHandler } from "react-hook-form";

interface IUserRegister {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  roles: String;
  active: boolean;
  username: String;
}

interface IUserLogin {
  username: String;
  password: String;
}

export const registerAction: SubmitHandler<IUserRegister> = data => (dispatch: any) => {
  return authService.register(data).then(
    (res: any) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message,
      });
      return Promise.resolve();
    },
    (err: any) => {
      const message =
        (err.response &&
          err.response.data &&
          err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const login: SubmitHandler<IUserLogin> = data => (dispatch: any) => {
  return authService.login(data).then(
    (res: any) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: res },
      });
      return Promise.resolve();
    },
    (err: any) => {
      const message =
        (err.response &&
          err.response.data &&
          err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const logoutAction = () => (dispatch: any) => {
  authService.logout();
  dispatch({
    type: LOGOUT,
  });
};