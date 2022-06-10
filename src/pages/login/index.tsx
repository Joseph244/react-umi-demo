import { history } from 'umi';
import React, { useState } from 'react';
const login = () => {
  debugger
  window.localStorage.setItem('user', "{name: 'admin'}")
  history.push('/user')
  return
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.timerID;
  }

  componentDidMount() {
    this.timerID = setInterval(
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
      </div>
    );
  }
}
export default Login
