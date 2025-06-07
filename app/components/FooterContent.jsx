'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../components/Button';
import { FOOTER_LINKS } from '../constant';
const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};
const FooterContent = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            custom={0.1}
        >
            <hr className='h-1 p-8 text-gray-300' />
            <div className='flex flex-col lg:flex-row  items-start  gap-8 lg:gap-[8rem]'>
                <div className='flex flex-col gap-3 lg:gap-4 blur-[.4px]'>
                    <h2 className='font-playfair h1 lg:text-[70px] py-2  italic'>
                        <span className='block '>Let’s us </span>{' '}
                        <span className='block'>Collaborate</span>
                    </h2>

                    <Button
                        variant='black'
                        buttonText='book a call'
                        className='mb-14'
                    />
                </div>
                <div className='flex flex-row gap-14 xl:gap-[8rem] xl:px-[6.5rem] '>
                    <div className='lg:px-[8rem] xl:px-0'>
                        <h6 className='text-black font-mont text-xs font-bold tracking-[0.96px] leading-[24px] uppercase mb-5'>
                            Services
                        </h6>
                        <div className='flex flex-col gap-3 '>
                            {FOOTER_LINKS.services.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    className='text-gray-500 font-mont text-[10.5px]  tracking-[0.88px] leading-[24px] uppercase'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <h6 className='text-black font-mont text-xs font-bold tracking-[0.96px] leading-[24px] uppercase mb-5'>
                            Socials
                        </h6>
                        <div className='flex flex-col gap-3'>
                            {FOOTER_LINKS.social.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    className='text-gray-500 font-mont text-[10.5px]  tracking-[0.88px] leading-[24px] uppercase'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='hidden xl:block '>
                        <h6 className='text-black font-mont text-xs font-bold tracking-[0.96px] leading-[24px] uppercase mb-5'>
                            Transparency
                        </h6>
                        <div className='flex flex-col gap-3'>
                            {FOOTER_LINKS.transparency.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    className='text-gray-500 font-mont text-[10.5px] tracking-[0.88px] leading-[24px] uppercase'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-8 mx-auto text-center pt-14 xl:hidden'>
                {FOOTER_LINKS.transparency.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className='text-gray-500 font-mont text-[10.5px]  tracking-[0.88px] leading-[24px] uppercase text-center p-2'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <hr className='h-1 text-gray-300' />

            <p
                className='font-sen text-[14px] tracking-[-0.45px] leading-[34px]
     text-gray-500 max-w-[200px] sm:max-w-full text-center pt-16 pb-6 mx-auto'
            >
                Copyright {new Date().getFullYear()}. Framer template
                handcrafted by Biyified. Coded by{' '}
                <Link href='/' className='font-bold'>
                    Yousef Magar.
                </Link>
            </p>
        </motion.div>
    );
};

export default FooterContent;
