  // export const url = "http://localhost:5000/";
//  || "/"
//  export const url = "/";
export const url   = 'https://mooli-client-website.herokuapp.com/';
// const development = 'http://localhost:5000/';
// export const url = process.env.baseURL || "http://localhost:5000/"

// export const url = window.location.origin + '/';

export const setHeaders = () => {
  const headers = {
    headers: {
      // "x-auth-token": localStorage.getItem("token"),
       Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  };

  return headers;
};