import axios from 'axios'
import { setHeaders, url } from "../../api";

export const getAllFavoriteCampaigns = (id) => {
  console.log("====id:",id)
    return (dispatch) => {
      axios
        .get(`${url}favorite/getAllFavoriteCampaigns/${id}`,  setHeaders())
        .then((favorites) => {
            console.log("favorites",favorites)
          dispatch({
            type: "GET_FAVORITES_BY_ID",
            favorites,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };