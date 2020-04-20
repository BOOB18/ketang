import React,{Component} from "react";
import {connect} from "react-redux";
import {Icon} from "antd";
import "./Nav.less";
import actions from "../store/action";
class Nav extends React.Component{
    constructor(){
        super();
        this.state = {show:false}
    }
    handleClick = (e)=>{
        if(e.target.tagName ==="LI"){
            let type = e.target.getAttribute("type");
            this.props.courseList({type});
            this.setState({show:false});
        }
    };
    render(){
        return <div className="header">
            <h1></h1>
            <Icon type="bars" className="icon" onClick={()=>{
                this.setState({show:!this.state.show})
            }
            }/>
            <ul className="navList" style={{"display":this.state.show?"block":"none"}} onClick={this.handleClick}>
                <li type="all">全部课程</li>
                <li type="react">REACT课程</li>
                <li type="vue">VUE课程</li>
                <li type="xiaochengxu">小程序课程</li>
            </ul>
        </div>
    }
}
export  default connect(null,actions.course)(Nav);