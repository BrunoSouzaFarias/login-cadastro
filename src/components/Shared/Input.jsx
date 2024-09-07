import React from 'react';
import './Input.css';

function Input({ label, name, type = "text", onChange, value }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
