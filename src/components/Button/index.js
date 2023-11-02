import React from 'react';
import './styles.css';

function Button({ color = 'white', name = 'Name', onClick, disabled }) {
  return (
    <div className="button-container">
      <button  className={`custom-button ${color}`} type="button" onClick={onClick} disabled={disabled}>
        {name}
      </button>
    </div>
  );
}
export default Button;
