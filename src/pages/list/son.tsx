import React, { useState, useEffect } from 'react';
import Grandson from './grandson'
// 中间的组件再也不必指明往下传递 theme 了。
export default function Son() {
  // state，以前的做法是必须将其转化为类组件的构造函数中，现在你可以在现有的函数组件中使用 Hook。
  const [count, setCount] = useState(0);
  // 声明多个 state 变量
  const [fruit, setFruit] = useState('banana');
  // 可以使用多个State，但是不必使用多个 state，State 变量可以很好地存储对象和数组
  const [{count1, fruit1}, setInfo] = useState({count1: 0, fruit1: 'banana'});
  const clickFun = () => {
   setCount(count + 1)
   setInfo({count1: count1+2, fruit1: fruit1})
  }

  // useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合,每次运行 effect 的同时，DOM 都已经更新完毕。
  // useEffect 会在每次第一次渲染之后和每次更新之后都会执行。
  // 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器渲染进程
  // 有些操作可能需要清除，则需要返回一个函数，不需要清除则不需要返回；具体请看：https://zh-hans.reactjs.org/docs/hooks-effect.html
  // 也可以通过，跳过 Effect 进行性能优化
  useEffect(() => {
    document.title = `Clicked ${count} times`; // 可以在 effect 中获取到最新的 count 值，因为他在函数的作用域内。
    return () => {
      // 此处执行清除操作，如清除定时器等
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>count1:{count1}  fruit1:{fruit1 }</p>
      <button onClick={clickFun}>
        Click me
      </button>
      {/* <Grandson /> */}
    </div>
  )
}
