import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  /*
  const title = "This is a Title";
  const number = "1000";
  const link = "https://www.google.com";
  */

  return (

    <div>
      <Navbar />
      <Home />
    </div>

   /*
   <div className='content'>
    <h1>{title}</h1>
    <p>The number variable contains the value of {number}</p>
    <p>{ 10 }</p>
    <p>{ "Hello World!" }</p>
    <p>{ [1,2,3,4,5] }</p>
    <p>{ Math.random() * 10 }</p>

    <a href={link} target="_blank" rel="noreferrer">Google Site</a>
   </div>
   */
  );
}

export default App;
