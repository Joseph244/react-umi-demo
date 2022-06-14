import styles from './funcComp.less'
interface Iprops {
  name: string;
}
// 函数式组件写法
export function FuncComp(props: Iprops) {
  return (
    <div className={styles.box}>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
