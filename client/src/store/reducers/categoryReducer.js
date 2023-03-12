
const categoryReducer = (categories = [], action) => {
    switch (action.type) {
      case "GET_CATEGORIES":
        return action.categories.data;
      default:
        return categories;
    }
  };
  
  export default categoryReducer;