import axios from "axios";
import qs from "qs";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.interceptors.response.use((res)=>{
    return res.data;
});
axios.defaults.transformRequest = (data)=>{
    return qs.stringify(data);
}
export default axios;