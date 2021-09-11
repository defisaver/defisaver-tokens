import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CtxIcon(props) {
  const id = `ctx_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <rect x="63" y="136" width="68" height="4" fill="white"/>
      <path d="M63 53H131V68.8424H97V104.158H131V120H63V53Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#444A8C"/>
          <stop offset="1" stopColor="#242748"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
