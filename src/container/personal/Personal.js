import React,{Component} from "react";
import {connect} from "react-redux";
import actions from "../../store/action";
import {Route} from "react-router-dom";
import Login from "./Login";
import PersonalInfo from "./PersonalInfo";
class Personal extends React.Component{
    render(){
        let {isLogin} = this.props;
        return <div>
            <Route path="/personal" render={()=>{
                return isLogin? <PersonalInfo/>:<Login/>
            }}/>
        </div>
    }
}
export  default connect((state)=>(state.personal),actions.personal)(Personal);