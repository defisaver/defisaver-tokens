import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RookIcon(props) {
  const id = `rook_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.796 193 96.5C193 43.2046 149.795 2.61911e-05 96.5 1.68726e-05C43.2045 7.55412e-06 -7.55412e-06 43.2045 -1.68726e-05 96.5C-2.61911e-05 149.795 43.2045 193 96.5 193Z" fill={fill} />
      <path d="M51.998 52.0063H69.678V69.6863H51.998V52.0063ZM105.025 69.68V52H87.358V69.68H69.678V140.4H122.712V69.68H105.025ZM106.247 106.255H86.1366V86.1448H106.247V106.255Z" fill="white"/>
      <path d="M122.712 52.0063H140.392V69.6863H122.712V52.0063Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="1.68726e-05" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030"/>
          <stop offset="1" stopColor="#101010"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


