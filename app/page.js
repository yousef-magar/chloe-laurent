import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Breaker from './sections/Breaker';
import Testimony from './sections/Testimony';
import Portfolio from './sections/Portfolio';   
import  Clients from './sections/Clients';
import Footer from './sections/Footer';
const page = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <Hero />
            <AboutUs />
            <Breaker />
            <Testimony/>
            <Portfolio />
            <Clients />
            <Footer/>
        </div>
    );
};

export default page;
