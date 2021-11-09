function Profile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={31}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 18c4.814 0 8.719-4.031 8.719-9S20.314 0 15.5 0c-4.813 0-8.719 4.031-8.719 9s3.906 9 8.719 9zm7.75 2h-3.336c-1.344.637-2.84 1-4.414 1-1.574 0-3.064-.363-4.414-1H7.75C3.47 20 0 23.581 0 28v1c0 1.656 1.302 3 2.906 3h25.188C29.698 32 31 30.656 31 29v-1c0-4.419-3.47-8-7.75-8z"
        fill="#c0c0c0"
      />
    </svg>
  );
}

export default Profile;
