type IBlogData = {
    imgPath: string;
    title: string;
    description: string;
}
type Props = {
    gradientClasses: string;
    blogData: IBlogData;
}

const BlogCard = ({gradientClasses, blogData }: Props) => {
    return (
        <div
            className={`md:p-7 p-4 rounded-xl font-inter ${gradientClasses}`}
        >
            <img
                src={blogData.imgPath}
                alt="Sample"
                className="rounded-3xl w-full"
            />
            <h2 className="text-left text-white font-semibold break-all text-small-subHeading md:text-small-heading mt-7" dangerouslySetInnerHTML={{ __html: blogData.title }}></h2>
            <p className="text-white text-left opacity-80 font-normal md:text-small-subHeading text-body-1 mt-5">
                {blogData.description}
            </p>
        </div>
    )
}

export default BlogCard
