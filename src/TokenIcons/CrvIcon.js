import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

export default function CrvIcon (props) {
  const memoizedUuid = useMemo(() => uuid(), []);
  const id = `crv_icon_${memoizedUuid}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill={fill} />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.2177 148.008C58.0775 148.008 50.0676 119.058 50.0676 92.6451C49.5964 79.5308 54.5908 52.6895 78.338 50.2394C108.022 47.1768 138.913 74.2693 145.245 87.2266C151.576 100.184 151.134 111.021 133.465 116.911C119.33 121.622 100.794 126.099 93.2934 127.748C91.6185 140.004 87.3085 148.008 76.2177 148.008ZM94.3088 100.097C94.3251 100.126 94.3414 100.155 94.3578 100.184C94.0618 100.184 93.9688 100.124 94.2418 99.9766C94.264 100.017 94.2864 100.057 94.3088 100.097ZM94.2418 99.9766C87.6197 88.0796 88.9805 80.3907 101.16 80.3908C113.411 80.3908 145.009 87.9334 117.681 94.0587C100.666 97.8724 95.1998 99.46 94.2418 99.9766ZM77.4365 141.465C85.3512 139.905 89.8504 128.913 87.4859 116.914C85.1213 104.914 76.7883 96.4506 68.8736 98.0103C60.9589 99.5699 56.4596 110.562 58.8242 122.562C61.1888 134.561 69.5218 143.025 77.4365 141.465Z" fill="white" />
    <defs>
      <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3465A4" />
        <stop offset="1" stopColor="#164786" />
      </linearGradient>
    </defs>
  </svg>
  );
}

