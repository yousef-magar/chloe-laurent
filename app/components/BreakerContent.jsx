'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Button from '../components/Button';

import { delay, motion, useScroll, useTransform } from 'framer-motion';
const BreakerContent = () => {
    const ref = useRef(null);

    const scaleScroll = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const opacityScroll = useScroll({
        target: ref,
        offset: ['start end', 'start center'],
    });

    const scale = useTransform(scaleScroll.scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(opacityScroll.scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                scale,
            }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.4 }}
            className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-8'
        >
            <h5 className='text-xs font-medium font-mont tracking-[6.72px] leading-[18px] text-gray-950px sm:text-[12px] lg:text-[10px] xl:text-[14px] text-white'>
                LET’S TALK
            </h5>

            <p className='font-playfair text-[28px] tracking-[-1.2px] leading-[38px] text-white max-w-[280px]  sm:max-w-[614px] lg:text-[37px] lg:tracking-[-1.6px] lg:leading-[52px]  text-center mt-4'>
                Elegant designs, fine craftsmanship, and attention to detail,
                which can elevate the visual appeal and professionalism of your
                brand
            </p>

            <Button variant='transparent' buttonText='book a call' />
        </motion.div>
    );
};

export default BreakerContent;
