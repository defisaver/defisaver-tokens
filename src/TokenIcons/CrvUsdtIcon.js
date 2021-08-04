import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CrvUsdtIcon(props) {
  const id = `crv_usdt_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity="0.9" cx="96.5" cy="96.5" r="96.5" fill={fill1}/>
      <path d="M105.969 86.817V74.2096H134.834V55H56.2339V74.2096H85.1022V86.8069C61.6407 87.8832 44 92.5241 44 98.0838C44 103.643 61.6492 108.284 85.1022 109.367V149.751H105.976V109.364C129.395 108.284 147 103.647 147 98.0922C147 92.5377 129.395 87.9002 105.976 86.8204L105.969 86.817ZM105.976 105.944V105.933C105.387 105.971 102.361 106.152 95.6239 106.152C90.2375 106.152 86.448 105.999 85.1124 105.93V105.947C64.3848 105.03 48.9129 101.425 48.9129 97.1108C48.9129 92.797 64.3865 89.1968 85.1124 88.2781V102.355C86.4701 102.448 90.3529 102.677 95.7121 102.677C102.149 102.677 105.385 102.409 105.979 102.355V88.2781C126.666 89.1985 142.102 92.8072 142.102 97.1058C142.102 101.404 126.659 105.015 105.979 105.935" fill="white"/>
      <path d="M148.5 89C173.077 89 193 69.0767 193 44.5C193 19.9233 173.077 0 148.5 0C123.923 0 104 19.9233 104 44.5C104 69.0767 123.923 89 148.5 89Z" fill={fill2}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M139.147 68.2523C130.782 68.2523 127.088 54.9021 127.088 42.7223C126.871 36.6747 129.174 24.2971 140.125 23.1673C153.813 21.755 168.059 34.2484 170.978 40.2236C173.898 46.1987 173.694 51.1961 165.546 53.912C159.028 56.0848 150.48 58.1489 147.021 58.9094C146.249 64.5615 144.262 68.2523 139.147 68.2523ZM147.512 46.1987L147.458 46.1031C147.332 46.171 147.375 46.1987 147.512 46.1987ZM147.458 46.1031C144.405 40.6169 145.032 37.0713 150.649 37.0713C156.298 37.0713 170.869 40.5495 158.267 43.3741C150.421 45.1328 147.9 45.8649 147.458 46.1031ZM139.709 65.2353C143.359 64.5161 145.434 59.4472 144.344 53.9137C143.253 48.3801 139.411 44.4774 135.761 45.1966C132.111 45.9158 130.036 50.9846 131.127 56.5181C132.217 62.0517 136.06 65.9545 139.709 65.2353Z" fill="white"/>
      <defs>
        <linearGradient id={id1} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53AE94"/>
          <stop offset="1" stopColor="#3F9A80"/>
        </linearGradient>
        <linearGradient id={id2} x1="148.5" y1="0" x2="148.5" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3465A4"/>
          <stop offset="1" stopColor="#164786"/>
        </linearGradient>
      </defs>
    </svg>

  );
}




