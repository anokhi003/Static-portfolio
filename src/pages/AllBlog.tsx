import { blogList } from "../utils/contants";
import BlogSlider from "../components/Molecules/BlogSlider/BlogSlider";
import SeeYouSoon from "../components/SeeYouSoon/SeeYouSoon";

type Props = {}

const AllBlogs = (_props: Props) => {
	return (
		<>
			<section className='container mt-[-30px]'>
				<div className="w-[85%] mx-auto ">
					<BlogSlider blogType="Python" blogList={blogList} isNavigation={true} />

					<BlogSlider blogType="Django" blogList={blogList} isNavigation={true} />

					<BlogSlider blogType="AI" blogList={blogList} isNavigation={true} />

					<BlogSlider blogType="Web Design" blogList={blogList} isNavigation={true} />
				</div>
			</section>
			<SeeYouSoon />
		</>
	)
}

export default AllBlogs;
