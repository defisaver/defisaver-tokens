import React from 'react';
import { v4 as uuid } from 'uuid';

export default function LdoIcon(props) {
  const id = `ldo_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M97.0393 39L123.273 80.0627L97.0393 95.3473L70.8054 80.0627L97.0393 39ZM78.8346 78.1177L97.0393 49.6261L115.239 78.1177L97.034 88.7279L78.8346 78.1124V78.1177Z" fill="white"/>
      <path d="M97.0021 104.373L66.5655 86.6451L65.7334 87.9435C61.1848 95.0649 59.2044 103.526 60.12 111.926C61.0356 120.326 64.7923 128.162 70.7682 134.136C77.7254 141.093 87.161 145.001 96.9995 145.001C106.838 145.001 116.274 141.093 123.231 134.136C129.207 128.162 132.963 120.326 133.879 111.926C134.795 103.526 132.814 95.0649 128.266 87.9435L127.428 86.6451L97.0021 104.373Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF"/>
          <stop offset="1" stopColor="#005E93"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
