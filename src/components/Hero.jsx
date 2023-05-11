import React from 'react';
import Typed from 'react-typed';
import heroImage from '../assets/thughunter.jpg'; // import your image here

const Hero = () => {
  return (
    <div className='relative h-screen'>
      <div
        className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center'
      >
        <img src={heroImage} alt='Hero' className='w-full h-full object-cover opacity-50' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <p className='text-green-500'>I'm a corporate thug. That's the best way to be.</p>
          <h1 className='uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>
            Oh, you've got an ass on you alright.
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-white'>Gimme the</p>
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-white'
              strings={['Rump Shaker', 'Thug Shaker']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='md-text-2xl text-xl font-bold text-gray-300'>
            Gimme the thug shaker, dude, shake your ass!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;