'use client';
import React from 'react';
import { motion } from 'framer-motion';

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

const PortfolioContent = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            className='flex flex-col gap-3 lg:gap-4 blur-[.4px]'
        >
            <motion.h6
                variants={fadeInRight}
                custom={0.2}
                className='text-xs font-medium font-mont tracking-[6.72px] leading-[18px] text-gray-950 lg:text-[10px] xl:text-[14px] px-1'
            >
                PORTFOLIO
            </motion.h6>

            <motion.h2 className='h2'>
                <motion.span variants={fadeInRight} custom={0.4}>
                    <span>We have</span>{' '}
                    <span className='uppercase'>PICKED</span>
                </motion.span>{' '}
                <motion.span variants={fadeInRight} custom={0.6}>
                    <span>these</span>{' '}
                    <span className='uppercase'>PROJECTS</span>
                </motion.span>{' '}
                <motion.span variants={fadeInRight} custom={0.8}>
                    <span>to</span> <span className='uppercase'>DELIGHT</span>{' '}
                    <span>you</span>
                </motion.span>
            </motion.h2>
        </motion.div>
    );
};

export default PortfolioContent;
