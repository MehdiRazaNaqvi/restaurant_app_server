import axios from 'axios'
import { setHeaders, url } from "../../api";

export const getCategories = () => {
    return (dispatch) =>{
        axios.get(`${url}packageType` , setHeaders())
        .then((categories) => {
            console.log("cat",categories)
            dispatch({
                type:'GET_CATEGORIES',
                categories
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}