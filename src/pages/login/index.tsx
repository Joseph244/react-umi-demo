import { history } from 'umi';
const login = () => {
  debugger
  window.localStorage.setItem('user', "{name: 'admin'}")
  history.push('/user')
  return
}
export default function IndexPage() {
  return (
    <div>
      <h2>Login</h2>
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
