import React from 'react';




const Button = ({ label, handleClick, color, disabled }) => (
    <button
        className={color}
        onClick={handleClick}
        name="submit"
        disabled={disabled}
    >
        {label}
    </button>
);

export default Button;