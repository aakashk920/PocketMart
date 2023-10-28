import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";
import { API_BASE_URL, api } from '../../config/apiConfig';

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    const {
        color,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        brand,
        pageNumber,
        pageSize,
    } = reqData;

    try {
        const response = await api.get(`/api/products`);
        // ?color=${color}&size=${sizes}&minPrice=${minPrice}&
        //  maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&
        // pageNumber=${pageNumber}&pageSize=${pageSize}`);
       
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: response.data });
        console.log("Response Status:", response.status);
        console.log("Response Status:", response.data);
        console.log("Product Color:", response.data);
        
    } catch (error) {
        console.log("Error is there", error);
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};

export const findProductsById = (reqData) => async (dispatch) => {
    if (!reqData || !reqData.productId) {
        // Handle the case when productId is undefined
        // For example, you can log an error or throw an appropriate exception.
        console.error("productId is undefined");
        return;
    }
    const { productId } = reqData;
    console.log("Here is the prooduct Id", productId);
    try {
        const { data } = await api.get(`/api/products/id/${productId}`);
        console.log("Here is the data ", data);
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};