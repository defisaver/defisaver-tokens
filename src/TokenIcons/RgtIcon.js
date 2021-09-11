import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RgtIcon(props) {
  const id = `rgt_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const id3 = `3_${id}`;
  const id4 = `4_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  const fill3 = `url(#${id3})`;
  const fill4 = `url(#${id4})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1} />
      <circle cx="97" cy="97" r="51.2078" transform="rotate(-90 97 97)" stroke={fill2} strokeWidth="3.58432"/>
      <circle cx="97.0001" cy="96.9999" r="37.4341" transform="rotate(127.501 97.0001 96.9999)" stroke={fill3} strokeWidth="3.58432"/>
      <circle cx="97" cy="97" r="25.2078" transform="rotate(-90 97 97)" stroke={fill4} strokeWidth="3.58432"/>
      <defs>
        <linearGradient id={id1} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030"/>
          <stop offset="1" stopColor="#101010"/>
        </linearGradient>
        <linearGradient id={id2} x1="97" y1="44" x2="97" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={id3} x1="97.0001" y1="57.7736" x2="97.0001" y2="136.226" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={id4} x1="97" y1="70" x2="97" y2="124" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
