import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
import Style from './index.module.scss';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import CreateAdmin from './CreateAdmin';
import UserNews from './UserNews';
import axios from 'axios';
const { SubMenu } = Menu;

class Super extends Component {
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
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    
    return (
      <Router>
      <div className={Style.all}> 
        <div className={Style.textsize1}>图书馆管理系统
        <div className={Style.textsize2}>    Super admin</div></div>
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
            <span><NavLink to="/CreateAdmin">管理员创建</NavLink></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span><NavLink to="/UserNews">管理员信息</NavLink></span>
          </Menu.Item>             
        </Menu>
        </div>
        <div className={Style.rightwide}>
          <Route exact path="/CreateAdmin" component={CreateAdmin} />
          <Route exact path="/UserNews" component={UserNews}/>
        </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default Super;