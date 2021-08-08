/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ label, handleOnClick, ...props }) {
  return (
    <button onClick={handleOnClick} {...props}>
      {label}
    </button>
  );
}

export default Button;
