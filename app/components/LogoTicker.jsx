'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ClientLOGO } from '../constant';

const LogoTicker = ({className}) => {
    return (
        <div
            className={`'w-full overflow-hidden ${className ? className : ''}`}
        >
            <motion.div
                className='flex items-center justify-center w-max'
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {[...ClientLOGO, ...ClientLOGO, ...ClientLOGO].map(
                    (logo, index) => (
                        <div
                            key={index}
                            className='flex-shrink-0 w-[105px] h-[70px] mx-[4.5rem] lg:mx-24 xl::mx-28 items-center justify-center '
                        >
                            <Image
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                width={105}
                                height={60}
                                className='object-contain p-1 transition duration-300 ease-in-out opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
                            />
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
};

export default LogoTicker;
