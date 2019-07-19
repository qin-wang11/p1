import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import Style from './index.module.scss';
import { Menu, Icon, Input,Button} from 'antd';

export default class Portal extends Component {
    handleclick(){
        this.props.history.push('/admin');
    }
    render() {
        return (
            <Router>

            <div className={Style.a}>
                <div className={Style.top2}>图书馆借书系统</div>
                <Input />
                <Input />
                <Button onclick={(this.handleclick)}>login</Button>
                <Button>reset</Button>
                <div>
                        <Switch>
                            <Redirect exact from="/" to="/libary" />
                            {/* <Route exact path="/Login" component={Login} />
                            <Route exact path="/people/add" component={PeopleAdd} />
                            <Route exact path="/people/update" component={PeopleUpdate} />
                            <Route exact path="/people/delete" component={PeopleDelete} /> */}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}




