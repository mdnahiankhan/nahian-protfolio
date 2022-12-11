import React from 'react';
import { FaLink } from 'react-icons/fa';
import image from "../assets/Tech-learn.jpg";
import image2 from "../assets/top11.png";
import image3 from "../assets/Service-Review-2.png";

const AllProjects = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-white'>My Projects</h1>
            <section className='grid lg:grid-cols-3 md:grid-cols-1 gap-6 font-serif' data-aos="fade-up-left"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="2000"
            >
                <div className="max-w-lg p-4 shadow-md dark:text-gray-100 rounded-xl transform transition-all hover:scale-110">
                    <div className="flex justify-between pb-4 border-bottom">
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-6">
                            <h3 className="text-xl font-semibold dark:text-violet-400">Educational Website</h3>
                            <p className='text-xl font-bold'>About:</p>
                            <div className=''>
                                <li>This website Basically base on Question and Answer for prammer.Which very Helpful to Junior Developer .Firts i create a react app and code with it.</li>
                                <li>This website Has so many question which grow you to know primary knowledge about programing.So I have to add some question and MCQ on Link Using React Router.This element is very helpfull its make your life easy.</li>

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
                            <p className='text-xl font-bold'>About:</p>
                            <div>
                                <li>This is Technology learning website. This website i add some important course.Which Now a days very important to know for every students .</li>
                                <li>Hopefully this website use experience should be good .Because I use some same button color and write text large. Which can helps to read ans understand the purpose of this course.</li>
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
                            <div>
                                <li>New experienced at privacy.Try to exposed jwt token to implement the website privacy .Using react tostify trying to use react-photo-view but can't implement it.</li>
                                <li>
                                    This projects I used to create a photographer website which helps the user to get a great experience.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProjects;