import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { heroSectionDetails } from "../../utils/contants";

type HeroDetails = {
  path: string;
  title: string;
  subTitle: string;
  description: string;
  subTitleClass: string;
};

const Hero = () => {
  const { pathname } = useLocation();
  const [details, setDetails] = useState<HeroDetails>(heroSectionDetails[0]);

  useEffect(() => {
    const topic = getQueryParam("topic");
    if (topic) {
      const findDetails = heroSectionDetails[0];
      findDetails.title = topic;
      setDetails(findDetails);
    } else {
      const findDetails = heroSectionDetails?.find(
        (ele) => ele.path === pathname
      ) as HeroDetails;
      setDetails(findDetails);
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
      });
    }
  }, [pathname]);

  function getQueryParam(param: string): string | null {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
  }

  return (
    <div className="hero-section z-1 relative">
      <Navbar />
      {/* banner text */}
      <div className="flex justify-center items-center flex-col md:pt-16 md:pb-[200px] pt-8 pb-[115px]">
        <h1
          className="font-normal lg:leading-topHeading leading-heading lg:text-top-heading md:text-heading  sm:text-[56px] text-[36px] font-playfair"
          data-aos="fade-up"
        >
          {details?.title}
        </h1>
        <p
          className={`md:text-body-2 px-8 text-base font-bold font-advent uppercase ${details?.subTitleClass}`}
        >
          {details?.subTitle}
        </p>
        <p className="p-8 md:text-[17px] text-sm leading-6 font-normal pt-5 max-w-[700px] font-inter">
          {details?.description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
