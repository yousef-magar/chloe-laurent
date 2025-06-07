'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay,
        },
    }),
};

const ClientContent = () => {
    return (
        <div className='container flex flex-col items-end gap-3 lg:gap-4 blur-[.4px] mb-[5rem]'>
            <motion.h6
                variants={fadeInLeftVariant}
                custom={0.2}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.5 }}
                className='uppercase text-xs font-medium font-mont tracking-[6.72px] leading-[18px]text-gray-950px lg:text-[10px] xl:text-[14px] px-1 '
            >
                CLIENTS
            </motion.h6>

            <motion.h2 className='text-right h2'>
                <motion.span
                    variants={fadeInLeftVariant}
                    custom={0.4}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <span className='uppercase'>TRUSTED</span>{' '}
                    <span className='lowercase'>by</span>{' '}
                </motion.span>

                <motion.span
                    variants={fadeInLeftVariant}
                    custom={0.6}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <span className='inline-block uppercase'>CLIENTS</span>{' '}
                    <span className='inline-block lowercase'>across</span>{' '}
                </motion.span>

                <motion.span
                    variants={fadeInLeftVariant}
                    custom={0.8}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                    className='uppercase'
                >
                    INDUSTRIES
                </motion.span>
            </motion.h2>
        </div>
    );
};

export default ClientContent;
