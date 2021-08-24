import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTSTS,
        payload: products,
    };
};

export const selectedtProduct = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};