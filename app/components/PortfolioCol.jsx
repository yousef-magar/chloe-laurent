'use client';
import Image from 'next/image';
import { PortfolioIMG } from '../constant';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const PortfolioCol = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'start center'],
    });
    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
    const marginDown = useTransform(scrollYProgress, [0, 1], [64, 0]);

    
    // Break images into 3 roughly equal columns
    const columns = [[], [], []];

    PortfolioIMG.forEach((img, i) => {
        columns[i % 3].push(img);
    });

    return (
        <div>
            <motion.div
                ref={targetRef}
                style={{ marginTop }}
                className='grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2 xl:grid-cols-3'
            >
                {columns.map((colImages, colIndex) => (
                    <motion.div
                        style={{
                            marginTop:
                                colIndex === 1
                                    ? marginTop
                                    : marginDown
                        }}
                        key={colIndex}
                        className={`flex flex-col gap-8 ${
                            colIndex === 1 ? 'lg:mt-[10rem]' : ''
                        } ${colIndex === 2 ? 'lg:hidden xl:block' : ''}`}
                    >
                        {colImages.map((img, i) => (
                            <Image
                                key={i}
                                src={img}
                                width={280}
                                height={360}
                                alt={`Portfolio Image ${i + 1}`}
                                className='object-cover w-full h-auto'
                            />
                        ))}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default PortfolioCol;
