// React.Component 写法
import { history } from 'umi';
import React, { useState } from 'react';
import  {FuncComp}  from './funcComp'; // 引入子组件
import  Comment  from './title'; // 引入子组件

const login = () => {
  window.localStorage.setItem('user', "{name: 'admin'}")
  history.push('/user')
  return
}

class Login extends React.Component {
  timerID: number; // 由于setTimeout()的返回值是一个数字类型的id，使用number作为返回类型将仅仅在JavaScript环境下是正确的。在Node.js中，可能会遇到这样的错误："Type 'Timer' is not assignable to type 'number'"。这是因为在Node.js中setTimeout()返回的是一个Timer对象而不是一个数字类型的id。为了解决这个问题，可以使用window.setTimeout()代替setTimeout()
  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
    this.timerID = 0;
  }

  onClick(e: React.MouseEvent) {
    console.log(e)
    alert(e)
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
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <form action="form_action.asp" method="get">
          账号: <input type="text" name="account" />
          密码: <input type="text" name="pwd" />
          <input type="submit" value="提交" onClick={() => {
              login()
            }}/>
        </form>
        <br/>
        <FuncComp name='name from parent'></FuncComp>
        <br />
        <Comment comment="comment from parent" onClick={this.onClick}></Comment>
      </div>
    );
  }
}
export default Login
