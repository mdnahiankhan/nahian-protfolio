import React from 'react';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Blog from '../SharePage.jsx/Blog';
import MiddleBanner from './MiddleBanner';
import Services from './Services';
import TopBanner from './TopBanner';


const HomePage = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MiddleBanner></MiddleBanner>
            <Services></Services>
            <MyProjects></MyProjects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;