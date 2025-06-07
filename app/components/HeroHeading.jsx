'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1], // cubic bezier = smoother
            delay,
        },
    }),
};

const HeroHeading = () => {
    return (
        <motion.h1
            className='text-gray-950 blur-[.46px] lg:blur-[0.45px] text-center relative z-10'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
        >
            <motion.span
                variants={fadeUpVariant}
                custom={0.2}
                className='italic h1 lg:text-[75px]'
            >
                Award&nbsp;winning
            </motion.span>

            <motion.span
                variants={fadeUpVariant}
                custom={0.4}
                className='pb-1 uppercase h1'
            >
                photography
            </motion.span>

            <motion.span
                variants={fadeUpVariant}
                custom={0.6}
                className='pb-1 h1'
            >
                <span className='italic lowercase'>&</span>{' '}
                <span className='uppercase'>art studio</span>
            </motion.span>
        </motion.h1>
    );
};

export default HeroHeading;
