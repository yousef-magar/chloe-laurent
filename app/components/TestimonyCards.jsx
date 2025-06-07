'use client';

import React, { useRef } from 'react';
import { testimonials } from '../constant';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const SlideCard = ({ testimonial }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.6 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100, y: 10 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className='py-6 first:pl-10 not-first:px-3.5 mb-6 bg-white max-w-[460px]'
        >
            <div className='flex items-center gap-4 mb-4'>
                <Image
                    width={470}
                    height={220}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='object-cover'
                />
            </div>
            <div>
                <h3 className='text-gray-950 font-playfair text-[26px] tracking-[-1.26px] leading-[48px] capitalize'>
                    {testimonial.name}
                </h3>
                <p className='text-xs font-medium font-mont tracking-[6.72px] leading-[18px] text-gray-950 uppercase mb-4'>
                    {testimonial.town}
                </p>
            </div>
            <p className='text-base text-gray-500 font-sen leading-[28px] max-w-[305px]'>
                {testimonial.description}
            </p>
        </motion.div>
    );
};

const TestimonyCards = () => {
    return (
        <div className='w-full'>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={1}
                breakpoints={{
                    320: { slidesPerView: 0.9 },
                    640: { slidesPerView: 0.9 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.2 },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <SlideCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonyCards;
