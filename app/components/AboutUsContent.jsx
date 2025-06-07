'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100, y: -10 },
    visible: (delay) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};

const AboutUsContent = () => {
    return (
        <div>
            <motion.div
                className='flex flex-col gap-3 lg:gap-4 blur-[.4px]'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.h6
                    className='text-xs font-medium font-mont tracking-[6.72px] leading-[18px] text-gray-950 lg:text-[10px] xl:text-[14px] px-1'
                    variants={fadeInRight}
                    custom={0.2}
                >
                    ABOUT US
                </motion.h6>

                <motion.h2 className='h2'>
                    <motion.span
                        variants={fadeInRight}
                        custom={0.4}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {' '}
                        More than
                    </motion.span>{' '}
                    <motion.span
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeInRight}
                        custom={0.6}
                    >
                        <span className='uppercase'>PICTURES </span>{' '}
                        <span className='italic lowercase'>we</span>
                    </motion.span>{' '}
                    <motion.span
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeInRight}
                        custom={0.8}
                    >
                        <span className='italic lowercase'> make</span>{' '}
                        <span className='uppercase'>FINE ART</span>
                    </motion.span>
                </motion.h2>
            </motion.div>

            <motion.h3
                className='text-[28px] font-playfair tracking-[-1.2px] leading-[38px] text-gray-950 max-w-[196px] sm:max-w-[442.5px]
          lg:text-[37px] lg:tracking-[-1.6px] lg:leading-[52px] lg:max-w-[755px]    
          xl:text-[46px] xl:max-w-[884px] text-start ml-auto 
          mt-10 blur-[0.4px] lg:blur-[0.55px] lg:mt-12'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
                custom={0.1}
            >
                Chloé Laurent is exquisitely designed, radiating elegance at
                every pixel.
            </motion.h3>

            <motion.p
                className='text-gray-500 font-sen text-[16px] tracking-[-0.45px] leading-[28px] lg:leading-[26px] lg:ml-auto lg:text-[14px] lg:max-w-[755px] wrap-break-word xl:text-[18px] xl:leading-[38px] xl:max-w-[883.5px]
          mt-6'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
                variants={fadeInUp}
                custom={0.12}
            >
                Driven by a passion for excellence, our agency is dedicated to
                providing personalized services tailored to your needs. We
                collaborate closely with our clients to ensure that every
                project is a true reflection of their vision and style,
                resulting in unforgettable outcomes.
            </motion.p>
        </div>
    );
};

export default AboutUsContent;
