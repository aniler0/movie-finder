function SelectedHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_2:6006)">
        <path
          d="M28.894 3.913c-3.425-2.92-8.519-2.394-11.663.85L16 6.03l-1.231-1.268C11.63 1.519 6.53.993 3.106 3.913c-3.925 3.35-4.131 9.362-.618 12.993L14.58 29.394a1.96 1.96 0 002.832 0l12.093-12.488c3.519-3.63 3.313-9.643-.612-12.993z"
          fill="#a30000"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2:6006">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SelectedHeart;
