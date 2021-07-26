import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FeiIcon(props) {
  const id = `fei_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M55.47 128H136.76C138.301 128 139.263 126.331 138.491 124.997L115.86 85.9327C115.503 85.3153 114.843 84.9352 114.13 84.9352H78.1006C77.3871 84.9352 76.7277 85.3153 76.37 85.9327L53.7394 124.997C52.967 126.331 53.9291 128 55.47 128Z" fill="white"/>
      <path d="M93.7611 56.0605C94.5277 54.7112 96.4723 54.7112 97.2389 56.0605L106.302 72.012C107.06 73.3453 106.097 75 104.563 75H86.4367C84.9032 75 83.9402 73.3453 84.6977 72.012L93.7611 56.0605Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DA682"/>
          <stop offset="1" stopColor="#1B624D"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
