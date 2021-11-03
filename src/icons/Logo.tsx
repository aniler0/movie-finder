function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={42}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.367 17.64c-.035 0-.07 0-.105-.035-1.172-1.575-1.47-4.27-1.557-5.303 0-.192-.228-.314-.402-.21C8.627 14.14 5.25 19.005 5.25 23.695c0 8.05 5.6 14.805 15.225 14.805 9.012 0 15.225-6.965 15.225-14.805 0-10.273-7.35-17.097-13.878-20.177a.228.228 0 00-.332.245c.84 5.53-.315 11.55-7.122 13.877z"
        fill="url(#prefix__paint0_linear_17:167)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_17:167"
          x1={8.16}
          y1={6.6}
          x2={29.4}
          y2={33.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3863" />
          <stop offset={1} stopColor="#FF5E51" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
