import axios from "axios";
import { setHeaders, url } from "../../api";

import { toast } from "react-toastify";

export const getAllMerchants = () => {
  return (dispatch) => {
    axios
      .get(`${url}merchant`, setHeaders())
      .then((merchants) => {
        dispatch({
          type: "GET_MERCHANTS",
          merchants,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};