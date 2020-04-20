import course from "./course";
import cart from "./cart";
import personal from "./personal";
import  {combineReducers} from "redux";
let reducer = combineReducers({
    course,
    cart,
    personal
});
export default reducer;