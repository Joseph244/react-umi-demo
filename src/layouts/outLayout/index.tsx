import css from './index.less'

export default (props) => {
  return <div className={css.outlayout} style={{ padding: 20, border: '1px solid red' }}>
  <h2>outLayout</h2>
  <div>{ props.children }
    </div></div>;
}
