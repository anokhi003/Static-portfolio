import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SeeYouSoon: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="md:pt-28 px-7 flex flex-col  w-full items-center text-center text-white">
                <h1 className="font-playfair font-bold text-small-heading md:text-heading" data-aos="zomm-in" >
                    See you soon!
                </h1>
                <p className="font-alexandria text-small-subHeading md:text-subHeading font-normal mt-8" data-aos="zomm-in" data-aos-delay="100">
                    We hope to meet each other very soon.
                </p>
                <div className="flex-shrink-0 sm:mt-24 mt-10 w-[2px] h-20 rounded-[13px] bg-blue1" data-aos="fade-down" data-aos-delay="200"></div>
            </div>

        </>
    )
}

export default SeeYouSoon
