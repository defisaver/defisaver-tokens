import React from 'react';
import { v4 as uuid } from 'uuid';

export default function LusdIcon(props) {
  const id = `lusd_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M116 80.2184C116 70.2646 107.941 62.1954 98 62.1954M98 62.1954C88.0589 62.1954 80 70.2646 80 80.2184C80 100 116 95.6899 116 113.046C116 123 107.941 131.069 98 131.069M98 62.1954V49M98 131.069C88.0589 131.069 80 123 80 113.046M98 131.069V147" stroke="white" strokeWidth="16"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3EC3EC"/>
          <stop offset="1" stopColor="#0F6C88"/>
        </linearGradient>
      </defs>
    </svg>


  );
}
