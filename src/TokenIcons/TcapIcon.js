import React from 'react';
import { v4 as uuid } from 'uuid';

export default function TcapIcon(props) {
  const id = `tcap_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M136 60H58V79H85V127H111V79H136V60Z" fill="white"/>
      <rect x="85" y="143" width="26" height="4" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#444A8C"/>
          <stop offset="1" stopColor="#242748"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
