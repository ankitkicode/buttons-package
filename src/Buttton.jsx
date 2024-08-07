// src/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, speed }) => {
  const dashOffset = 1 / (speed / 1000); // Adjust stroke-dashoffset based on speed

  return (
    <button className="button button--fenrir">
          <svg aria-hidden="true" className="progress" width="70" height="70" viewBox="0 0 70 70">
            <path className="progress__circle"
              d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
            <path className="progress__path"
              d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
              pathLength="1" style={{ transition: `stroke-dashoffset ${speed}ms cubic-bezier(0.7, 0, 0.3, 1)` }} />
          </svg>
          <span>{text}</span>
        </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Button;
