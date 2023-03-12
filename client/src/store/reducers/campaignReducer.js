import { ActionTypes } from "@mui/base";
import { toast } from "react-toastify";

const campaignReducer = (campaigns = [], action) => {
  switch (action.type) {
    
    case "GET_CAMPAIGNS":
      return action.campaigns.data;
    case "LIKE_CAMPAIGNS":
    toast.success("Campaign is liked by the user...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // return campaigns.map((campaign)=>
    // campaign._id === action.campaign.data._id ?{...campaign,likes:action.campaign.data}:campaign )
     return action.campaigns.data;
     case "ADD_RECENT_VIEWED_CAMPAIGNS":
       return action.campaigns.data;
    case "GET_CAMPAIGNS_BY_CAT":
      return action.campaigns.data;
      case "GET_CAMPAIGNS_BY_SUB_CAT":
        return action.campaigns.data;
        case "GET_CAMPAIGNS_BY_ID":
        return action.campaigns.data;
        case "GET_CAMPAIGNS_BY_PRICE":
        return action.campaigns.data;
    default:
      return campaigns;
  }
};

export default campaignReducer;
