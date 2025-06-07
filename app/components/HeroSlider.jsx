'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { fashionEvents } from '../constant';

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change slide every 4 seconds automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === fashionEvents.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    const currentEvent = fashionEvents[currentIndex];

    // Handle Prev button click
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? fashionEvents.length - 1 : prevIndex - 1
        );
    };

    // Handle Next button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === fashionEvents.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.8,
                },
            }}
            viewport={{ once: false }}
            className='z-0 mx-auto mt-8 sm:container  xl:-mt-[22px] lg:-mt-[18px]'
        >
            {/* Image Slider Container */}
            <div className='relative overflow-hidden'>
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`, // Translate slides horizontally
                    }}
                >
                    {/* Mapping over all fashion events */}
                    {fashionEvents.map((event, index) => (
                        <div
                            key={index}
                            className=' relative min-w-full h-[500px] lg:h-[520px] xl:h-[600px]  '
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                width={1200}
                                height={600}
                                priority
                                className='object-cover w-full h-full transition-all duration-200'
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content and Controls */}
            <div className='hidden lg:flex items-start justify-between w-full xl:max-w-[1180px] lg:max-w-[975px] mx-auto mt-6'>
                {/* Left Side - Event Title, Date, Description */}
                <div className='flex items-start gap-6'>
                    <div className='flex flex-col'>
                        <h6 className='text-[12px] font-semibold tracking-[0.96px] leading-[24px] font-mont text-gray-950 uppercase'>
                            {currentEvent.title}
                        </h6>
                        <span className='text-gray-950 font-sen text-[12px] tracking-[1.32px] leading-[24px]'>
                            {currentEvent.date}
                        </span>
                    </div>

                    <p className='text-gray-500 font-sen text-[14px] tracking-[-0.35px] leading-[24px] max-w-[16rem]'>
                        {currentEvent.description}
                    </p>
                </div>

                {/* Right Side - Controls (Previous/Next & Slide Counter) */}
                <div className='flex-row items-center hidden gap-4 text-2xl cursor-pointer select-none xl:flex text-gray-950'>
                    {/* Prev Arrow */}
                    <SlArrowLeft
                        onClick={handlePrev}
                        className={`hover:text-gray-950 ${
                            currentIndex === 0 ? 'opacity-50' : ''
                        }`}
                    />
                    {/* Slide Counter */}
                    <span className='text-base font-semibold'>
                        {currentIndex + 1} / {fashionEvents.length}
                    </span>
                    {/* Next Arrow */}
                    <SlArrowRight
                        onClick={handleNext}
                        className={`hover:text-gray-950 ${
                            currentIndex === 4 ? 'opacity-50' : ''
                        }`}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSlider;
