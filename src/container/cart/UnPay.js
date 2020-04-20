import React,{Component} from "react";
import {connect} from "react-redux";
import "./Unpay.less";
import actions from "../../store/action";
import {removeCart} from "../../api/cart";
class UnPay extends React.Component{
    componentWillMount(){
        if(this.props.list.length<=0){
            this.props.cartList();
        }
    }
    loop = async(listAry,curIndex)=>{
        if(curIndex>=listAry.length){
            this.props.cartList();
            return;
        }
        let res =  await removeCart({courseID:listAry[curIndex].id});
        if(parseInt(res.code)===0){
            return  this.loop(listAry,curIndex+1);
        }
    };
    remove=()=>{
        let listAry = this.props.list.filter((item)=>{
            return item.isSelected
        })
        this.loop(listAry,0);
    }
    render(){

        return <div className="unpayBox">
            <div className="bar">
                <a href="###" onClick={()=>{
                    this.props.updateSelected(true);
                }
                }>全选</a>
                <a href="###" onClick={()=>{
                    this.props.updateSelected(false);
                }}>全不选</a>

                <a href="###" onClick={this.remove}>删除</a>
                <a href="###">支付</a>
            </div>
            <ul className="infoList">
                {this.props.list.length>0&&this.props.list.map((item,index)=>{
                    return <li key={index}><input type="checkBox" checked={item.isSelected} onChange={()=>{
                        this.props.updateSelected(item.id);
                    }
                    }/>
                        <span>{item.name}</span>
                    </li>
                })}
            </ul>
        </div>
    }
}
export  default  connect((state)=>({...state.cart}),actions.cart)(UnPay);