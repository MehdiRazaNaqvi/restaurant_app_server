const subCategoryReducer = (subcategories = [], action) => {
    switch (action.type) {
      case "GET_SUBCATEGORIES":
        return action.subcategories.data;
      default:
        return subcategories;
    }
  };
  
  export default subCategoryReducer;