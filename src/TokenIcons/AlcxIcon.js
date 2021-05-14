import React from 'react';
import { v4 as uuid } from 'uuid';

export default function AlcxIcon(props) {
  const id = `alcx_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M97 46V56M97 56L62 83M97 56L132.5 84M62 83V109L68.25 114M62 83L78 95.8M97 137L112 125M97 137V125M97 137V146.5M97 137L81 124.2M112 125H97M112 125H132.5L125.937 114M97 125V111L78 95.8M78 95.8L97 65.5L115.5 96.507M81 124.2L62.5 124.5L68.25 114M81 124.2L68.25 114M115.5 96.507L132.5 84M115.5 96.507L125.937 114M132.5 84V109L125.937 114" stroke="white" strokeWidth="6"/>
      <circle cx="97" cy="97" r="51" stroke="white" strokeWidth="5"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDC9A3"/>
          <stop offset="1" stopColor="#7D4F2E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
