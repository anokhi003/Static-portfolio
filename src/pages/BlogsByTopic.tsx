import { blogList } from "../utils/contants";
import SeeYouSoon from "../components/SeeYouSoon/SeeYouSoon";
import BlogCard from "../components/Molecules/BlogCard/BlogCard";
import { Fragment } from "react/jsx-runtime";

type Props = {}

const BlogsByTopic = (_props: Props) => {
	return (
		<>
			<section className='container mt-[-30px]'>
				<div className="w-[85%] mx-auto ">
					<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center gap-4 md:py-14 py-4" data-aos="fade-in">
						{blogList.map((data, index) => {
							const gradientClasses = [
								'bg-pink-gradient',
								'bg-purple-gradient',
								'bg-violet-gradient',
							];
							return (<Fragment key={index}>
								    <BlogCard gradientClasses={gradientClasses[index % gradientClasses.length]} blogData={data} />
								</Fragment>)
						})}
					</div>
				</div>
			</section>
			<SeeYouSoon />
		</>
	)
}

export default BlogsByTopic;
