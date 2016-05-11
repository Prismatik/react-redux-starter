import React, { PropTypes } from 'react';

const Home = ({ name, onNameChange }) =>
  <div>
    <input type="text" onChange={onNameChange} />
    <p>Hello {name}</p>
  </div>;

Home.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Home;
