import { Redirect } from 'umi';
import './rem.js';
export default (props) => {
  if (localStorage.getItem('token')) {
    return <>{props.children}</>;
  } else {
    return <Redirect to="/login" />;
  }
};
