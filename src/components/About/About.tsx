import { useEffect, useState } from 'react';
import Images from '../../assets/Images';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const images = [Images.Sid1, Images.Sid2, Images.Sid3, Images.Sid4]
    return (
        <section className='container'>
            <div className="w-5/6 mx-auto flex flex-col lg:flex-row  text-white ">
                {/* Left Column */}
                <div className="lg:w-2/5 w-full flex flex-col justify-end text-start  lg:items-start" data-aos="fade-left">
                    <h2 className="text-small-heading md:text-heading font-playfair font-bold self-start pb-6 text-nowrap">
                        About Me
                    </h2>
                    <p className="text-body-1 font-normal">
                        <span className="text-body-2 font-normal">Your Python Problem Solver</span>
                        <br />
                        <br />
                        I’m Siddharth Bhalsod, a passionate Python Developer with a knack for
                        turning complex challenges into simple, efficient solutions. My journey in
                        software development is driven by curiosity and a love for creating
                        impactful digital experiences. Whether it’s developing backend systems,
                        automating workflows, or building innovative tools, I’m dedicated to
                        crafting code that makes a difference.
                        <br />
                        <br />
                        <span className="font-semibold">Based in Amsterdam, Netherlands</span>
                        <br />
                        <br />
                        I’m part of a close-knit team of four, each of us bringing our unique skills
                        to the table. Together, we’re ready to tackle the toughest projects,
                        offering solutions that empower our clients to reach new heights. My mission
                        is to ensure that every client I work with is not only satisfied but inspired
                        by the potential of technology.
                    </p>
                    <div className="w-fit text-start relative font-alexandria text-body-1 mt-9 text-white font-bold uppercase tracking-[2.1px] leading-[1.9]">
                        {/* Button */}
                        <button className="sm:min-w-[280px] text-center bg-blue2 rounded-full md:p-5 px-5 py-3 shadow-button-shadow">
                            <span>Let's Connect</span>
                        </button>

                        {/* Divider */}
                        <div className="bg-white absolute  top-[50%] -right-4 rounded-md w-8 h-[2px]"></div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full mt-9 md:ps-16 relative flex flex-wrap" data-aos="fade-right">
                    {/* Image Grid with Overlay */}
                    <div className="absolute z-10 -left-[10%] lg:left-0 top-[30%]  rounded-lg lg:px-5 lg:py-6 p-4 bg-white text-black text-center font-bold hidden md:block">
                        <p>Siddharth Bhalsod, <span className='text-[#00C9E0]'>SOFTWARE DEVELOPER</span></p>
                    </div>
                    {/* Dots Image as Background or Attached */}
                    <div className="absolute -right-[40px] h-full hidden sm:flex  items-center">
                        <img
                            src={Images.Dots} // Replace with actual path to the dots image

                            alt="Dots"
                            className="object-cover w-full h-80 transition-all duration-300"
                        />
                    </div>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative max-w-[50%] w-[395px] aspect-square flex overflow-hidden transition-all duration-300"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <img
                                src={image}
                                alt={`Sid${index + 1}`}
                                className="object-cover object-center w-full aspect-square transition-all duration-300"
                            />

                            <div
                                className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${activeIndex === index || activeIndex === null ? 'opacity-0' : 'opacity-60'}`}
                            ></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>

    );
};

export default AboutMe;
