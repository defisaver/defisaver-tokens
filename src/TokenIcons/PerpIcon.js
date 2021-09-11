import React from 'react';
import { v4 as uuid } from 'uuid';

export default function PerpIcon(props) {
  const id = `perp_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M77.3683 59.5129C82.4604 54.5248 90.6064 54.5248 95.6985 59.5129L107.753 71.3218C112.996 76.4575 112.996 84.8981 107.753 90.0337L86.7444 110.614L101.812 125.374C104.682 128.186 104.73 132.792 101.918 135.663C99.1056 138.534 94.4988 138.581 91.6283 135.769L55.1268 100.013C49.8842 94.8768 49.8842 86.4361 55.1268 81.3006L77.3683 59.5129ZM76.3468 100.428L96.5088 80.6778L86.5333 70.906L66.3714 90.6565L76.3468 100.428Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M107.683 69.4916C112.775 64.5035 120.921 64.5035 126.013 69.4916L138.068 81.3005C143.31 86.4361 143.31 94.8767 138.068 100.012L101.566 135.769C98.6956 138.581 94.0888 138.534 91.2769 135.663C88.4647 132.792 88.5123 128.185 91.3829 125.373L106.45 110.614L95.6278 100.012C90.3851 94.8767 90.3851 86.4361 95.6278 81.3005L107.683 69.4916ZM116.848 100.428L126.823 90.6564L116.848 80.8845L106.872 90.6564L116.848 100.428Z" fill="white"/>
      <path opacity="0.95" d="M106.867 90.6811L96.2702 80.616L86.1064 90.5979L96.4516 100.89L106.867 90.6811Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4CEAB9"/>
          <stop offset="1" stopColor="#387E69"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
