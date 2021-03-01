import React from 'react';
import { v4 as uuid } from 'uuid';

export default function DiggIcon(props) {
  const id = `digg_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M130.496 123.975H122.992V131.479H55.4568V56.4396H122.992V63.9435H130.496V71.4474H138V116.471H130.496V123.975ZM105 114.984V108.967H100.48V116.471H85.4725V71.4474H100.48V78.9513H105V77.0152H111.064V83.0877H115.617V108.907H111.064V114.984H105ZM85.2959 72.4542H76.2002V118.017H85.2959V72.4542Z" fill="white"/>
      <path d="M77.9082 42.9093L90.0191 42.2734L95.7315 151.474L83.6206 152.109L77.9082 42.9093Z" fill="white"/>
      <path d="M94.5654 42.0353L106.676 41.3994L112.389 150.6L100.278 151.235L94.5654 42.0353Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC259"/>
          <stop offset="1" stopColor="#F0A43B"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
