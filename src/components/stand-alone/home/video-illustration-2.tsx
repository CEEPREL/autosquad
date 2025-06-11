"use client";
import React from "react";
import Image from "next/image";

function VideoIllustration2() {
  return (
    <section className="relative bg-gray-100 text-black py-20 px-6 overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Left SVG pattern */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-96">
        <Image
          src="/svgs/LooperGroup-1.svg"
          alt="Left decorative pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-30"
          unoptimized
        />
      </div>

      {/* Right SVG pattern */}
      <div className="absolute -bottom-2 right-50 h-full w-24 md:w-96">
        <Image
          src="/svgs/LooperGroup-2.svg"
          alt="Right decorative pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-30"
          unoptimized
        />
      </div>
      <div className="absolute -bottom-5 right-0 h-full w-24 md:w-96">
        <Image
          src="/svgs/LooperGroup.svg"
          alt="Right decorative pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-30"
          unoptimized
        />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Video player card */}
        <div className="flex-1 w-full max-w-xl rounded-lg overflow-hidden shadow-md hover:shadow-2xl shadow-gray-800 transition-shadow duration-700">
          <video
            src="/videodate.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
            poster="/videos/saas-pricing-poster.jpg"
          >
            Sorry, your browser doesn&apos;t support embedded videos.
          </video>
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-xl space-y-6">
          <h2 className="text-4xl font-extrabold">
            Schedule a free consultation with our experts today.
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Choose a date that works best for you, and let’s create a billing
            solution tailored to your business needs.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            We look forward to helping you transform your billing process!
          </p>

          <button
            onClick={() => console.log("Know your pricing clicked")}
            className="bg-[#ff3131] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff3131d7] transition"
          >
            Pick Your Consultation Date ➔
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoIllustration2;
