import React,{Component} from "react";
import {connect} from "react-redux";
import {login} from "../../api/personal";
import {Redirect} from "react-router-dom";
import actions from "../../store/action";
import md5 from "blueimp-md5";


class Login extends React.Component{
    render(){
        let name = "18310612838";
        let password = "1234567890";
        return <div>
            <a href="javascript:;" onClick={async()=>{
                let res =  await login(name,md5(password));
                if(parseInt(res.code)===0){
                    this.props.getPersonalInfo();
                }
            }}>登录</a>
        </div>
    }
}
export  default  connect(null,actions.personal)(Login);