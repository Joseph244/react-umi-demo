// React.Component 写法
import { history } from 'umi';
import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import  {FuncComp}  from './funcComp'; // 引入子组件
import  Comment  from './title'; // 引入子组件


interface IState {
  date: Date,
  isToggleOn: boolean
}

// 调用class 外部的函数不需要this
function onClick(e: React.MouseEvent) {
  console.log(e)
}
interface Ia {
  name: string;
}

// 类组件
class Login extends React.Component<any, IState> {
  a: Ia;
  timerID: number | undefined; // 由于setTimeout()的返回值是一个数字类型的id，使用number作为返回类型将仅仅在JavaScript环境下是正确的。在Node.js中，可能会遇到这样的错误："Type 'Timer' is not assignable to type 'number'"。这是因为在Node.js中setTimeout()返回的是一个Timer对象而不是一个数字类型的id。为了解决这个问题，可以使用window.setTimeout()代替setTimeout()
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
    // 自定义类属性
    this.a = {name: 'aaa'}
    // 为了在showPwd 中使用 `this`，这个绑定是必不可少的
    // this.showPwd = this.showPwd.bind(this);
    this.login = this.login.bind(this);
  }
  // 调用class 内部的函数需要使用this
  login(params: string) {
    console.log(params, this.state)
    window.localStorage.setItem('user', "{name: 'admin'}")
    history.push('/user')
  }

  handleClick = () => {
    console.log('this is:', this.state);
  }


  showPwd() {
    console.log(this.state)
    // // this.a.name = "bbb"
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    // setTimeout(() => {
    //   console.log(this.state) // 由于setState是异步执行的，所以模拟一个延时
    // }, 300)
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
        <div>
          账号: <input type="text" name="account" />
          密码: <input type="text" name="pwd" />
          {/* 在官方文档中深入JSX一栏中指出布尔类型、Null 以及 Undefined 将会忽略,所以无法显示，必须转换为字符串 */}
          isToggleOn:{this.state.isToggleOn + ''}
          <Tooltip title="查看密码">
            <Button type="primary" onClick={this.showPwd} size="small" shape="circle" icon={ this.state.isToggleOn ? <EyeOutlined /> : <EyeInvisibleOutlined />} />
          </Tooltip>
          {/* 直接调用，需要先在构造函数中bind this */}
          <input type="submit" value="提交0" onClick={this.login}/>

          {/* bind调用，调用时bind this */}
          <input type="submit" value="提交1" onClick={this.login.bind(this, 'ok2')}/>

          {/* 箭头函数调用，利用了箭头函数传递this的特性，无需bind this */}
          <input type="submit" value="提交2" onClick={() => this.login('ok3')}/>
        </div>
        <div>
          <Button onClick={this.handleClick} type="primary">箭头函数</Button>
        </div>
        <br/>
        <FuncComp name='name from parent'></FuncComp>
        <br />
        <Comment comment="comment from parent" onClick={onClick}></Comment>
      </div>
    );
  }
}
export default Login
