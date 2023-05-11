import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
  
    const handleNav = () => {
      setNav(!nav)
    }
  
    return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-white'>MY WEBSITE</h1>
        <ul className='hidden md:flex'>
          <a href="/home" className='p-4'>Home</a>
          <a href="/" className='p-4'>About</a>
          <a href="/" className='p-4'>Contacts</a>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-white m-8'>MY WEBSITE</h1>
          <ul className='uppercase p-4'>
            <a href="/" className='p-4 border-b border-gray-600'>Home</a>
            <a href="/" className='p-4 border-b border-gray-600'>About</a>
            <a href="/" className='p-4'>Contact</a>
          </ul>
        </div>
      </div>
    )
  }

export default Navbar