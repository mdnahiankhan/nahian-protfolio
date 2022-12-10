import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='text-center mt-10 '>
            <h1 className='text-3xl font-bold text-violet-400'>Find me on</h1>
            <p>If you have some times you can connect with me.</p>
            <div className='flex justify-center'>
                <a className='p-4 text-4xl' href="https://github.com/mdnahiankhan"><FaGithub /></a>
                <a className='p-4 text-4xl' href="https://www.linkedin.com/in/md-nahian-9778b9225/"><FaLinkedin /></a>
                <a className='p-4 text-4xl' href="##"><FaTwitter /></a>
            </div>
        </div>
    );
};

export default Footer;