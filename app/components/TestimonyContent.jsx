'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInLeft = {
    hidden: { opacity: 0, x: -100, y: -10 },
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
const TestimonyContent = () => {
    return (
        <div>
            <motion.div
                initial='hidden'
                whileInView={'visible'}
                viewport={{ once: false, amount: 0.5 }}
                className='container flex flex-col items-end gap-3 lg:gap-4 blur-[.4px]'
            >
                <motion.h6
                    variants={fadeInLeft}
                    custom={0.2}
                    className='uppercase text-xs font-medium font-mont tracking-[6.72px] leading-[18px]text-gray-950px lg:text-[10px] xl:text-[14px] px-1 '
                >
                    Testimony
                </motion.h6>

                <motion.h2 className='text-right h2'>
                    <motion.span variants={fadeInLeft} custom={0.4}>
                        Shared by
                    </motion.span>{' '}
                    <motion.span
                        variants={fadeInLeft}
                        custom={0.6}
                        className='uppercase'
                    >
                        PERSPECTIVE
                    </motion.span>{' '}
                    <motion.span variants={fadeInLeft} custom={0.8}>
                        by OUR CLIENTS
                    </motion.span>
                </motion.h2>
            </motion.div>
        </div>
    );
};

export default TestimonyContent;
