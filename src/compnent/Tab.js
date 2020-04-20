import React,{Component} from "react";
import {connect} from "react-redux";
import {NavLink,withRouter} from "react-router-dom";
import {Icon} from "antd";
import "./Tab.less";
class Tab extends React.Component{
    render(){
        return <div className="tabList">
            <NavLink to="/course">
                <Icon type="home"/>
                <span>首页</span>
            </NavLink>
            <NavLink to="/cart">
                <Icon type="profile"/>
                <span>我的课程</span>
            </NavLink>
            <NavLink to="/personal">
                <Icon type="user"/>
                <span>个人中心</span>
            </NavLink>
        </div>
    }
}
export default withRouter(Tab);