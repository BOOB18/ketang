import * as Types from "../action-types";
import {checkLogin,personalInfo} from "../../api/personal";
const getPersonalInfo = ()=>{
    return async(dispatch)=>{
        let res = await checkLogin();
        if(parseInt(res.code)===0){
            let info = await personalInfo();
            dispatch({type:Types.CART_INFO,isLogin:true,dataInfo:info});
        }else{
            dispatch({type:Types.CART_INFO,isLogin:false,dataInfo:null});
        }
    }
}
export {getPersonalInfo};