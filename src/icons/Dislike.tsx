function Dislike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={20} cy={20} r={19} stroke="#FF5E51" strokeWidth={2} />
      <path
        d="M22.313 20.179a.252.252 0 010-.358l4.986-4.983a1.51 1.51 0 00-2.137-2.137l-4.983 4.983a.252.252 0 01-.358 0l-4.983-4.983a1.511 1.511 0 00-2.137 2.137l4.983 4.983a.252.252 0 010 .358l-4.983 4.983a1.511 1.511 0 002.137 2.137l4.983-4.983a.251.251 0 01.358 0l4.983 4.983a1.511 1.511 0 102.137-2.137l-4.986-4.983z"
        fill="#FF5E51"
      />
    </svg>
  );
}

export default Dislike;
