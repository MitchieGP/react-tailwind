import React from 'react';

/*
flex justify-center items-center h-screen bg-gray-100
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website!</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur nulla a massa mattis, sed suscipit urna laoreet. Fusce dapibus aliquam lorem id commodo. </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600">Get Started</button>
      </div>
 */
const Home = () => {
  return (
    <div className="relative h-screen">
        <div className='absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold mb-4 text-black" id='head'>Welcome to My Website!</h1>
            <button 
                className='rounded-full
                border
                border-black
                border-opacity-50
                border-width-4
                bg-white
                font-semibold 
                text-xl
                text-gray 
                px-8 
                py-3
                shadow-xl
                shadow-black-500/90
                hover:bg-black
                hover:text-white
                hover:-translate-y-0.5
                motion-reduce:hover:translate-y-0 
                motion-reduce:transition-none
                transition duration-300 ease-in-out'
                >
                Get to Know Me!
            </button>
        </div>
    </div>
  );
};

export default Home;
