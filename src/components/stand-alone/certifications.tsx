"use client";
import React from "react";
import Image from "next/image";

// Logo images: you can replace these with actual tech logos
const techLogos = [
  "/svgs/Frame 2-1.svg",
  "/svgs/Frame 2.svg",
  "/svgs/Frame 3-1.svg",
  "/svgs/Frame 3.svg",
  "/svgs/Frame 4.svg",
  "/svgs/Frame 5-2.svg",
  "/svgs/Frame 5-1.svg",
  "/svgs/Frame 5.svg",
  "/svgs/Frame 6.svg",
  "/svgs/Frame 6-2.svg",
  "/svgs/Frame 4-2.svg",
];

const techDescriptions = [
  {
    title: "Web App Development",
    description:
      "We craft scalable, responsive web apps using cutting-edge frameworks and best practices.",
    image: "svgs/background.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "Our engineers build high-performance mobile apps that run smoothly on both iOS and Android.",
    image: "/svgs/ROTATE ME to 0° (iPhone).svg",
  },
  {
    title: "Desktop App Development",
    description:
      "We create secure, robust desktop applications tailored to business workflows and user needs.",
    image: "/svgs/Bezel.svg",
  },
];

export default function CertificationAndExpertise() {
  return (
    <section className=" text-black mt-8 font-[family-name:var(--font-geist-sans)]">
      {/* Infinite Scrolling Logo Banner */}
      <div className="overflow-hidden py-8 border-b border-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Expertise and Certifications
        </h1>
        <div className="flex animate-scroll whitespace-nowrap space-x-10 px-8">
          {techLogos.concat(techLogos).map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Tech logo ${i}`}
              width={80}
              height={80}
              className="grayscale hover:grayscale-0 transition duration-300"
              unoptimized
            />
          ))}
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        {techDescriptions.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="group bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Bottom Card (spans full width) */}
        <div className="md:col-span-2 group bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
          <div className="overflow-hidden">
            <Image
              src={techDescriptions[2].image}
              alt={techDescriptions[2].title}
              width={1200}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              {techDescriptions[2].title}
            </h3>
            <p className="text-gray-700">{techDescriptions[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
