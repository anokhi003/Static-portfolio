import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import "./hero.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from "react-router-dom";
import { heroSectionDetails } from "../../utils/contants";

type HeroDetails = { path: string; title: string; subTitle: string; description: string; subTitleClass: string; }

const Hero = () => {
	const {pathname} = useLocation()
	const [details, setDetails] = useState<HeroDetails>(heroSectionDetails[0]);
	useEffect(() => {
		const findDetails = heroSectionDetails?.find(ele => ele.path === pathname) as HeroDetails;
		setDetails(findDetails)
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
		});
	}, []);
	return (
		<div className='hero-section z-1 relative'>
			<Navbar/>
				{/* banner text */}
			<div className="flex justify-center items-center flex-col md:pt-16 md:pb-[200px] pt-8 pb-[100px]">
				<h1 className="font-normal lg:leading-topHeading leading-heading lg:text-top-heading md:text-heading  sm:text-[56px] text-[36px] font-playfair" data-aos="fade-up">{details.title}</h1>
				<p className={`md:text-body-2 text-base font-bold font-advent uppercase ${details.subTitleClass}`} data-aos="zoom-in" data-aos-delay="200">{details.subTitle}</p>
				<p className="sm:p-12 p-8 md:text-[17px] text-sm leading-6 font-normal pt-5 max-w-[700px] font-inter " data-aos="zoom-in" data-aos-delay="400">{details.description}</p>
			</div> 

		</div>
	)
}

export default Hero;
