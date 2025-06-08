"use client";
import React from "react";
import Image from "next/image";

function VideoIllustration() {
  return (
    <section className="relative bg-[#e8d1c5] text-black py-20 px-6 overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Left SVG pattern */}
      <div className="absolute top-0 left-0 h-full w-24 md:w-96">
        <Image
          src="/svgs/pattern1.svg"
          alt="Left decorative pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-30"
          unoptimized
        />
      </div>

      {/* Right SVG pattern */}
      <div className="absolute -bottom-52 right-0 h-full w-24 md:w-96">
        <Image
          src="/svgs/pattern3.svg"
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
            src="/videoSaas.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
            poster="/videos/saas-pricing-poster.jpg"
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        {/* Text content */}
        <div className="flex-1 max-w-xl space-y-6">
          <h2 className="text-4xl font-extrabold">
            Confused About Billing Your SaaS Clients?
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Navigating pricing models for your SaaS can be tricky. Whether it’s
            usage-based, tiered, or flat-rate billing — getting it right is
            essential to scaling and retaining customers.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Our experts help you design transparent, flexible billing solutions
            that match your business goals and simplify your clients’
            experience.
          </p>

          <button
            onClick={() => console.log("Know your pricing clicked")}
            className="bg-[#b0460d] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#993b0c] transition"
          >
            Know Your Pricing
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoIllustration;
