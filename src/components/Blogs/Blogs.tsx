import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogSlider from '../Molecules/BlogSlider/BlogSlider';
import { blogList } from '../../utils/contants';
import { Link } from 'react-router-dom';

const Blogs: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='container py-10'>
            <div className="flex flex-col items-stretch">
                {/* Top Section */}
                <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                    <div className="flex flex-col flex-grow w-full md:w-3/4 text-white" data-aos="fade-left">
                        <h2 className="text-small-heading md:text-heading font-playfair font-bold self-start text-nowrap">
                            Blogs
                        </h2>
                        <p className="text-small-subHeading md:text-subHeading text-left font-alexandria font-normal  self-start md:max-w-full">
                            Insights, Tips, and Python Solutions from a Developer’s Desk
                        </p>
                    </div>
                    <div className="w-fit text-start relative font-alexandria text-body-1 text-white font-bold uppercase tracking-[2.1px] leading-[1.9]" data-aos="fade-right">
                        <Link to={"/blogs"} className="sm:min-w-[280px] text-center bg-blue2 rounded-full md:p-5 px-5 py-3 shadow-button-shadow">
                            <span>VIEW MORE</span>
                        </Link>
                        <div className="bg-white absolute  top-[50%] -right-4 rounded-md w-8 h-[2px]"></div>
                    </div>
                </div>
                {/* Columns Section */}
              <BlogSlider isNavigation={false} blogList={blogList}/>
            </div>


        </section>
    )
}

export default Blogs
