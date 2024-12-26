import Link from "next/link";
import React from "react";

type TCustomLinks = {
  href: string;
  text: string;
};
const CustomLinks: React.FC<TCustomLinks> = ({ href, text }) => {
  return (
    <div>
      <Link href={href} className="relative group text-black">
        <span className="hover:text-purple-500 transition-colors duration-300">
          {text}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-violet-700 group-hover:w-full transition-all duration-500"></span>
      </Link>
    </div>
  );
};

export default CustomLinks;
