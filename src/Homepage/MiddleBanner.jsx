import React from 'react';
import developer from '../assets/programmer image.webp';

const MiddleBanner = () => {
    return (
        <div className='mt-10 rounded-xl font-serif text-white' >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={developer} alt="" className="max-w-sm  shadow-2xl transform transition-all hover:scale-105" />
                    <div>
                        <h1 className="text-5xl font-bold">Let me introduce Myself</h1>
                        <p className="py-2">It's a very greateful journey in my life to learn web development. Firstly web development is not an easy task to know about the core concept about Programming language</p>
                        <p className="py-2">As a web developer I am quite expert in <span className='text-violet-300 py-2'>HTML,CSS,JAVASCRIPT,REACT-JS,NODE-JS,MonogoDB</span> </p>
                        <p className="py-2">I am always try to learn new and expert myself day by day to take a challeging career in my life.</p>
                        <p className="py-2">I create some great projects using new Technologies and Products</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiddleBanner;