import React, { useEffect } from "react"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import "./layout.scss";
import { Icons } from '../../assets/Svgs/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
type Props = {
	children: React.ReactNode
}

const Layout = (props: Props) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out', 
		});
	}, []);

	return (
		<div className="">
			<Hero />
			<div className="other-sections relative">
			<div className="w-full absolute top-[-40px] ">
				<div className="container flex justify-between max-sm:px-2">
					<div className="md:visible  transform flex flex-col items-center space-y-6 " data-aos="fade-up" data-aos-delay="200">
						{/* Vertical Line */}
						<span className='-rotate-90 uppercase'>scroll</span>
						<div className="h-20 w-[2px] bg-line-blue-gradient"></div>
						</div>
						<div className="md:visible transform flex flex-col items-center space-y-6 w-[60px]" data-aos="fade-up" data-aos-delay="200">
							{/* Icons */}
							<Link to={"/"} ><Icons.Twitter /></Link>
							<Link to={"/"} ><Icons.Instagram /></Link>
							<Link to={"/"} ><Icons.Facebook /></Link>
						</div>
					</div>
				</div>
				{props.children}
				<Footer />
				</div>
		</div>
	)
}

export default Layout
