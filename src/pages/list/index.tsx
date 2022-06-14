import React, { useState } from 'react';
import styles from './index.less';
import Son from './son';
// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page List</h1>
//     </div>
//   );
// }

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
export const ThemeContext = React.createContext('primary')
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <div>
        <h1 className={styles.title}>Page List</h1>
        <ThemeContext.Provider value="dashed">
          <Son />
        </ThemeContext.Provider>
      </div>

    )
  }
}

export default App
