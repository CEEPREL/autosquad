import ActionComp from "@/components/stand-alone/action-giude";
import Banner from "@/components/stand-alone/banner-comp";
import CertificationAndExpertise from "@/components/stand-alone/certifications";
import VideoIllustration from "@/components/stand-alone/video-illustration";

export default function Home() {
  return (
    <div className="w-full">
      <Banner
        headline="Build. Launch. Scale."
        subtext="Build, launch, and scale your app with our flexible development team, while eliminating the risk and hassle of hiring, managing, and maintaining an in-house engineers."
        buttonLabel="Get Free Consultation"
        imageSrc="/banner_lg.png"
        smImageSrc="/banner_sm.png"
      />
      <ActionComp />
      <VideoIllustration />
      <CertificationAndExpertise />
    </div>
  );
}
