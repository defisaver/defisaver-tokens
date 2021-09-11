import React from 'react';
import { v4 as uuid } from 'uuid';

export default function DydxIcon(props) {
  const id = `dydx_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M112.67 62.2676L64.187 131.727H79.0723L127.807 62.2676H112.67Z" fill="white"/>
      <path d="M80.6227 62.2676L94.8877 82.7349L87.4451 93.8989L65.4272 62.2676H80.6227Z" fill="white"/>
      <path d="M114.114 131.732L98.2988 109.094L105.741 98.2405L129 131.732H114.114Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6A6BFB"/>
          <stop offset="1" stopColor="#2E2F78"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
