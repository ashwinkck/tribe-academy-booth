import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onAnimationEnd }) => {
  const [step, setStep] = useState(0); // Controls animation sequence

  const logoImageUrl = "https://thebrandstories.co.in/images/cryptologo.png"; 

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1500),
      setTimeout(() => setStep(4), 3200), 
      setTimeout(onAnimationEnd, 3900)   
    ];
    return () => timers.forEach(clearTimeout);
  }, [onAnimationEnd]);

  const getLineClasses = (lineStep) => {
    const baseClasses = "block transition-all duration-700 ease-out"; 
    if (step >= lineStep && step < 4) {
      return `${baseClasses} opacity-100 translate-y-0`;
    }
    return `${baseClasses} opacity-0 -translate-y-10`;
  };

  const introContainerClasses = () => {
    // This main container uses flex to center its direct child (the text content block).
    const baseClasses = "fixed inset-0 z-[1000] flex flex-col items-center justify-center text-white overflow-hidden relative bg-brand-black"; 
    if (step === 4) {
      return `${baseClasses} transition-opacity duration-700 ease-in opacity-0 pointer-events-none`; 
    }
    return `${baseClasses} opacity-100`; 
  };

  return (
    <div className={introContainerClasses()}>
      {/* Logo Image as an <img> tag, centered and behind text */}
      <img
        src={logoImageUrl}
        alt="Crypto Conclave Background Logo"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 max-w-[80%] max-h-[70%] w-auto h-auto object-contain" 
        style={{
          opacity: 0.2, // Opacity for the background image - SLIGHTLY INCREASED
        }}
      />
      
      {/* Text Content Layer */}
      {/* This div is centered by its parent. Margins on spans will control spacing. */}
      <div className="relative z-10 font-bold tracking-tight text-center p-4">
        <span className={`text-[8vw] sm:text-[7vw] md:text-[8xl] lg:text-9xl leading-none ${getLineClasses(1)}`}>
          Welcome to
        </span>
        <span className={`text-[10vw] sm:text-[9vw] md:text-9xl lg:text-[10rem] text-tribe-red-pink mt-12 sm:mt-16 md:mt-20 leading-none ${getLineClasses(2)}`}> {/* Increased margin-top significantly */}
          Crypto Conclave
        </span>
        <span className={`text-[8vw] sm:text-[7vw] md:text-[8xl] lg:text-9xl text-tribe-mustard mt-12 sm:mt-16 md:mt-20 leading-none ${getLineClasses(3)}`}> {/* Increased margin-top significantly */}
          2025
        </span>
      </div>
    </div>
  );
};

export default IntroAnimation;
