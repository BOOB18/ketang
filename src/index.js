import React from "react";
import ReactDOM from "react-dom";
import store from "./store"
import {Provider} from "react-redux";
import Course from "./container/course/Course";
import Cart from "./container/cart/Cart"
import Personal from "./container/personal/Personal"
import CourseInfo from "./container/course/CourseInfo"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Nav from "./compnent/Nav"
import Tab from "./compnent/Tab"
import "./static/css/common.less"
import "./static/css/reset.min.css"
window._store =store;
ReactDOM.render(<Provider store={store}>
    <Router>
    <div className="box">
        <header className="headerbox">
            <Nav/>
        </header>
        <main className="mainbox">
            <Switch>
                <Route path="/course" component={Course}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/course/info" component={CourseInfo}/>
                <Redirect exact to="/course"/>
            </Switch>
        </main>
        <footer className="footerbox">
            <Tab/>
        </footer>
    </div>
    </Router>
</Provider>,window.root)