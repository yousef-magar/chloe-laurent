import Image from 'next/image';
import React from 'react';
import BreakerBG from '../components/BreakerBG';
import BreakerContent from '../components/BreakerContent';
const Breaker = () => {
    return (
        <section className='h-[100svh] overflow-hidden  w-full mt-14 bg-black'>
            <div className='relative w-full h-full'>
                <BreakerBG />

                {/* Overlay */}
                <div className='absolute inset-0 z-10 bg-black/40' />
<BreakerContent/>
                
            </div>
        </section>
    );
};

export default Breaker;
