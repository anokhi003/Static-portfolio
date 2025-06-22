import './Excellence.scss';
import { Icons } from '../../assets/Svgs/index'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Excellence = () => {
	useEffect(() => {
        AOS.init();
    }, []);
	const services = [
		{
			id: 1,
			title: "Full service",
			description:
				"From concept to deployment, I’m here to support every stage of your project. Whether you need backend architecture, data processing, or workflow automation, I provide end-to-end Python solutions to bring your vision to life.",
			altText: "24/7 Support",
			Image: <Icons.Settings />,
			background:"bg-pink-gradient"
		},
		{
			id: 2,
			title: "Deliver Value",
			description:
				"Delivering real, measurable value is at the heart of my work. Each project is crafted with care, ensuring efficiency, performance, and maximum return on investment for every client.",
			altText: "One Stop Shop",
			Image: <Icons.Value />,
			background:"bg-purple-gradient"

		},
		{
			id: 3,
			title: "Partners",
			description:
				"My clients are more than just clients—they’re partners. I collaborate closely to understand your unique goals, providing customized solutions that align with your objectives and drive lasting success.",
			altText: "Certified Professionals",
			Image: <Icons.Partners />,
			background:"bg-violet-gradient"

		},
		{
			id: 4,
			title: "Integrity",
			description:
				"Integrity is the foundation of my approach. I believe in transparency, honesty, and commitment to quality, building trust through consistent and reliable results that you can count on.",
			altText: "Optimized Solutions",
			Image: <Icons.Integrity />,
			background:"bg-green-gradient"

		},
	];

	return (
		<section className="container my-10">
			<div className='w-5/6 mx-auto'>
			<h1 className="text-small-heading md:text-5xl font-playfair text-center mb-12 max-w-[750px] mx-auto" data-aos="zoom-in">
				Driven by Excellence, Focused on Your Success
			</h1>
				<div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
					{services.map((service, i:number) => (
						<div
							key={service.id}
							className={`service-card md:p-6 p-3 hover:bg-custom-gradient hover:shadow-lg rounded-lg transition-shadow`}
						data-aos="fade-up" data-aos-delay={100 * (i+1)}
						>
							<div
								className={`${service.background} md:w-24 md:h-24 w-20 h-20 p-2 flex items-center justify-center rounded-xl mx-auto`}
							>
								{service.Image}
							</div>
							<h4 className="mt-8 text-center text-body-2 font-semibold">
								{service.title}
							</h4>
							<p className="mt-6 text-sm font-normal text-center">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>

		</section>
	);
};

export default Excellence;
