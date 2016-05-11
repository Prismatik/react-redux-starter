import { connect } from 'react-redux';
import Home from '../components/home';
import { changeName } from '../redux/actions/hello';

export function mapStateToProps(state) {
  return {
    name: state.hello.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
