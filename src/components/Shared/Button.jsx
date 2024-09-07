import React from 'react';
import './Button.css';

function Button({ type = "button", text, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
