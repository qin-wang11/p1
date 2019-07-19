import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
import Style from './index.module.scss';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import LendList from './LendList';
import BookList from './BookList';
import BookSearch from './BookSearch';
import axios from 'axios';
const { SubMenu } = Menu;

class Lend extends Component {
  
    constructor(props){
      super(props);
      this.state = ({
        collapsed: false,
        
      });
    }
  
    componentDidMount(){
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3005/animal/islogin').then((data)=>{
        console.log(data.data);
              if(data.data.islogin=="NO"){
                
                this.props.history.push("/");
                //console.log('df');
              }
      });
    }
 
    // componentDidMount() {
    //   axios.get('http://localhost:3005/animal/getLoginUserInfo').then((data) => {
    //     if (data.data === undefined) {
    //       this.props.history.push("/");
    //     }
    //   });
    // }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    return (
      <Router>
        <div className={Style.all}>
          <div className={Style.textsize}>图书馆管理系统</div>
          <div className={Style.portalRoot}>
            <div className={Style.leftwide}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="blue"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span><NavLink to="/BookList">图书列表</NavLink></span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span><NavLink to="/BookSearch">图书查询</NavLink></span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span><NavLink to="/LendList">已借书籍</NavLink></span>
                </Menu.Item>
              </Menu>
            </div>
            <div className={Style.rightwide}>
              <Switch>
                <Route exact path="/BookList" component={BookList} />
                <Route exact path="/LendList" component={LendList} />
                <Route exact path="/BookSearch" component={BookSearch} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Lend;