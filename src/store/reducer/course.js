import * as Types from "../action-types";
import {handleActions} from "redux-actions";
let initState = {
    bannerData:[],
    courseData:[],
    courseType:"all",
    replace:true,
    isLoading:false
};
let course = handleActions({
    [Types.COURSE_BANNER]:(state,action)=>{
        return {...state,bannerData:action.data}
    },
    [Types.COURSE_LIST]:(state,action)=>{
        let {result,courseType,replace} = action;
        if(replace){
            return {...state,courseData:result.data,courseType,total:result.total,page:result.page};
        }else{
            let combineData  =[].concat(state.courseData,result.data);
            return {...state,courseData:combineData,courseType,total:result.total,page:result.page,isLoading:false};
        }
    },
    [Types.COURSE_IS_lOADING]:(state,action)=>{
        return {...state,isLoading:true};
    }
},initState);
export default course;