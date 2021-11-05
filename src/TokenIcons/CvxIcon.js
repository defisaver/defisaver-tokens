import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CvxIcon(props) {
  const id = `cvx_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M131 88.6V71.8H122.489V63.4H105.489V55H88.5V63.4H71.5V71.8H63V122.2H71.5V130.6H88.4892V139H105.489V130.6H122.489V122.2H131V105.4H113.989V113.779H105.489V122.179H88.5V113.779H80V80.2H88.5V71.8H105.489V80.2H113.989V88.6H131Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF"/>
          <stop offset="1" stopColor="#005E93"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


