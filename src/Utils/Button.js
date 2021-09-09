import React from 'react';

const buttonStyle = {
    margin: '0'
}


const Button = ({ label, handleClick, color }) => (
    <button
        className={color}
        style={buttonStyle}
        onClick={handleClick}
        name="submit"
    >
        {label}
    </button>
);

export default Button;