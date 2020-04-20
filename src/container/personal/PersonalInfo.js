import React,{Component} from "react";
import {connect} from "react-redux";
import actions from "../../store/action";
import {out} from "../../api/personal"
class PersonalInfo extends React.Component{
    render(){
        let {dataInfo,getPersonalInfo} = this.props;
        return <div>
            {JSON.stringify(dataInfo)};
            <a href="javascript:;" onClick={async()=>{
                let res  = await out();
                if(parseInt(res.code)===0){
                    getPersonalInfo();
                }
            }}>退出</a>

        </div>
    }
}
export  default  connect((state)=>({...state.personal}),actions.personal)(PersonalInfo);