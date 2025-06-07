import Link from 'next/link';
import React from 'react';

const Logo = ({ className }) => {
    return (
        <Link
            href='/'
            className={`uppercase font-abel font-bold text-[1.2rem] lg:text-[1.5rem] text-gray-950 ${className}`}
        >
            Chloé Laurent
        </Link>
    );
};

export default Logo;
