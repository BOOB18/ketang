import axios from "./index";
const getCartList = (params={state:0,_:Math.random})=>{
    return  axios.get("/store/info",{params});
};

const addCart = ({courseID}) =>{
    return axios.post("/store/add",{courseID});
};
const removeCart = ({courseID}) =>{
    return axios.post('/store/remove',{courseID});
}
export {getCartList,addCart,removeCart};