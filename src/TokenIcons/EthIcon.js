import React from 'react';
import { v4 as uuid } from 'uuid';

export default function EthIcon(props) {
  const id = `eth_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity="0.9" cx="96.5" cy="96.5" r="96.5" fill={fill} fillOpacity="0.9" />
      <path d="M96.8925 38L96.1084 40.665V117.997L96.8925 118.78L132.789 97.5612L96.8925 38Z" fill="#DEDEDE" />
      <path d="M96.8966 38L61 97.5612L96.8966 118.78V81.2453V38Z" fill="white" />
      <path d="M96.8945 125.579L96.4526 126.118V153.665L96.8945 154.955L132.813 104.371L96.8945 125.579Z" fill="#DEDEDE" />
      <path d="M96.8966 154.955V125.579L61 104.371L96.8966 154.955Z" fill="white" />
      <path d="M96.9001 118.78L132.796 97.5618L96.9001 81.2458V118.78Z" fill="#BDBDBD" />
      <path d="M61 97.5618L96.896 118.78V81.2458L61 97.5618Z" fill="#DEDEDE" />
      <defs>
        <linearGradient id={id} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#697DBC" />
          <stop offset="1" stopColor="#49589B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
