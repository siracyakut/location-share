export default function Footer() {
  return (
    <div className="mt-auto w-full flex items-center justify-center">
      <div className="w-max text-center my-4 bg-zinc-800/60 py-2 px-0 md:px-4 rounded-md flex flex-wrap gap-y-1.5 items-center justify-center gap-x-4 text-sm">
        <div className="w-full md:w-auto flex items-center justify-center gap-x-2">
          <span>Made with</span>
          <svg
            viewBox="0 0 1792 1792"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "0.8rem" }}
          >
            <path
              d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
              fill="#e25555"
            />
          </svg>
          <span>in Turkey</span>
        </div>
        <span className="hidden md:block text-xl select-none text-zinc-200">
          •
        </span>
        <p>
          Powered by{" "}
          <a
            className="hover:text-blue-400 hover:underline transition-all"
            href="https://github.com/siracyakut"
            target="_blank"
          >
            Siraç Yakut
          </a>
        </p>
      </div>
    </div>
  );
}
