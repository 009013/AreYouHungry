import { Redirect } from 'umi'

export default (props) => {
  if (localStorage.getItem("token")) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
