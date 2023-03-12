import axios from 'axios'
import { setHeaders, url } from "../../api";

export const getUserById = (id) => {
  console.log(id)
    return (dispatch) => {
      axios
        .get(`${url}user/getUserById/${id}`,  setHeaders())
        .then((users) => {
            console.log("users",users)
          dispatch({
            type: "GET_USER_BY_ID",
            users,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };