import React from 'react';
import { v4 as uuid } from 'uuid';

export default function BntIcon(props) {
  const id = `bnt_icon_${uuid()}`;
  const imgId = `img_${id}`;
  const patternId = `pattern_${id}`;
  const fill = `url(#${id})`;
  const patternFill = `url(#${patternId})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"{...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <rect x="64" y="47" width="65" height="99" fill={patternFill} />
      <defs>
        <pattern id={patternId} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#${imgId}`} transform="translate(0 -0.00694015) scale(0.00680272 0.00446643)"/>
        </pattern>
        <linearGradient id={id} x1="96.5" y1="1.52588e-05" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#303030" />
          <stop offset="1" stopColor="#101010" />
        </linearGradient>
        <image id={imgId} width="147" height="227" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  );
}
