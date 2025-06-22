import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../BlogCard/BlogCard";
import { Navigation } from "swiper/modules";
import { Icons } from "../../../assets/Svgs";
import 'swiper/swiper-bundle.css';
import "./blogSlider.scss"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

type IBlogData = {
	imgPath: string;
	title: string;
	description: string;
}
type Props = {
	blogType?:string;
	blogList: IBlogData[];
	isNavigation: boolean;
}

const BlogSlider = ({ blogList, isNavigation, blogType }: Props) => {
    useEffect(() => {
        AOS.init();
    }, []);

    const gradientClasses = [
		'bg-pink-gradient',
		'bg-purple-gradient',
		'bg-violet-gradient',
	];



	return (<>
		{blogType && <Link to={`/all-blogs?topic=${blogType}`} className="flex gap-4 items-center" data-aos="fade-right">
                <h4 className="text-small-heading md:text-[50px] font-playfair font-bold self-start text-nowrap">{blogType} </h4>
				<Icons.SliderRightArrow color="#ffffff" className="mt-3 w-6"/>
			</Link>}
		<div className="relative blog-Swiper md:py-14 py-4">
		<Swiper
			modules={[Navigation]}
			spaceBetween={20}
			slidesPerView="auto"
			breakpoints={{
				640: {
					slidesPerView: 1, // Small screen: 1 card
				},
				768: {
					slidesPerView: 2, // Medium screen: 2 cards
				},
				1024: {
					slidesPerView: 3, // Large screen: 3 cards
				},
			}}
			navigation={{
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}}
			className="py-4 md:py-14"
		>
			{blogList?.map((data, index) => (
				<SwiperSlide key={index}>
					<BlogCard
						gradientClasses={gradientClasses[index % gradientClasses.length]}
						blogData={data}
					/>
				</SwiperSlide>
			))}
		</Swiper>

		{/* Custom navigation arrows */}
		{isNavigation && (<><div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-10 !left-[-40px]">
			<Icons.SliderLeftArrow className="!w-12" />
		</div>
			<div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-10 !right-[-40px]">
				<Icons.SliderRightArrow className="!w-12" />
			</div>
		</>)}
		</div>
			</>

	);
}

export default BlogSlider
