import React from 'react';
import Nav from '../components/Nav';
const Header = () => {
    return (
        <div className='fixed top-0 left-0 z-50 w-full mx-auto bg-white h-[68px] lg:h-[80px]'>
            <Nav />
        </div>
    );
};

export default Header;
