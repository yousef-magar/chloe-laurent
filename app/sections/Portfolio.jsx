import Image from 'next/image';
import React from 'react';
import { PortfolioIMG } from '../constant';
import PortfolioCol from '../components/PortfolioCol';
import PortfolioContent from '../components/PortfolioContent';
const Portfolio = () => {
    // Break images into 3 roughly equal columns
    const columns = [[], [], []];

    PortfolioIMG.forEach((img, i) => {
        columns[i % 3].push(img);
    });

    return (
        <section className='container py-[4rem] lg:py-[6rem]'>
            <PortfolioContent />

            {/* Responsive Grid */}
            <PortfolioCol />
            
        </section>
    );
};

export default Portfolio;
