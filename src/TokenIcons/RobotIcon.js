import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RobotIcon(props) {
  const id = `robot_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity="0.9" cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M132.9 60H60V132.9H132.9V60ZM122.518 70.4572H70.4572V101.679H122.518V70.4572ZM70.4572 112.136H122.518V122.518H70.4572V112.136Z" fill="white"/>
      <path d="M110.556 86.1055L114.243 82.4192L110.556 78.7328L106.87 82.4192L103.259 78.7328L99.5723 82.4192L103.259 86.1055L99.5723 89.7167L103.259 93.4031L106.87 89.7167L110.556 93.4031L114.243 89.7167L110.556 86.1055Z" fill="white"/>
      <path d="M89.7168 86.1055L93.4032 82.4192L89.7168 78.7328L86.1057 82.4192L82.4193 78.7328L78.7329 82.4192L82.4193 86.1055L78.7329 89.7167L82.4193 93.4031L86.1057 89.7167L89.7168 93.4031L93.4032 89.7167L89.7168 86.1055Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#05EEFE"/>
          <stop offset="1" stopColor="#1199A3"/>
        </linearGradient>
      </defs>
    </svg>

  );
}

