const divStyle = {
  color: 'blue',
  background: 'yellow',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Layout Hello World!</div>;
}
export default (props) => {
  return <div className='headerBox' style={{ padding: 20, border: '1px solid red' }}><HelloWorldComponent></HelloWorldComponent>
  <div>{ props.children }
    </div></div>;
}
