import { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main';
import { changeName } from '../redux/actions/hello';

function mapStateToProps(state) {
  return {
    name: state.hello.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
