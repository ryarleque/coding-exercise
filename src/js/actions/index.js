import { 
    GET_DEFAULT_PRODUCTS
} from '../constants/index';
import axios from 'axios';

export function getDefaultProducts() {
    return dispatch => {
        return axios.get("https://samplerspubcontent.blob.core.windows.net/public/properties.json")
            .then(response => {
                dispatch({
                    type: GET_DEFAULT_PRODUCTS,
                    payload: response.data
                })
            })
            .catch(error => {
                alert('SERVICE UNAVAILABLE');
            })
    }
}