import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CrvDusdIcon(props) {
  const id = `crv_dusd_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1} />
      <path d="M191.5 44.5C191.5 68.2482 172.248 87.5 148.5 87.5C124.752 87.5 105.5 68.2482 105.5 44.5C105.5 20.7518 124.752 1.5 148.5 1.5C172.248 1.5 191.5 20.7518 191.5 44.5Z" fill={fill2} stroke="white" strokeWidth="3"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M139.147 68.2523C130.782 68.2523 127.088 54.9021 127.088 42.7223C126.871 36.6747 129.174 24.2971 140.125 23.1673C153.813 21.755 168.059 34.2484 170.978 40.2236C173.898 46.1987 173.694 51.1961 165.546 53.912C159.028 56.0848 150.48 58.1489 147.021 58.9094C146.249 64.5615 144.262 68.2523 139.147 68.2523ZM147.512 46.1987L147.458 46.1031C147.332 46.171 147.375 46.1987 147.512 46.1987ZM147.458 46.1031C144.405 40.6169 145.032 37.0713 150.649 37.0713C156.298 37.0713 170.869 40.5495 158.267 43.3741C150.421 45.1328 147.9 45.8649 147.458 46.1031ZM139.709 65.2353C143.359 64.5161 145.434 59.4472 144.344 53.9137C143.253 48.3801 139.411 44.4774 135.761 45.1966C132.111 45.9158 130.036 50.9846 131.127 56.5181C132.217 62.0517 136.06 65.9545 139.709 65.2353Z" fill="white"/>
      <path d="M96 107.357V39L79.2857 90.6429L96 107.357Z" fill="white"/>
      <path d="M96 115.714L79.2857 95.7857L74.7857 107.357L96 125.143V115.714Z" fill="white"/>
      <path d="M65.1429 135.429L73.2857 114.643L96 132V153L65.1429 135.429Z" fill="white"/>
      <path d="M82.0714 66L62.3571 125.143L60 107.357L82.0714 66Z" fill="white"/>
      <path d="M96 107.357V39L112.714 90.6429L96 107.357Z" fill="white"/>
      <path d="M96 115.714L112.714 95.7857L117.214 107.357L96 125.143V115.714Z" fill="white"/>
      <path d="M126.857 135.429L118.714 114.643L96 132V153L126.857 135.429Z" fill="white"/>
      <path d="M109.929 66L129.643 125.143L132 107.357L109.929 66Z" fill="white"/>
      <defs>
        <linearGradient id={id1} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5956E9"/>
          <stop offset="1" stopColor="#3B398D"/>
        </linearGradient>
        <linearGradient id={id2} x1="148.5" y1="0" x2="148.5" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3465A4"/>
          <stop offset="1" stopColor="#164786"/>
        </linearGradient>
      </defs>
    </svg>
  );
}



