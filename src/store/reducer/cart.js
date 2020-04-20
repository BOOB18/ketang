import * as Types from "../action-types";
import {handleActions} from "redux-actions";
let initData = {
    list:[]
};
let cart = handleActions({
    [Types.CART_LIST]:(state,action)=>{
        let newData = action.data.map((item,index)=>{
            item.isSelected = true;
            return item;
        })
        return {...state,list:newData}
    },
    [Types.CART_UPDATE_SELECTED]:(state,action)=>{
        let lists;
        if(typeof action.lx =="boolean" ){
            lists = state.list.map((item,index)=>{
                item.isSelected = action.lx;
                return item
            })
        }else{
            lists = state.list.map((item,index)=>{
                if(item.id ==action.lx){
                    item.isSelected = !item.isSelected
                }
                return item;
            })
        }
        return {...state,list:lists};
    }
},initData);
export default cart;