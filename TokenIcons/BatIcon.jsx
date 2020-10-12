const React = require('react');

const BatIcon = props => (
  <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="96.5" cy="96.5" r="96.5" fill="url(#paint0_linear_bat_icon)" fillOpacity="0.9" />
    <path d="M96.5 84.907V49L47.1279 134.279L76.3023 116.326L96.5 84.907Z" fill="white" />
    <path d="M145.872 134.279H47.1279L76.3023 116.326H116.698L96.5 84.907V49L145.872 134.279Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear_bat_icon" x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5000" />
        <stop offset="1" stopColor="#9D1E63" />
      </linearGradient>
    </defs>
  </svg>
);

module.exports = BatIcon;
