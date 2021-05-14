import React from 'react';
import { v4 as uuid } from 'uuid';

export default function LqtyIcon(props) {
  const id = `lqty_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M90.8714 135.954L90.7726 135.954H90.655C51.0665 135.954 35.4427 84.3017 70.4106 62.5341L70.4029 62.6124C76.3837 59.0491 83.3864 57 90.8714 57C112.855 57 130.676 74.6744 130.676 96.4769C130.676 101 129.908 105.344 128.497 109.391C143.986 117.333 144 136 144 136H91.662C91.2494 136 90.8385 135.994 90.4309 135.983C90.6962 135.976 90.961 135.966 91.2247 135.954H90.9703L90.8714 135.954Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2EB6EA"/>
          <stop offset="1" stopColor="#005171"/>
        </linearGradient>
      </defs>
    </svg>

  );
}
