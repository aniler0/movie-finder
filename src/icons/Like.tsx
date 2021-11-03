function Like(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20} cy={20} r={19} stroke="#00D387" strokeWidth={2} />
      <path
        d="M24.51 12.267c-3.08 0-4.38 2.172-4.38 2.172s-1.301-2.18-4.38-2.18c-2.602.008-4.782 2.18-4.782 4.773 0 5.946 9.162 10.71 9.162 10.71s9.162-4.764 9.162-10.71c0-2.593-2.18-4.765-4.783-4.765z"
        fill="#00D387"
      />
    </svg>
  );
}

export default Like;
