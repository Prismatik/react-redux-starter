import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onNameChange} />
        <p> Hello {this.props.name} </p>
      </div>
    )
  }
}
