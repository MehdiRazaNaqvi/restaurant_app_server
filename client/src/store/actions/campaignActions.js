import axios from "axios";
import { setHeaders, url } from "../../api";

import { toast } from "react-toastify";

export const getCampaigns = () => {
  return (dispatch) => {
    axios
      .get(`${url}campaign/getAllCampaigns`, setHeaders())
      .then((campaigns) => {
        dispatch({
          type: "GET_CAMPAIGNS",
          campaigns,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const getCampaignsByCat = (cat) => {
  return (dispatch) => {
    axios
      .get(`${url}campaign/getCampaignsByCategory/${cat}`, setHeaders())
      .then((campaigns) => {
        dispatch({
          type: "GET_CAMPAIGNS_BY_CAT",
          campaigns,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getCampaignsBySubCat = (cat) => {
  return (dispatch) => {
    axios
      .get(`${url}campaign/getCampaignsBySubCategory/${cat}`, setHeaders())
      .then((campaigns) => {
        dispatch({
          type: "GET_CAMPAIGNS_BY_SUB_CAT",
          campaigns,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const getCampaignsById = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}campaign/getCampaignsById/${id}`, setHeaders())
      .then((campaigns) => {
        dispatch({
          type: "GET_CAMPAIGNS_BY_ID",
          campaigns,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const likeCampaign = (id,email) => {
  console.log("id and eamil",id,email)
  return (dispatch) => {
    axios
      .post(`${url}favorite/likeCampaigns/${id}`, {email},setHeaders())
      .then((campaign) => {
        dispatch({
          type: "LIKE_CAMPAIGNS",
          campaign,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const addRecentViewedCampaign = (id,email) => {
  console.log("id and eamil",id,email)
  return (dispatch) => {
    axios
      .post(`${url}favorite/RecentViewedCampaigns/${id}`, {email},setHeaders())
      .then((campaign) => {
        // console.log(campaign)
        dispatch({
          type: "ADD_RECENT_VIEWED_CAMPAIGNS",
          campaign,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const getCampaignsByPrice = (min,max) => {
  console.log(min,max)
  return (dispatch) => {
    axios
      .get(`${url}campaign/getCampaignsByPrice/${min}&${max}`, setHeaders())
      .then((campaigns) => {
        console.log("campaigns-----",campaigns)
        dispatch({
          type: "GET_CAMPAIGNS_BY_PRICE",
          campaigns,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

