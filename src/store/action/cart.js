import * as Types from "../action-types";
import  {getCartList} from "../../api/cart";
const cartList = (params={})=>{
    params = {
        state:0,
        ...params
    };
    return async(dispatch)=>{
        let res = await getCartList(params);
        dispatch({type:Types.CART_LIST,data:res.data});
    }
};
const updateSelected = (lx)=>{
    return {type:Types.CART_UPDATE_SELECTED,lx}
};
export {cartList,updateSelected};