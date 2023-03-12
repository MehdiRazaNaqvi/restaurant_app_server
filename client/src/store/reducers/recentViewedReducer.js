const recentViewedReducer = (recentcampaigns = [], action) => {
    switch (action.type) {
        case "GET_RECENTVIEWEDCAMPAIGNS_BY_ID":
            return action.recentcampaigns.data;
      default:
        return recentcampaigns;
    }
  };
  
  export default recentViewedReducer;