import React, { useEffect } from 'react'
import { Icons } from '../../assets/Svgs/index'
import Button from '../atoms/Button';
import Images from '../../assets/Images'
import AOS from 'aos';
import 'aos/dist/aos.css';
const EfficientSection: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Duration of the animation
            easing: 'ease-in-out'
        });
    }, []);
    return (
        <section className='container'>
            <div className="w-5/6 mx-auto bg-color-background rounded-xl flex flex-col lg:flex-row overflow-hidden  lg:py-24 lg:ps-10" data-aos="fade-up" >
                <div className="lg:w-2/5 w-full flex flex-col max-md:p-4 md:p-8">
                    <div className="flex items-end  h-full">
                        <div className="w-full ">
                            <div className="flex flex-col">
                                {/* Icon */}
                                <div className="flex justify-start items-start">
                                    <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-custom-gradient">
                                        <Icons.UpArrow />
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="font-semibold mt-6 text-start text-lg md:text-xl lg:text-2xl">
                                    Empower Your Workflow with Smart Extensions
                                </h3>
                                {/* Description */}
                                <p className="text-sm md:text-base text-start font-normal mt-4 leading-relaxed">
                                    Supercharge your productivity with a world of possibilities.
                                    Explore a curated library of extensions designed by the
                                    developer community to elevate your tools and streamline your
                                    tasks. From image editing to real-time translations, find
                                    everything you need to optimize your workflow—all in one place.
                                    Whether you're a tech enthusiast or a productivity pro, these
                                    extensions help you work smarter, not harder.
                                </p>
                                {/* Actions */}
                                <div className="mt-6 w-full">
                                    <Button
                                        btnText="Find Your Tools"
                                        btnStyle="BASE-TRANSPARENT"
                                        className="h-10 w-full !font-inter max-w-44 md:w-auto "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="lg:w-3/5 w-full lg:p-0 max-lg:pt-8 max-md:p-4 md:p-8 max-md:pt-0 md:pt-0  ">
                    <img
                        src={Images.Workflow}
                        alt="Precision"
                        className="w-full h-full object-cover object-left rounded-lg"
                    />
                </div>
            </div>

            <div className="w-5/6 mx-auto flex flex-col lg:flex-row text-white py-7 gap-4" >

                {/* Left Column */}
                <div className="xl:w-2/5 lg:w-3/5 w-full flex flex-col bg-white-10 rounded-xl " data-aos="fade-left" data-aos-delay="50">
                    <div className="flex justify-center h-full">
                        <div className="w-full md:p-8 p-5 flex flex-col gap-4">
                            {/* Icon */}
                            <div className='w-full items-start'>
                                <div className="flex justify-center items-center bg-custom-gradient w-16 h-16 rounded-2xl">
                                    <Icons.Efficient />
                                </div>

                            </div>

                            {/* Title */}
                            <h3 className="font-semibold mt-6 text-start text-lg md:text-xl lg:text-2xl">
                                Efficient, Fast, and Built for Precision
                            </h3>

                            {/* Description */}
                            <p className="text-base text-start font-normal mt-2">
                                As a Python developer, I craft solutions that are light, efficient,
                                and lightning-fast. My focus is on building seamless and optimized
                                code that integrates smoothly into any system. With each line of
                                code, I aim for performance and reliability—no compromises.
                            </p>

                            {/* Actions */}
                            <div className="w-full mt-auto">
                                <img src={Images.Precision} alt="Precision" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full shadow-lg rounded-xl bg-white-10 flex flex-col gap-4 " data-aos="fade-right" data-aos-delay="50">
                    <div className="md:p-8 p-5  text-white">
                        {/* Icon */}
                        <div className='w-full items-start'>
                            <div className="flex justify-center items-center bg-custom-gradient w-16 h-16 rounded-2xl">
                                <Icons.Innovative />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold mt-6 text-start text-lg md:text-xl lg:text-2xl">
                            Innovative Tools, Endless Possibilities
                        </h3>

                        {/* Description */}
                        <p className="text-base text-start font-normal mt-2">
                            With a commitment to continuous learning and exploration, I bring a growing toolkit of Python solutions and integrations to every project. From automation to data analysis and beyond, I leverage Python’s flexibility to build powerful, adaptable tools for any need.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto w-full">
                        <img src={Images.Tools} alt="Precision" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EfficientSection;
