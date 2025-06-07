import React from 'react';
import { ClientLOGO } from '../constant';
import Image from 'next/image';
import LogoTicker from '../components/LogoTicker';
import ClientContent from '../components/ClientContent';
const Clients = () => {
    return (
        <section className=' py-[4rem] '>
            

            <ClientContent/>
            <LogoTicker/>
            <LogoTicker className='pl-[24rem] mt-[6.5rem]'/>
            

            
        </section>
    );
};

export default Clients;
