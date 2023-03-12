import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}auth/signup`, user)
      .then((token) => {
        console.log("token", token.data);
        localStorage.setItem("token", token.data);

        dispatch({
          type: "SIGN_UP",
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        // if(error.response.data.message.code == '504' ){
        // console.log(toast.error(error.response.data.message.message))
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        // }
      });
  };
};

export const signIn = (email, password) => {
  
  return  (dispatch) => {
    axios
      .post(`${url}auth/login`, { email, password })
      .then((token) => {
        console.log('dispatached..',token)
        console.log(token.data.data.accessToken)
        localStorage.setItem("token", token.data.data.accessToken);
        console.log("tokenss data", token.data);
        dispatch({
          type: "SIGN_IN",
          token: token.data,
        });
      })
      .catch((error) => {
        // console.log(toast.error(error.response.data.message.message))
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const forgetPasswordEmail = (email) => {
  return (dispatch) => {
    axios
      .post(`${url}auth/sendForgotPasswordEmail`, { email })
      .then((res) => {
        console.log("resss", res);
        dispatch({
          type: "FORGET_PASSWORD_EMAIL",
          email: email,
        });
      })
      .catch((error) => {
        console.log(toast.error(error.response.data.message.message));
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const updatePassword = (user) => {
  console.log("body",user)
  return (dispatch) => {
    axios
      .post(`${url}auth/updatePassword`,  user )
      .then((res) => {
        console.log("response", res);
        dispatch({
          type: "UPDATE_PASSWORD",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};
