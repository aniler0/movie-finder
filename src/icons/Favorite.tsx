import * as React from "react";

function Favorite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_2:2440)">
        <path
          d="M28.65 4.144c-3.612-3.132-9.194-2.662-12.65.967-3.456-3.629-9.037-4.105-12.65-.967-4.7 4.08-4.012 10.732-.662 14.257L13.65 29.92a3.212 3.212 0 004.7.006l10.962-11.517c3.344-3.526 4.044-10.177-.662-14.264zM27.175 16.23L16.212 27.747c-.15.155-.274.155-.425 0L4.825 16.23c-2.281-2.397-2.744-6.935.456-9.713 2.432-2.107 6.182-1.792 8.532.677L16 9.494l2.188-2.301c2.362-2.481 6.112-2.784 8.53-.683 3.195 2.778 2.72 7.341.457 9.72z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2:2440">
          <path fill="#fff" d="M0 0h32v33H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Favorite;
