import React from 'react';
import { FaLink } from 'react-icons/fa';
import image from "../assets/Tech-learn.jpg";
import image2 from "../assets/top11.png";
import image3 from "../assets/Service-Review-2.png";
const MyProjects = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-white'>My Projects</h1>
            <section className='grid lg:grid-cols-3 md:grid-cols-1 gap-6'>
                <div className="max-w-lg p-4 shadow-md dark:text-gray-100 rounded-xl transform transition-all hover:scale-110">
                    <div className="flex justify-between pb-4 border-bottom">
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-6">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Educational Website</h3>
                            <p className='text-xl font-bold'>Features:</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <p className='border rounded-full text-center'>React-js</p>
                                <p className='border rounded-full text-center'>React-Router</p>
                                <p className='border rounded-full text-center'>React-Recharts</p>
                            </div>
                            <div className='py-6 grid lg:grid-cols-3 md:grid-cols-1 '>
                                <a target="blank" href="https://cheerful-cajeta-241a6d.netlify.app/"><button className='btn btn-accent'><FaLink />Live Link</button></a>
                                <a target="blank" href="https://cheerful-cajeta-241a6d.netlify.app/"><button className='btn btn-accent'>GitHub Link</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md  dark:text-gray-100 rounded-xl transform transition-all hover:scale-110">
                    <div className="flex justify-between pb-4 border-bottom">
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image2} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Technology Learning</h3>
                            <p className='text-xl font-bold'>Features:</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <p className='border rounded-full text-center'>React-js</p>
                                <p className='border rounded-full text-center'>Context-Api</p>
                                <p className='border rounded-full text-center'>FireBase</p>
                                <p className='border rounded-full text-center'>MongoDB</p>
                                <p className='border rounded-full text-center'>Implement Jwt</p>
                                <p className='border rounded-full text-center'>Pdf-Downloader</p>
                                <p className='border rounded-full text-center'>Node-js</p>
                            </div>
                            <div className='py-6 grid lg:grid-cols-3 md:grid-cols-1 '>
                                <a target="blank" href="https://technology-learning-c4304.web.app/"><button className='btn btn-accent'><FaLink /> Live Link</button></a>
                                <a target="blank" href="https://github.com/mdnahiankhan/technology-learning-client"><button className='btn btn-accent'><FaLink /> clientside</button></a>
                                <a target="blank" href="https://github.com/mdnahiankhan/learning-website-server"><button className='btn btn-accent'><FaLink /> serverside</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg p-4 shadow-md dark:text-gray-100 rounded-xl transform transition-all hover:scale-110">
                    <div className="flex justify-between pb-4 border-bottom">
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image3} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Service Review Assignment</h3>
                            <p className='text-xl font-bold'>Features:</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <p className='border rounded-full text-center'>React-js</p>
                                <p className='border rounded-full text-center'>Context-Api</p>
                                <p className='border rounded-full text-center'>FireBase</p>
                                <p className='border rounded-full text-center'>MongoDB</p>
                                <p className='border rounded-full text-center'>Implement Jwt</p>
                                <p className='border rounded-full text-center'>Node-js</p>
                                <p className='border rounded-full text-center'>Express-js</p>
                            </div>
                            <div className='py-6 grid lg:grid-cols-3 md:grid-cols-1 '>
                                <a target="blank" href="https://service-review-5b372.web.app/"><button className='btn btn-accent'><FaLink /> Live Link</button></a>
                                <a target="blank" href="https://github.com/mdnahiankhan/service-review-client"><button className='btn btn-accent'><FaLink /> clientside</button></a>
                                <a target="blank" href="https://github.com/mdnahiankhan/service-review-server"><button className='btn btn-accent'><FaLink /> serverside</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProjects;