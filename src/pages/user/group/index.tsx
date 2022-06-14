import { history } from 'umi';
import React, { useState } from 'react';
const login = () => {
  debugger
  window.localStorage.setItem('user', "{name: 'admin'}")
  history.push('/user')
  return
}
interface Props {
  name: string
}
// React.Component开发注意： https://zh-hans.reactjs.org/docs/react-component.html
// Function Component 是更彻底的状态驱动抽象，甚至没有 Class Component 生命周期的概念，只有一个状态，
// 在 componentDidMount 初始化发请求；
// 在 componentDidUpdate 判断参数是否变化，变化就调用请求函数重新请求数据；
// 在 componentWillUnmount 生命周期取消发送请求。

// 那么在函数组件中我们该如何做呢？答案是 useEffect 。
// useEffect 就是一个 Effect Hook ，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount 、 componentDidUpdate  和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

export const Login: React.FC<Props> = (props) => {
  const [data, setDate] = useState<Date>(new Date());
  let timerID;
  // constructor(props: Iprops) {
  //   super(props);
  //   this.state = {date: new Date()};
  //   this.timerID;
  // }

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
