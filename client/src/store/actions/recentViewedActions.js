import axios from 'axios'
import { setHeaders, url } from "../../api";

export const getAllRecentViewedCampaigns = (id) => {
  console.log("====id:",id)
    return (dispatch) => {
      axios
        .get(`${url}favorite/getAllRecentViewedCampaigns/${id}`,  setHeaders())
        .then((recentcampaigns) => {
            console.log("recentcampaigns",recentcampaigns)
          dispatch({
            type: "GET_RECENTVIEWEDCAMPAIGNS_BY_ID",
            recentcampaigns,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };