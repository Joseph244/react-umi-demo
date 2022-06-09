import { Redirect } from 'umi'

export default (props) => {
  // const { isLogin } = useAuth();
  // 这个根据自己判断是否登录
  const isLogin = window.localStorage.getItem('user')?true:false;
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
