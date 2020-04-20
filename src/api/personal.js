import axios from "./index";
const checkLogin =()=>{
    return  axios.get("/personal/login")
};
const login  = (name,password)=>{
    return  axios.post("/personal/login",{name,password})
};
const personalInfo = (personID)=>{
    return  axios.get("/personal/info",{params:{personID}});
}
const out = ()=>{
    return axios.get("/personal/out");
}

export {checkLogin,login,personalInfo,out}
