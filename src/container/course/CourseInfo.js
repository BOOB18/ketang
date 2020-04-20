import React,{Component} from "react";
import {connect} from "react-redux";
import qs from "qs";
import {getCourseInfo} from "../../api/course";
import  {addCart,removeCart} from "../../api/cart";
import {Button} from "antd";
import actions from "../../store/action";
class CourseInfo extends React.Component{
    constructor(){
        super();
        this.state = {info:null};
    }
    getData = async (courseID)=>{
        let res = await getCourseInfo(courseID);
        if(parseInt(res.code)===0){
            this.setState({info:res.data});
        }else{
            this.setState({info:null})
        }
    };
    getId=()=>{
        let str = this.props.location.search;
        let obj = qs.parse(str.slice(1));
        let courseID = obj.courseID;
        return courseID;
    }
    componentWillMount(){
        this.props.cartList();
        let courseID = this.getId();
        this.getData(courseID);
    }
    render(){
        let courseID = this.getId();
        let n = this.props.list.find(item=>{
            return item.id == courseID ;
        });
        return <div className="course-info-box">
            <div className="con">
                <div className="info">
                    {JSON.stringify(this.state.info)}
                </div>
                {n ?
                    <Button type="danger" onClick={async ()=>{
                        let res = await removeCart({courseID:this.state.info.id});
                        if(parseInt(res.code) === 0 ){
                            this.props.cartList();
                        }

                    }
                    }>从购物车移除</Button>
                    :<Button type="primary" onClick={async ()=>{
                        let res = await addCart({courseID:this.state.info.id});
                        if(parseInt(res.code) === 0 ){
                            this.props.cartList();
                        }

                    }
                    }>加入购物车</Button>
                }

            </div>

        </div>
    }
}
export  default  connect((state)=>({...state.cart}),actions.cart)(CourseInfo);