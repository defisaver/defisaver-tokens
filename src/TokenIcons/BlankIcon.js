import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function BlankIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `blank_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" transform="rotate(-180 96.5 96.5)" fill={fill} fillOpacity="0.9" />
      <defs>
        <linearGradient id={id} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#182025"/>
          <stop offset="1" stopColor="#2A5648" />
        </linearGradient>
      </defs>
    </svg>
  );
}

