import React from 'react';
import { v4 as uuid } from 'uuid';

export default function SntIcon(props) {
  const id = `snt_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M97.3498 93.4982C102.165 94.0017 106.98 94.5051 112.9 94.1738C128.939 93.2756 138.655 85.0066 137.966 72.646C137.263 60.0704 124.337 52.3224 111.404 53.0467C90.3274 54.2261 74.8286 72.8134 73.0832 94.0573C75.9455 93.3839 78.9584 92.982 81.7994 92.8227C87.7198 92.4918 92.5348 92.9948 97.3498 93.4982ZM56.0327 120.991C56.6978 132.519 68.9435 139.621 81.1961 138.957C101.163 137.876 115.847 120.838 117.5 101.364C114.789 101.981 111.935 102.35 109.243 102.496C103.634 102.8 99.0722 102.338 94.5101 101.877C89.9485 101.415 85.3865 100.954 79.778 101.258C64.5837 102.081 55.3786 109.661 56.0327 120.991Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4360DF"/>
          <stop offset="1" stopColor="#2542C1"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
