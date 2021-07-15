import React from 'react';
import { v4 as uuid } from 'uuid';

export default function MtaIcon(props) {
  const id = `mta_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M60.4226 119.971H134V131.539H60.4226V119.971Z" fill="white"/>
      <path d="M60.8816 71.7344C60.8816 68.7262 60.698 65.8085 60.4226 62.7965H73.5294L73.9846 68.915C75.4417 66.8427 78.9987 61.7623 88.2427 61.7623C98.8597 61.7623 101.877 68.447 102.776 70.7002C106.601 63.0796 112.842 61.8567 117.604 61.8567C126.936 61.8567 130.688 67.5977 131.694 69.4773C134.165 73.6179 133.989 79.355 133.989 83.4956V109.519H120.362V82.3867C120.362 77.3063 119.631 71.6596 112.586 71.6596C104.44 71.6596 104.256 79.4691 104.256 86.5273V109.519H90.6215V82.0839C90.6215 78.4151 90.5298 71.64 83.0259 71.64C74.5163 71.64 74.5163 79.1701 74.5163 82.3867V109.519H60.8816V71.7344Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030"/>
          <stop offset="1" stopColor="#101010"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
