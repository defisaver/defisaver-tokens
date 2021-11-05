import React from 'react';
import { v4 as uuid } from 'uuid';

export default function TracIcon(props) {
  const id = `trac_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M97.0001 76.3922C85.6195 76.3922 76.3922 85.618 76.3922 97.0001C76.3922 108.38 85.6195 117.606 97.0001 117.606C103.326 117.606 108.985 114.755 112.765 110.268L128.366 123.4C120.845 132.327 109.586 138 97.0001 138C74.3556 138 56 119.643 56 97.0001C56 74.3556 74.3556 56 97.0001 56V76.3922ZM132.427 117.646L114.805 107.377C115.407 106.347 115.922 105.261 116.339 104.128L135.479 111.182C134.648 113.437 133.623 115.597 132.427 117.646ZM117.606 96.9998H138C138 94.5712 137.788 92.1922 137.382 89.8794L117.296 93.4212C117.5 94.5837 117.606 95.7793 117.606 96.9998ZM128.516 70.7764L112.84 83.8198C112.073 82.8979 111.226 82.0449 110.311 81.2696L123.483 65.703C125.304 67.2454 126.989 68.9426 128.516 70.7764Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#563FD0"/>
          <stop offset="1" stopColor="#372884"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
