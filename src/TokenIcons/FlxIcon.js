import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FlxIcon(props) {
  const id = `flx_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M118.567 46.7973H109.222L101.009 86.6686L101.171 86.7458C102.38 87.3903 103.454 88.2623 104.333 89.3138C104.552 89.5712 104.757 89.8416 104.947 90.1247C105.827 91.4002 106.414 92.8545 106.665 94.3833C106.917 95.9121 106.828 97.4777 106.403 98.9679C106.403 99.0103 106.384 99.0567 106.372 99.0953C106.201 99.6718 105.98 100.233 105.712 100.771C105.681 100.833 105.654 100.899 105.623 100.96C105.358 101.471 105.052 101.959 104.708 102.42L104.561 102.621C104.215 103.062 103.834 103.475 103.422 103.857L103.225 104.038C102.808 104.408 102.363 104.745 101.893 105.046L101.665 105.185C101.183 105.482 100.678 105.741 100.155 105.957L99.9235 106.046C99.3816 106.253 98.8236 106.414 98.2552 106.529L98.0467 106.564C97.6626 106.619 97.276 106.655 96.8882 106.672L90.8486 135.97H106.851L123.885 53.3042C124.049 52.5156 124.035 51.7004 123.843 50.9181C123.652 50.1358 123.288 49.4062 122.778 48.7825C122.268 48.1589 121.626 47.657 120.897 47.3135C120.169 46.9701 119.373 46.7937 118.567 46.7973Z" fill="white"/>
      <path d="M90.2882 104.945C89.719 104.567 89.1875 104.135 88.7011 103.655C88.4591 103.419 88.2274 103.169 88.006 102.906C87.5671 102.385 87.1792 101.822 86.8475 101.226C86.6827 100.928 86.5321 100.621 86.3957 100.307C85.8405 99.0176 85.5491 97.6297 85.5384 96.2256C85.5212 95.2158 85.6513 94.209 85.9246 93.2367C85.9246 93.1942 85.9439 93.1518 85.9554 93.1093C86.1271 92.5327 86.348 91.972 86.6158 91.4333C86.6467 91.3715 86.6737 91.3059 86.7046 91.248C86.9697 90.7387 87.2757 90.2518 87.6198 89.7921L87.7666 89.5913C88.113 89.1487 88.4939 88.7342 88.9057 88.3518L89.1027 88.1703C89.5197 87.7999 89.9651 87.4629 90.4349 87.1624L90.6628 87.0234C91.1447 86.7261 91.6496 86.4678 92.1727 86.251L92.4082 86.1622C92.95 85.9556 93.508 85.7942 94.0764 85.6795L94.285 85.6448C94.6843 85.5849 95.0864 85.5462 95.4898 85.5289L101.58 56.0647H85.5809L68.5434 138.703C68.3795 139.492 68.3937 140.307 68.585 141.089C68.7763 141.871 69.1398 142.6 69.649 143.224C70.1582 143.847 70.8003 144.349 71.5283 144.693C72.2563 145.037 73.0519 145.213 73.857 145.21H83.2021L91.381 105.559C91.3154 105.524 91.2382 105.509 91.1725 105.474C90.8636 105.312 90.5688 105.136 90.2882 104.945Z" fill="white"/>
      <path d="M86.7132 100.181C86.313 99.2552 86.0527 98.2752 85.9409 97.273C86.0527 98.2752 86.313 99.2552 86.7132 100.181Z" fill="white"/>
      <path d="M85.9304 97.2681C85.8912 96.9271 85.8693 96.5842 85.8647 96.2409C85.8692 96.5842 85.8911 96.9271 85.9304 97.2681Z" fill="white"/>
      <path d="M86.2573 93.3377C86.2573 93.2991 86.2573 93.2566 86.2882 93.218C86.2766 93.2566 86.2689 93.2991 86.2573 93.3377Z" fill="white"/>
      <path d="M86.9292 91.5908C86.9601 91.5328 86.9871 91.471 87.018 91.4093C86.9833 91.471 86.9562 91.5328 86.9292 91.5908Z" fill="white"/>
      <path d="M87.9014 90.0011L88.0481 89.808L87.9014 90.0011Z" fill="white"/>
      <path d="M104.441 102.219L104.294 102.412L104.441 102.219Z" fill="white"/>
      <path d="M98.189 106.185L97.9844 106.216L98.189 106.185Z" fill="white"/>
      <path d="M103.196 103.61L103.003 103.784L103.196 103.61Z" fill="white"/>
      <path d="M89.1431 88.6069L89.3361 88.4331L89.1431 88.6069Z" fill="white"/>
      <path d="M100.029 105.63L99.8008 105.711L100.029 105.63Z" fill="white"/>
      <path d="M88.2698 102.695C87.8454 102.19 87.4704 101.645 87.1499 101.069C87.4704 101.645 87.8454 102.19 88.2698 102.695Z" fill="white"/>
      <path d="M90.4675 104.671C89.9137 104.306 89.3965 103.888 88.9229 103.424C89.3965 103.888 89.9137 104.306 90.4675 104.671Z" fill="white"/>
      <path d="M96.1859 106.382H96.2246C95.9002 106.382 95.5758 106.382 95.2476 106.347C95.5694 106.37 95.8822 106.382 96.1859 106.382Z" fill="white"/>
      <path d="M93.1995 105.949C92.5513 105.754 91.9239 105.496 91.3267 105.177C91.9239 105.496 92.5513 105.754 93.1995 105.949Z" fill="white"/>
      <path d="M98.1338 86.0185C98.8067 86.1472 99.4651 86.3425 100.099 86.6016C99.4651 86.3425 98.8067 86.1472 98.1338 86.0185Z" fill="white"/>
      <path d="M101.716 104.761L101.496 104.896L101.716 104.761Z" fill="white"/>
      <path d="M106.082 98.8756C106.082 98.9142 106.082 98.9567 106.051 98.9953C106.067 98.9567 106.071 98.9296 106.082 98.8756Z" fill="white"/>
      <path d="M104.673 90.3101C105.049 90.8545 105.371 91.4339 105.635 92.0401C105.371 91.4338 105.049 90.8544 104.673 90.3101Z" fill="white"/>
      <path d="M96.1577 85.8313H96.1152C96.4396 85.8313 96.764 85.8313 97.0922 85.8661C96.7781 85.8429 96.4666 85.8313 96.1577 85.8313Z" fill="white"/>
      <path d="M104.075 89.5172C103.224 88.5001 102.184 87.657 101.013 87.0342C102.184 87.657 103.224 88.5001 104.075 89.5172Z" fill="white"/>
      <path d="M92.3081 86.5714L92.5359 86.4903L92.3081 86.5714Z" fill="white"/>
      <path d="M94.1543 86.0317L94.359 86.0008L94.1543 86.0317Z" fill="white"/>
      <path d="M105.417 100.625C105.386 100.683 105.359 100.745 105.328 100.806C105.359 100.745 105.382 100.683 105.417 100.625Z" fill="white"/>
      <path d="M90.6279 87.4552L90.848 87.3201L90.6279 87.4552Z" fill="white"/>
      <path d="M117.528 78.3157C115.19 75.5077 112.319 73.1907 109.08 71.4985C105.842 69.8064 102.3 68.7726 98.6599 68.457C97.8296 68.3836 96.9878 68.345 96.1576 68.345C89.0042 68.3369 82.1238 71.0903 76.9509 76.0313C71.7781 80.9722 68.7122 87.7192 68.3925 94.8654C68.0728 102.012 70.524 109.005 75.2349 114.389C79.9458 119.772 86.5529 123.129 93.6784 123.759C94.5086 123.833 95.3505 123.871 96.1807 123.871C101.467 123.885 106.647 122.388 111.111 119.557C115.575 116.726 119.138 112.679 121.38 107.892C123.622 103.105 124.45 97.7775 123.767 92.5358C123.084 87.2941 120.918 82.3566 117.524 78.3041L117.528 78.3157ZM106.429 97.0291C106.371 97.6536 106.256 98.2715 106.086 98.875C106.086 98.9175 106.086 98.96 106.055 98.9986C105.889 99.5564 105.676 100.099 105.418 100.62C105.387 100.682 105.364 100.744 105.333 100.802C105.076 101.296 104.779 101.769 104.445 102.215L104.302 102.408C103.966 102.837 103.597 103.239 103.197 103.609L103.008 103.783C102.603 104.142 102.17 104.469 101.714 104.76L101.494 104.895C101.028 105.178 100.54 105.424 100.035 105.629L99.8068 105.714C99.2811 105.914 98.74 106.07 98.1888 106.181L97.988 106.212C97.4056 106.318 96.8151 106.374 96.2232 106.378H96.1846C95.8757 106.378 95.5641 106.364 95.2501 106.336C94.5553 106.276 93.8683 106.147 93.1995 105.949C92.5513 105.755 91.9239 105.496 91.3267 105.177C91.0306 105.02 90.7448 104.85 90.4694 104.667C89.9156 104.302 89.3983 103.885 88.9247 103.42C88.6905 103.188 88.4678 102.946 88.2567 102.694C87.8337 102.189 87.46 101.645 87.1407 101.068C86.981 100.78 86.8356 100.483 86.7043 100.176C86.1646 98.9324 85.8784 97.5934 85.8625 96.2375C85.8497 95.2585 85.9797 94.2828 86.2486 93.3413C86.2486 93.2988 86.2486 93.2563 86.2795 93.2177C86.4473 92.6583 86.6631 92.1143 86.9244 91.592C86.9553 91.5302 86.9785 91.4684 87.0094 91.4105C87.2664 90.9159 87.5634 90.4432 87.8975 89.9971L88.0404 89.804C88.3762 89.3751 88.7455 88.9735 89.1448 88.6031L89.3341 88.4293C89.739 88.0702 90.1715 87.7436 90.6277 87.4523L90.8478 87.3172C91.3142 87.0344 91.8023 86.789 92.3075 86.5835L92.5353 86.4985C93.0609 86.2985 93.6021 86.1422 94.1534 86.0312L94.3542 85.9965C94.9366 85.8904 95.527 85.8349 96.1189 85.8304H96.1576C96.4665 85.8304 96.778 85.8446 97.0921 85.8729C97.4419 85.9043 97.7898 85.9532 98.1347 86.0197C98.8078 86.1493 99.4663 86.3459 100.1 86.6066C100.412 86.7353 100.716 86.8782 101.012 87.0353C102.183 87.6593 103.223 88.5037 104.074 89.5221C104.285 89.7796 104.484 90.037 104.672 90.2945C106.024 92.2606 106.646 94.6376 106.429 97.0137V97.0291Z" fill="white"/>
      <path d="M105.328 100.806C105.071 101.299 104.774 101.77 104.44 102.215C104.774 101.77 105.071 101.299 105.328 100.806Z" fill="white"/>
      <path d="M103.009 103.784C102.604 104.142 102.172 104.467 101.716 104.758C102.172 104.467 102.604 104.142 103.009 103.784Z" fill="white"/>
      <path d="M104.3 102.404C103.964 102.832 103.595 103.232 103.196 103.602C103.595 103.232 103.964 102.832 104.3 102.404Z" fill="white"/>
      <path d="M106.43 97.0302C106.37 97.6535 106.254 98.2701 106.082 98.8722C106.254 98.2701 106.37 97.6535 106.43 97.0302Z" fill="white"/>
      <path d="M106.056 99.0033C105.889 99.5614 105.675 100.104 105.415 100.625C105.675 100.104 105.889 99.5614 106.056 99.0033Z" fill="white"/>
      <path d="M92.5356 86.4996C93.0615 86.3014 93.6026 86.1464 94.1537 86.0362C93.6026 86.1462 93.0614 86.3012 92.5356 86.4996Z" fill="white"/>
      <path d="M90.8486 87.3163C91.3152 87.0349 91.8033 86.7908 92.3083 86.5864C91.8033 86.7908 91.3152 87.0349 90.8486 87.3163Z" fill="white"/>
      <path d="M88.0405 89.8073C88.3766 89.3798 88.7459 88.9795 89.145 88.6102C88.7458 88.9794 88.3765 89.3797 88.0405 89.8073Z" fill="white"/>
      <path d="M89.333 88.4336C89.7382 88.076 90.1708 87.7506 90.6267 87.4604C90.1708 87.7506 89.7382 88.076 89.333 88.4336Z" fill="white"/>
      <path d="M94.3521 86.0011C94.9347 85.8973 95.525 85.843 96.1168 85.8389C95.525 85.843 94.9347 85.8973 94.3521 86.0011Z" fill="white"/>
      <path d="M86.2543 93.3445C85.985 94.2859 85.8549 95.2616 85.8681 96.2407C85.8549 95.2616 85.985 94.2859 86.2543 93.3445Z" fill="white"/>
      <path d="M101.491 104.896C101.024 105.178 100.536 105.422 100.031 105.626C100.536 105.422 101.024 105.178 101.491 104.896Z" fill="white"/>
      <path d="M97.986 106.217C97.4033 106.32 96.813 106.375 96.2212 106.379C96.813 106.375 97.4033 106.321 97.986 106.217Z" fill="white"/>
      <path d="M99.805 105.715C99.2792 105.913 98.7381 106.068 98.187 106.178C98.7381 106.068 99.2792 105.913 99.805 105.715Z" fill="white"/>
      <path d="M86.2842 93.2183C86.4507 92.6602 86.6652 92.1176 86.9252 91.5964C86.6652 92.1176 86.4507 92.6602 86.2842 93.2183Z" fill="white"/>
      <path d="M87.0112 91.4148C87.2697 90.9214 87.568 90.45 87.9033 90.0053C87.5679 90.45 87.2696 90.9214 87.0112 91.4148Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#70D9EB"/>
          <stop offset="1" stopColor="#128194"/>
        </linearGradient>
      </defs>
    </svg>


  );
}