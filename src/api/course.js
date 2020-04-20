import axios from "./index";
export const getBanner = ()=>{
    return axios.get("/course/banner");
};
let initParams ={limit:10, page:1, type:"all"};
export const getCourseList = (params = initParams)=>{
    return axios.get("/course/list",{params});
};
export const getCourseInfo = (courseID)=>{
    return  axios.get("/course/info",{params:{courseID}})
};