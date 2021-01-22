import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function UsdtIcon(props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `usdt_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity="0.9" cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path
        d="M105.969 86.817V74.2096H134.834V55H56.2339V74.2096H85.1022V86.8069C61.6407 87.8832 44 92.5241 44 98.0838C44 103.643 61.6492 108.284 85.1022 109.367V149.751H105.976V109.364C129.395 108.284 147 103.647 147 98.0922C147 92.5377 129.395 87.9002 105.976 86.8204L105.969 86.817ZM105.976 105.944V105.933C105.387 105.971 102.361 106.152 95.6239 106.152C90.2375 106.152 86.448 105.999 85.1124 105.93V105.947C64.3848 105.03 48.9129 101.425 48.9129 97.1108C48.9129 92.797 64.3865 89.1968 85.1124 88.2781V102.355C86.4701 102.448 90.3529 102.677 95.7121 102.677C102.149 102.677 105.385 102.409 105.979 102.355V88.2781C126.666 89.1985 142.102 92.8072 142.102 97.1058C142.102 101.404 126.659 105.015 105.979 105.935"
        fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53AE94"/>
          <stop offset="1" stopColor="#3F9A80"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
