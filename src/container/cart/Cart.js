import React,{Component} from "react";
import {connect} from "react-redux";
import {NavLink,Route,Redirect,Switch} from "react-router-dom";
import Pay from "./Pay";
import UnPay from "./UnPay";
import "./Cart.less";
class Cart extends React.Component{
    render(){
        return <div className="cartBox">
            <div className="navBox">
                <NavLink to="/cart/unpay">未支付</NavLink>
                <NavLink to="/cart/pay">已支付</NavLink>
            </div>
            <div className="cartList">
                <Switch>
                    <Route path="/cart/unpay" component={UnPay}/>
                    <Route path="/cart/pay" component={Pay}/>
                    <Redirect from="/cart" to="/cart/unpay"/>
                </Switch>
            </div>
        </div>
    }
}
export  default  connect(null,null)(Cart);