import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import {createBrowserHistory} from 'history';
import { Layout, Menu, Breadcrumb, Icon, Input, Button } from 'antd';
import { } from 'antd';
import Login from '../../Containers/Login/Login';
import Register from '../../Containers/Register/Register';
import Lend from '../../Containers/User/Lend';
import LendList from '../../Containers/User/LendList';
import BookList from '../../Containers/User/BookList';
import BookSearch from '../../Containers/User/BookSearch';
import Super from '../../Containers/Super/Super';
import CreateAdmin from '../../Containers/Super/CreateAdmin';
import UserNews from '../../Containers/Super/UserNews';
import Admin from '../../Containers/Admin/Admin.jsx';
import SearchBook from '../../Containers/Admin/SearchBook';
import NewBook from '../../Containers/Admin/NewBook';
import BorrowList from '../../Containers/Admin/BorrowList';
import ReturnList from '../../Containers/Admin/ReturnList';
import LendList1 from '../../Containers/Admin/LendList1';
const { Header, Content, Footer } = Layout;
export default class Portal extends Component {

    render() {
        return (
            <Router history={createBrowserHistory}>
                
                <Switch>
                    <Redirect exact from="/" to="/Login" />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register}/>
                    <Route exact path="/Lend" component={Lend}/>
                    <Route exact path="/LendList" component={LendList}/>
                    <Route exact path="/BookList" component={BookList}/>
                    <Route exact path="/BookSearch" component={BookSearch}/>
                    <Route exact path="/Super" component={Super}/>
                    <Route exact path="/CreateAdmin" component={CreateAdmin} />                  
                    <Route exact path="/Admin" component={Admin}/>
                    <Route exact path="/UserNews" component={UserNews}/>
                    <Route exact path="/SearchBook" component={SearchBook}/>
                    <Route exact path="/NewBook" component={NewBook}/>
                    <Route exact path="BorrowList" component={BorrowList}/>
                    <Route exact path="ReturnList" component={ReturnList}/>
                    <Route exact path="/LendList1" component={LendList1}/>
                </Switch>
            </Router>

        )
    }
}




