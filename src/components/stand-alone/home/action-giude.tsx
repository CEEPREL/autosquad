"use client";
import Image from "next/image";
import React from "react";

const actionSteps = [
  {
    title: "Share Your Vision",
    description:
      "Tell us what you're building — your goals, your users, and your industry. Strategy session | Discovery workshop",
    buttonText: "Start Discovery",
    iconSrc: "/svgs/vision1.svg",
  },
  {
    title: "Design the Experience",
    description:
      "We map your user's journey and craft a seamless interface that they will love. User Experience/User Interface Design | Prototyping",
    buttonText: "Start Design",
    iconSrc: "/svgs/design.svg",
  },
  {
    title: "Develop & Test",
    description:
      "Our team builds a scalable, secure product — tested for real-world performance. Full-stack dev | QA & testing",
    buttonText: "Start Development",
    iconSrc: "/svgs/develop.svg",
  },
  {
    title: "Launch & Grow",
    description:
      "We deploy your app and support your growth with updates, scaling, and new features. Launch day | Post-launch support",
    buttonText: "Launch Now",
    iconSrc: "/svgs/launch.svg",
  },
];

export default function ActionGuide() {
  return (
    <div className="relative lg:flex gap-4 lg:flex-row justify-center md:grid md:grid-cols-2 flex flex-col items-center">
      {actionSteps.map(({ title, description, buttonText, iconSrc }, idx) => (
        <ActionGuideItem
          key={idx}
          icon={
            <div className="relative w-32 h-32 ">
              <Image
                alt={title}
                src={iconSrc}
                unoptimized
                priority
                width={640}
                height={640}
                className="absolute top-0 -translate-10 inset-0 w-full h-full object-contain bg-blue-300 select-none pointer-events-none"
              />
            </div>
          }
          title={title}
          description={description}
          buttonText={buttonText}
          onClick={() => console.log(`${title} clicked`)}
        />
      ))}
    </div>
  );
}

interface ActionGuideItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export const ActionGuideItem: React.FC<ActionGuideItemProps> = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-8 py-20 bg-white rounded-lg shadow-md max-w-sm font-[family-name:var(--font-geist-sans)]">
      <div className="mb-6 w-16 h-16 text-[#b0460d]">{icon}</div>

      <h3 className="text-2xl font-extrabold text-black mb-2">{title}</h3>

      <p className="text-lg font-medium text-gray-700 mb-6">{description}</p>

      <button
        onClick={onClick}
        className="bg-[#b0460d] items-baseline text-white text-base font-medium px-6 py-3 rounded-full hover:bg-[#993b0c] transition"
      >
        {buttonText}
      </button>
    </div>
  );
};
