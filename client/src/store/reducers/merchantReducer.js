const merchantReducer = (merchants = [], action) => {
    switch (action.type) {
      
      case "GET_MERCHANTS":
        return action.merchants.data;
      
      default:
        return merchants;
    }
  };
  
  export default merchantReducer;
  