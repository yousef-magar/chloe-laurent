'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '../constant';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const Nav = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname;

    // Toggle dropdown for desktop/mobile
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className='container relative z-20 items-center justify-between px-8 py-5 mx-auto xl:flex'>
            {/* Logo and Hamburger */}
            <div className='flex items-center justify-between w-full xl:w-auto'>
                <Logo className='blur-[.4px]' />

                {/* Hamburger Icon */}
                <button
                    aria-label='Toggle menu'
                    className='xl:hidden relative w-[25px] h-[28px] flex flex-col justify-center items-end gap-[8px] cursor-pointer blur-[.4px]'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span
                        className={`block h-[2px] bg-black rounded transition-transform duration-500 ease-in-out  ${
                            menuOpen
                                ? 'w-full origin-center rotate-45 translate-y-[14px]'
                                : 'w-[12px]'
                        }`}
                    />
                    <span
                        className={`block h-[2px] bg-black rounded transition-all duration-500 ease-in-out ${
                            menuOpen ? 'w-0 opacity-0' : 'w-full opacity-100'
                        }`}
                    />
                    <span
                        className={`block h-[2px] bg-black rounded transition-transform duration-500 ease-in-out  ${
                            menuOpen
                                ? 'w-full origin-center -rotate-45 -translate-y-[6px]'
                                : 'w-[12px]'
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={` fixed left-1/2 -translate-1/2 top-[17.2rem] w-full bg-white z-10 px-[7px] pb-[4rem] pt-[2rem] xl:hidden max-w-[1024px] transition-all duration-500 ease-in-out overflow-hidden ${
                    menuOpen
                        ? 'opacity-100 max-h-[1400px] pointer-events-auto'
                        : 'opacity-0 max-h-0 pointer-events-none'
                }`}
            >
                <div className='container flex flex-col gap-6'>
                    {navLinks.map((link, index) =>
                        link.path ? (
                            <Link
                                key={index}
                                href={link.path}
                                className={`txt-nav pb-[2px] w-fit border-b-2 ${
                                    currentPath === link.path
                                        ? 'border-black'
                                        : 'border-transparent'
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </Link>
                        ) : link.subItems ? (
                            <div key={index} className='w-full'>
                                <div
                                    onClick={() => toggleDropdown(index)}
                                    className='cursor-pointer txt-nav pb-[2px] w-fit flex items-center gap-1 select-none'
                                >
                                    {link.title}
                                    {activeDropdown === index ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                </div>

                                <div
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        activeDropdown === index
                                            ? 'opacity-100 max-h-[1500px] mt-2'
                                            : 'opacity-0 max-h-0 mt-0'
                                    }`}
                                >
                                    <div className='flex flex-col gap-6 py-4'>
                                        <div className='flex flex-col px-8 w-fit'>
                                            {link.subItems.map(
                                                (sub, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={sub.path}
                                                        className='txt-nav text-[14px] not-last:mb-[18px]'
                                                        onClick={() =>
                                                            setMenuOpen(false)
                                                        }
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className='flex flex-row w-full gap-6 px-8 sm:gap-12'>
                                        {link.subItems2?.map(
                                            (sub2, sub2Index) => (
                                                <Link
                                                    key={sub2Index}
                                                    href={sub2.path}
                                                    className='group block'
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
                                                >
                                                    <Image
                                                        src={sub2.src}
                                                        alt={sub2.title}
                                                        width={365}
                                                        height={200}
                                                        className='w-[180px] h-[60px] sm:w-[300px] sm:h-[200px] object-cover mb-2 transition-transform group-hover:scale-[1.01]'
                                                    />
                                                    <span className='text-xs font-medium text-gray-950 uppercase font-mont tracking-[0.5px] hover:text-gray-950 pb-[2px] my-2 inline-block txt-nav w-fit text-[14px]'>
                                                        {sub2.title}
                                                    </span>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className='relative flex-row items-center justify-center hidden gap-10 xl:flex'>
                {navLinks.map((link, index) =>
                    link.path ? (
                        <Link
                            key={index}
                            href={link.path}
                            className={`txt-nav blur-[0.6px] pb-[2px] cursor-pointer border-b-2 ${
                                currentPath === link.path
                                    ? 'border-black'
                                    : 'border-transparent'
                            }`}
                        >
                            {link.title}
                        </Link>
                    ) : link.subItems ? (
                        <div key={index} className='relative'>
                            <button
                                onClick={() => toggleDropdown(index)}
                                className='cursor-pointer blur-[0.6px] relative pb-[2px] w-full txt-nav flex items-center gap-1 select-none bg-transparent border-none underline underline-offset-7 '
                                type='button'
                                aria-expanded={activeDropdown === index}
                                aria-controls={`submenu-${index}`}
                            >
                                {link.title}
                                {activeDropdown === index ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                            </button>

                            <div
                                id={`submenu-${index}`}
                                className={`fixed py-14 bg-white w-full left-0 top-[5rem] z-10 transition-all duration-[400ms] ease-in-out overflow-hidden ${
                                    activeDropdown === index
                                        ? 'opacity-100 min-h-[20rem] pointer-events-auto'
                                        : 'opacity-0 max-h-0 pointer-events-none'
                                }`}
                            >
                                <div className='absolute bg-white w-[45rem] left-1/2 -translate-x-1/2 z-10 flex items-start gap-20 px-8'>
                                    <div className='flex flex-col w-[10rem]'>
                                        {link.subItems.map((sub, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={sub.path}
                                                className='blur-[0.5px] pb-[2px] my-2 inline-block w-fit txt-nav '
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className='flex flex-row w-full gap-16'>
                                        {link.subItems2.map(
                                            (sub2, sub2Index) => (
                                                <Link
                                                    key={sub2Index}
                                                    href={sub2.path}
                                                    className='group block'
                                                >
                                                    <Image
                                                        src={sub2.src}
                                                        alt={sub2.title}
                                                        width={365}
                                                        height={200}
                                                        className='w-[12rem] h-[150px] object-cover mb-2 transition-transform group-hover:scale-[1.01]'
                                                    />
                                                    <span className="text-xs font-medium blur-[0.5px] text-gray-950 uppercase font-mont tracking-[0.5px] relative transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-[1px] after:bg-gray-950 hover:text-gray-950 after:transition-all after:duration-300 pb-[2px] my-2 inline-block w-fit">
                                                        {sub2.title}
                                                    </span>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                )}
            </div>

            {/* CTA Button */}
            <Button
                variant='black'
                buttonText='BUY TEMPLATE'
                className='hidden xl:inline-block blur-[0.55px]'
            />
        </div>
    );
};

export default Nav;
