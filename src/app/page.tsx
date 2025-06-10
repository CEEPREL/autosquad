import ActionComp from "@/components/stand-alone/home/action-giude";
import Banner from "@/components/stand-alone/home/banner-comp";
import CertificationAndExpertise from "@/components/stand-alone/home/certifications";
import VideoIllustration from "@/components/stand-alone/home/video-illustration";
import VideoIllustration2 from "@/components/stand-alone/home/video-illustration-2";

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
      <VideoIllustration2 />
    </div>
  );
}
