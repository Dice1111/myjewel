import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-[#F0F0F0] h-[60dvh] flex justify-center items-center relative overflow-hidden">
      {/* Center Letter  */}
      <div className="flex flex-col gap-5 justify-center items-center z-10">
        <h1 className="text-5xl">Custom Jewelry</h1>
        <p>Create Your Masterpiece: Bespoke Jewelry Crafted for You</p>
      </div>

      {/* Left Arrow */}
      <div className="absolute h-full left-0 bottom-0">
        <Image
          src="/images/left_arrow.png"
          className="w-auto h-full "
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>

      {/* Right Arrow */}
      <div className="absolute h-full right-0 bottom-0">
        <Image
          src="/images/right_arrow.png"
          className="w-auto h-full "
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>

      {/* Diamonds */}
      <div className="absolute left-0 bottom-0 min-w-[300px] min-h-[200px]  w-[35dvw] h-[25dvw]">
        <Image
          src="/images/diamonds.png"
          className="w-full h-auto "
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute right-0 -bottom-20 min-w-[300px] min-h-[300px]  w-[35dvw] h-[25dvw]">
        <Image
          src="/images/ring.png"
          className="w-full h-auto "
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute right-0 top-0 min-w-[200px] min-h-[200px]  w-[20dvw] h-[20dvw] ">
        <Image
          src="/images/small_diamond.png"
          className="w-full h-auto "
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default Hero;
