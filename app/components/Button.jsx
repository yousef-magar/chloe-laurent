import React from 'react';

const Button = ({ variant = 'black', buttonText = 'Book a call', className = '' }) => {
  const baseClasses = 'font-mont cursor-pointer text-white uppercase border-2 font-bold transition-all duration-200';
  
  const variants = {
    black: 'text-[10px] bg-neutral-900 border-neutral-950 hover:text-neutral-950 hover:bg-white h-[40px] w-[120px] ',
    transparent: 'text-[12px] bg-transparent border-white hover:bg-white hover:text-neutral-950 h-[48px] p-[12px] w-[180px]'
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {buttonText}
    </button>
  );
};

export default Button;
