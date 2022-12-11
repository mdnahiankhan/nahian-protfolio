import React from 'react';
import image from '../assets/remove-bg (2).png';
import { FaRegNewspaper } from 'react-icons/fa'
const TopBanner = () => {
    return (
        <div>
            <section className=" dark:text-gray-100 mt-10" >
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left " data-aos="zoom-in-down"
                        data-aos-easing="ease-in-cubic"
                        data-aos-duration="2000"
                    >
                        <h1 className="text-5xl font-serif font-bold leading-none sm:text-6xl">Hellow!
                            <span className="dark:text-white"> I'm
                                <br />
                                MD. NAHIAN</span>
                        </h1>
                        <p className="mt-6 mb-6 text-3xl font-serif sm:mb-12">Junior Web Developer
                        </p>
                        <p className=' mb-4 font-serif font-bold text-xl'>This is My official protfolio website to shows all details and work experience of web development.</p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a target='blank' download="https://drive.google.com/file/d/16ClQcDnC0aYy9ku-vliwT959-wQnjFtk/view?usp=sharing" href="https://drive.google.com/file/d/16ClQcDnC0aYy9ku-vliwT959-wQnjFtk/view?usp=sharing"
                            >
                                <button className='px-8 py-3 btn btn-outline text-lg font-semibold rounded-xl btn-accent dark:text-gray-900 ' >Get My Resume
                                    <FaRegNewspaper />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0  h-76 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " data-aos="fade-up"
                        data-aos-easing="ease-in-cubic"
                        data-aos-duration="2000"
                    >
                        <div className="w-96 rounded-full ">
                            <img src={image} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBanner;