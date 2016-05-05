import React from 'react';

export default function Home({ name, onNameChange }) {
  return (
    <div>
      <input type="text" onChange={onNameChange} />
      <p> Hello {name} </p>
    </div>
  )
}
