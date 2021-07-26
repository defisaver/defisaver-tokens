import React from 'react';
import { v4 as uuid } from 'uuid';

export default function InstIcon(props) {
  const id = `inst_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M96.4993 138.39C96.4993 141.06 98.6602 143.249 101.303 142.977C124.727 140.562 143 120.675 143 96.5002C143 72.3247 124.727 52.4383 101.303 50.0232C98.6602 49.7493 96.4993 51.9405 96.4993 54.6101V67.4994C96.4993 70.169 98.6749 72.2829 101.279 72.8098C112.274 75.0379 120.552 84.7967 120.552 96.5002C120.552 108.204 112.274 117.962 101.279 120.191C98.6749 120.717 96.4993 122.833 96.4993 125.501V138.39ZM82.0683 58.7315C82.0683 55.4447 78.8664 53.1279 75.9347 54.5827C60.5686 62.2083 50 78.1136 50 96.5002C50 114.887 60.5686 130.792 75.9347 138.418C78.8664 139.872 82.0683 137.556 82.0683 134.269V58.7331V58.7315Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3F75FF"/>
          <stop offset="1" stopColor="#2450C0"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
