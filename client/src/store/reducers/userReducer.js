const userReducer = (users = [], action) => {
    switch (action.type) {
        case "GET_USER_BY_ID":
            return action.users.data;
      default:
        return users;
    }
  };
  
  export default userReducer;