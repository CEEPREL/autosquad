"use client";
import Image from "next/image";
import React from "react";

interface BannerProps {
  headline: string;
  subtext: string;
  buttonLabel: string;
  imageSrc: string;
  smImageSrc?: string;
  onButtonClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  headline,
  subtext,
  buttonLabel,
  imageSrc,
  smImageSrc,
  onButtonClick,
}) => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="relative w-full h-[85vh] md:h-[600px] overflow-hidden">
        <Image
          className="w-full absolute h-[100%] hidden md:block object-cover top-0 left-0 z-10 select-none pointer-events-none"
          alt="banner"
          src={imageSrc}
          width={200}
          height={100}
          unoptimized
          priority
        />
        <Image
          className="w-full absolute h-[95%] md:hidden block object-cover top-0 left-0 z-10 select-none pointer-events-none"
          alt="banner"
          src={smImageSrc || ""}
          width={200}
          height={100}
          unoptimized
          priority
        />

        {/* Text overlay */}
        <div className="absolute items-center justify-center w-full md:max-w-[100%] h-56 inset-0 z-20 flex flex-col left-2 top-15 lg:top-19 lg:left-12 px-6">
          <h1 className="lg:text-4xl text-center md:text-2xl w-full md:max-w-[40%] text-2xl font-extrabold shadow-amber-950 shadow-2xl text-white">
            {headline}
          </h1>
          <p className="lg:text-xl text-lg font-medium text-white mt-2 max-w-xl">
            {subtext}
          </p>
          <div className="flex mt-8">
            <button
              onClick={onButtonClick}
              className="bg-[#b0460d] text-lg text-white lg:text-xl font-medium px-8 lg:px-15 py-3 rounded-full"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
