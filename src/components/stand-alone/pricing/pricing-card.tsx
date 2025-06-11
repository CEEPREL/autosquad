"use client";

import React from "react";

type PricingTier = {
  icon?: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
};

const landingPageTiers: PricingTier[] = [
  {
    title: "1 Page Landing",
    subtitle: "Perfect for a single product or idea",
    price: "$80",
    features: [
      "Responsive design",
      "Optimized for conversions",
      "Basic animations",
      "Deployed & delivered in 3 days",
    ],
  },
  {
    title: "3 Page Landing",
    subtitle: "Multi-section launch site",
    price: "$150",
    features: [
      "3 core sections (home, about, contact)",
      "Form integrations (e.g. email capture)",
      "Performance optimized",
      "Deployed & delivered in 5 days",
    ],
  },
  {
    title: "5 Page Landing",
    subtitle: "Complete landing site experience",
    price: "$250",
    features: [
      "Up to 5 fully designed pages",
      "Custom animations & transitions",
      "SEO ready & analytics integration",
      "Deployed & delivered in 7 days",
    ],
  },
];

const projectTiers: PricingTier[] = [
  {
    icon: "",
    title: "Starter",
    subtitle: "Perfect for MVPs & prototypes",
    price: "From $1,500",
    features: [
      "4-8 weeks delivery",
      "1 platform (Web or Mobile)",
      "Basic features (auth, DB, API)",
      "Essential QA & deployment",
    ],
  },
  {
    icon: "",
    title: "Growth",
    subtitle: "Ideal for scaling products",
    price: "From $3,000",
    features: [
      "8–12 weeks delivery",
      "Web + Mobile platforms",
      "Advanced features (chat, payments, API)",
      "Testing + analytics integration",
    ],
  },
  {
    icon: "",
    title: "Enterprise",
    subtitle: "For scalable, complex systems",
    price: "Custom Quote",
    features: [
      "Dedicated PM & team",
      "Custom integrations",
      "Compliance (HIPAA, GDPR, etc.)",
      "SLA, 24/7 support & on-call engineering",
    ],
  },
];

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div className="flex flex-col border border-gray-200 bg-white shadow hover:shadow-md rounded-lg p-6 transition-all duration-300">
      {tier.icon && (
        <div className="text-4xl mb-4 text-[#b0460d]">{tier.icon}</div>
      )}
      <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{tier.subtitle}</p>
      <p className="text-2xl font-bold text-[#b0460d] mb-4">{tier.price}</p>
      <ul className="text-sm text-gray-700 space-y-2 flex-grow">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 bg-[#b0460d] text-white text-center rounded-md py-2 px-4 hover:bg-[#993b0c] transition"
      >
        Get Started
      </a>
    </div>
  );
};

export default function PricingPage() {
  return (
    <main className="bg-gray-50 px-6 text-gray-800">
      <section className="max-w-6xl mx-auto text-center  md:mb-20">
        {/* <h1 className="text-4xl font-bold mb-4">Pricing Section</h1>
        <p className="text-lg text-gray-600">
          Transparent. Flexible. Value-driven.
        </p> */}
      </section>

      {/* Landing Page Tiers */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-8 text-center text-[#b0460d]">
          Isolated Landing Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingPageTiers.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
      </section>

      {/* Full Project Tiers */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-[#b0460d]">
          Full Project Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectTiers.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
      </section>
    </main>
  );
}
