import Banner from "@/components/stand-alone/pricing/banner-comp";
import PricingPage from "@/components/stand-alone/pricing/pricing-card";
import React from "react";

function page() {
  return (
    <div>
      <Banner
        headline="Pricing Section"
        subtext="Transparent. Flexible. Value-driven."
        buttonLabel="Our Price List"
        imageSrc="/banner2.png"
        smImageSrc="/banner2_sm.png"
      />
      <PricingPage />
    </div>
  );
}

export default page;
