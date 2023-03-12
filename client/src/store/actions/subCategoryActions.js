import axios from 'axios'
import { setHeaders, url } from "../../api";

export const getSubCategories = () => {
    return (dispatch) =>{
        axios.get(`${url}package` , setHeaders())
        .then((subcategories) => {
            console.log("subcat",subcategories)
            dispatch({
                type:'GET_SUBCATEGORIES',
                subcategories
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}