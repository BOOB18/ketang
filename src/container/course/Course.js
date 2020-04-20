import React,{Component} from "react";
import {connect} from "react-redux";
import { Carousel,Icon,Alert,Button} from 'antd';
import {NavLink} from "react-router-dom";
import "./course.less";
import actions from "../../store/action";
class Course extends React.Component{
    componentWillMount(){
        if(this.props.bannerData.length<=0){
            this.props.courseBanner();
        }
        if(this.props.courseData.length<=0){
            this.props.courseList();
        }
    }
    render(){
        let {bannerData,courseData,courseType,total,page,courseList,isLoading,courseLoading} = this.props;
        console.log(courseData);
        return <div className="courseBox">
            {
                bannerData.length>0?<Carousel autoplay>
                    {
                        bannerData.map((item,index)=>{
                            return  <div key={index}>
                                <img src={item.pic} alt=""/>
                            </div>
                        })
                    }
                </Carousel>:null
            }

            <div className="couBox">
                <h2><Icon type="menu-fold"/><span>{courseType==="all"?'全部课程':courseType==="react"?'REACT课程':courseType==="vue"?'VUE课程':"小程序课程"}</span></h2>
                <div className="courseList">

                    {
                        courseData.length>0?
                            courseData.map(function(item,index){
                                let {name,dec,date,pic,time,id}=item;
                                return  <div className="couItem" key={index}>
                                    <NavLink to={{
                                        pathname:"/course/info",
                                        search:`courseID=${id}`

                                    }}>
                                        <h3 className="title">{name}</h3>
                                        <div className="desc">
                                            <div className="imgBox">
                                                <img src={pic} alt=""/>
                                            </div>
                                            <p>{dec}</p>
                                            <span>时间:{time}</span>
                                        </div>
                                    </NavLink>
                                </div>}) : <Alert message="当前没有数据" type="warning" />
                    }
                    {isLoading?<Button type="primary" loading className="loading">
                    </Button>:total<=page?null:
                        <a href="###" className="loadMore" onClick={(e)=>{
                            courseLoading();
                            courseList({
                                page:parseInt(page)+1,
                                type:courseType
                            },false)
                        }
                        }>
                            加载更多
                        </a>}

                </div>
            </div>

        </div>
    }
}
export  default  connect((state)=>{
    return {...state.course}
},actions.course)(Course);