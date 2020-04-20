import * as Types from "../action-types";
import {getBanner,getCourseList} from "../../api/course";

let courseBanner = ()=>{
    return async (dispatch)=>{
        let {data} = await getBanner();
        dispatch({type:Types.COURSE_BANNER,data})
    }
};
let courseList = (params={},replace=true)=>{
    params={
        limit:10,
        page:1,
        type:"all",
        ...params
    }
    return async (dispatch)=>{
        let result = await getCourseList(params);
        dispatch({type:Types.COURSE_LIST,result,courseType:params.type,replace});
    }
};
let courseLoading = ()=>{
    return {
        type:Types.COURSE_IS_lOADING
    }
}
export {courseBanner,courseList,courseLoading};