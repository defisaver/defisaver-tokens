import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function LrcIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `lrc_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill={fill} />
      <path d="M104.68 94.887H145V95.205L81.96 133.364L113.32 108.561L104.68 94.887ZM81 58V134L49 108.561L81 58Z" fill="white" />
      <defs>
        <linearGradient id={id} x1="96.5" y1="192.988" x2="96.5" y2="-0.0118143" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0042E1" />
          <stop offset="1" stopColor="#1C60FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
