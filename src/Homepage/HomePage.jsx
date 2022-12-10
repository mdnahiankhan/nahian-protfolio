import React from 'react';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
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
            <Contact></Contact>
        </div>
    );
};

export default HomePage;