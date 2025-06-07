'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const BreakerBG = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: false,
        amount: 0.5,
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity: isInView ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
            }}
            className='absolute inset-0 z-0 bg-black'
        >
            <Image
                src={'/breaker.jpg'}
                alt='Breaker Image'
                fill
                className='object-cover object-center w-full h-full'
                priority
                sizes='100svh'
            />
        </motion.div>
    );
};

export default BreakerBG;
