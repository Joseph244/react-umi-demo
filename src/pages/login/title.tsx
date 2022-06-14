import React, { useState } from 'react';
// 在父组件中引入子组件，然后直接传入参数，子组件通过React.Component<Iprops>，它里面的第一个泛型参数就是你父组件传来的参数
interface Iprops {
  comment: string;
  onClick: React.MouseEventHandler
}
interface IState {
  n: number
}
class Comment extends React.Component<Iprops, IState> {
  static defaultProps = {
    comment: 'this is comment!'
  }
  constructor(props: Iprops){
    super(props);
    this.state = {
      n: 10
    }
  }

  render(){
    return (
      <div>
        <p>{this.props.comment}</p>
        <h4> {this.state.n}</h4>
        <button onClick={this.props.onClick}>点击事件</button>
      </div>
    )
  }
}
export default Comment
