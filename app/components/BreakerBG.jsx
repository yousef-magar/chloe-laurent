'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const BreakerBG = () => {
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
            style={{ scale, opacity }}viewport={{ once: false, amount: 0.5 }}
            className='absolute inset-0 z-0 bg-black'
        >
            
            <Image
                src={'/breaker.jpg'}
                alt='Breaker Image'
                fill
                className='object-cover object-center w-full h-full'
                priority
                sizes='120svw'
            />
        </motion.div>
    );
};

export default BreakerBG;
