import { 
    GET_DEFAULT_PRODUCTS
} from '../constants/index';

const initialStates = {
    products: [],
};

function rootReducer(state = initialStates, action) {
    switch(action.type) {
        case GET_DEFAULT_PRODUCTS:
            return {...state, products: action.payload.properties}
        default:
            return state;
    }
}

export default rootReducer;