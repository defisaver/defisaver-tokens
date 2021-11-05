import React from 'react';
import { v4 as uuid } from 'uuid';

export default function IdleIcon(props) {
  const id = `idle_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.796 193 96.5C193 43.2046 149.795 2.61911e-05 96.5 1.68726e-05C43.2045 7.55412e-06 -7.55412e-06 43.2045 -1.68726e-05 96.5C-2.61911e-05 149.795 43.2045 193 96.5 193Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M90.9714 50.2174V123.839H59.3376L59.1377 123.727V68.5937L60.3514 67.8917L90.9714 50.2174Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M101.166 142.123V68.4984H132.8L133 68.6126V123.744L131.786 124.446L101.166 142.123Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="1.68726e-05" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#226FDB"/>
          <stop offset="1" stopColor="#18488B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}


