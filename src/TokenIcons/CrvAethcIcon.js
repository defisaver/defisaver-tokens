import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CrvAethcIcon(props) {
  const id = `crv_aethc_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1}/>
      <path d="M96.8925 38L96.1084 40.665V117.997L96.8925 118.78L132.789 97.5612L96.8925 38Z" fill="#DEDEDE"/>
      <path d="M96.8966 38L61 97.5612L96.8966 118.78V81.2453V38Z" fill="white"/>
      <path d="M96.8945 125.579L96.4526 126.118V153.665L96.8945 154.955L132.813 104.371L96.8945 125.579Z" fill="#DEDEDE"/>
      <path d="M96.8966 154.955V125.579L61 104.371L96.8966 154.955Z" fill="white"/>
      <path d="M96.9004 118.78L132.796 97.5618L96.9004 81.2458V118.78Z" fill="#BDBDBD"/>
      <path d="M61 97.5618L96.896 118.78V81.2458L61 97.5618Z" fill="#DEDEDE"/>
      <path d="M148.5 89C173.077 89 193 69.0767 193 44.5C193 19.9233 173.077 0 148.5 0C123.923 0 104 19.9233 104 44.5C104 69.0767 123.923 89 148.5 89Z" fill={fill2} />
      <path fillRule="evenodd" clipRule="evenodd" d="M139.147 68.2523C130.782 68.2523 127.088 54.9021 127.088 42.7223C126.871 36.6747 129.174 24.2971 140.125 23.1673C153.813 21.755 168.059 34.2484 170.978 40.2236C173.898 46.1987 173.694 51.1961 165.546 53.912C159.028 56.0848 150.48 58.1489 147.021 58.9094C146.249 64.5615 144.262 68.2523 139.147 68.2523ZM147.512 46.1987L147.458 46.1031C147.332 46.171 147.375 46.1987 147.512 46.1987ZM147.458 46.1031C144.405 40.6169 145.032 37.0713 150.649 37.0713C156.298 37.0713 170.869 40.5495 158.267 43.3741C150.421 45.1328 147.9 45.8649 147.458 46.1031ZM139.709 65.2353C143.359 64.5161 145.434 59.4472 144.344 53.9137C143.253 48.3801 139.411 44.4774 135.761 45.1966C132.111 45.9158 130.036 50.9846 131.127 56.5181C132.217 62.0517 136.06 65.9545 139.709 65.2353Z" fill="white"/>
      <defs>
        <linearGradient id={id1} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE81C"/>
          <stop offset="1" stopColor="#FFA723"/>
        </linearGradient>
        <linearGradient id={id2} x1="148.5" y1="0" x2="148.5" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3465A4"/>
          <stop offset="1" stopColor="#164786"/>
        </linearGradient>
      </defs>
    </svg>
  );
}




