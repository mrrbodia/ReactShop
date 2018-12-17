import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import basketReducer from "./basketReducer";

export default combineReducers({
    products: productsReducer,
    basket: basketReducer
});