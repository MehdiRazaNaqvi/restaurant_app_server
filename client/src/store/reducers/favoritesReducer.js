const favoritesReducer = (favorites = [], action) => {
    switch (action.type) {
        case "GET_FAVORITES_BY_ID":
            return action.favorites.data;
      default:
        return favorites;
    }
  };
  
  export default favoritesReducer;