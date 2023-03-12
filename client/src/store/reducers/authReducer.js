/* eslint-disable no-fallthrough */
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  first_name: null,
  last_name: null,
  phone:null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast("User Signed In successfully...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // console.log("hellooo",action.token.data)
      // console.log("action",action.token)
      const user_log = (action.token); 
      console.log("user12222",user_log)
      return {
        ...initialState,
        token: action.token,
        first_name: user_log.data.first_name,
        last_name: user_log.data.last_name,
        phone: user_log.data.phone,
        email: user_log.data.email,
        _id: user_log.data._id,
      };
      

      
    case "USER_LOADED":
      case "SIGN_UP":
      toast("User Signed Up successfully...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      
    // const user = jwtDecode(action.token); 
      // const user = (action.token);
      const user = jwtDecode(action.token); 
      console.log("user12",user)
      return {
        ...initialState,
        token: action.token,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Logged out successfully...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
      case "FORGET_PASSWORD_EMAIL":
        toast("A verification code has been sent to your email address...", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return{
          ...initialState,
          forgetPasswordEmail: user.email
        }
        case "UPDATE_PASSWORD":
          toast("Your password is updated successfully...", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return{
            ...initialState,
            password:user.password
          }
    default:
      return state;
  }
};

export default authReducer;