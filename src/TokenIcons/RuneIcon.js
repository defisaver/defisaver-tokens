import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RuneIcon(props) {
  const id = `rune_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M61 138L117.858 113.892L99.8709 95.5195L61 138ZM81.8837 77.1702L99.8709 95.5195L132 56L81.8837 77.1702Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#28EEBD"/>
          <stop offset="1" stopColor="#0F9C79"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
