import Banner from "@/components/stand-alone/training-hub/banner-comp";
import BookCategories from "@/components/stand-alone/training-hub/book-categories";
import React from "react";

function page() {
  return (
    <div>
      <Banner
        headline="We curate a diverse collection of tech books to fuel your passion and drive innovation."
        subtext=""
        buttonLabel="Browse Our Collection"
        imageSrc="/banner2.png"
        smImageSrc="/banner_sm.png"
      />
      <BookCategories />
    </div>
  );
}

export default page;
