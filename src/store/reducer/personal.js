import * as Types from "../action-types";
import {handleActions} from "redux-actions";
let initData = {
    isLogin:false,
    dataInfo:null
};
let personal = handleActions({
    [Types.CART_INFO]:(state,action)=>{
        return {...state,isLogin:action.isLogin,dataInfo:action.dataInfo}
    }
},initData);
export default personal;