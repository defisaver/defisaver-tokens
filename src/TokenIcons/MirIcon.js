import React from 'react';
import { v4 as uuid } from 'uuid';

export default function MirIcon(props) {
  const id = `mir_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M111.75 62.925V45.6L96.5 42V59.325L81.25 55.725V73.095L66 69.495V125.43L81.25 129.075V146.4L96.5 150V132.675L111.75 136.275V118.905L127 122.505V66.57L111.75 62.925ZM99.5319 121.83L78.2181 116.79V83.895L99.5319 88.98V121.83Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4B546D"/>
          <stop offset="1" stopColor="#232C45"/>
        </linearGradient>
      </defs>
    </svg>


  );
}
