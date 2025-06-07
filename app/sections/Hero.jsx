import React from 'react';
import HeroSlider from '../components/HeroSlider';
import HeroHeading from '../components/HeroHeading';
const Hero = () => {
    return (
        <section className='pt-20 mx-auto sm:container lg:pt-36'>
            <HeroHeading/>

            <div className=''>
                <HeroSlider/>
             </div>
        </section>
    );
};

export default Hero;
