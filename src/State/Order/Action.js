import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig";

export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(`/api/order`, reqData.address);
        console.log("Created Order-", data); // Logging the data here

        if (data._id) {
            reqData.navigate({ search: `step=3&order_id=${data._id}` });
          
        }

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log("Caught an error:", error); // Log the error for debugging purposes
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message,
        });
    }
};


export const getOrderById=(orderId)=>async (dispatch)=>{
    dispatch({ type:GET_ORDER_BY_ID_REQUEST});
    try {
        
        const {data}= await api.get(
                `/api/order/${orderId}`,
        );
        console.log("order by id", data);
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        });
    } catch (error) {
        console.log("catch", error)
        dispatch({
            type:GET_ORDER_BY_ID_FAILURE,
            payload:error.messafe
        })
    }
}