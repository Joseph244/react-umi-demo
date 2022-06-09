// CSS Modules
import styles from './index.less';

// 非 CSS Modules
// import './foo.css';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
