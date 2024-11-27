"use client";

import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20 bg-[#1a1a1a] flex justify-center items-center">
      <Image
        src="/images/zaama-white-logo.png"
        alt="zaama-logo"
        width={30}
        height={30}
        className="opacity-10 animate-pulse "
      />
    </div>
  );
};

export default Loading;
