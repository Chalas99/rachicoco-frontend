import React, {useState} from 'react'
import { Link } from "react-router-dom";

import NavBar from '../components/NavBar'

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.png'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/10.jpg'
import img8 from '../images/9.jpg'
import usimg from '../images/kal2.jpg'
import UserNavBar from '../components/UserNavBar';



const Gallery = () => {
  
  const [isOpen, setIsOpen] = useState(false);
    const [isProfOpen, setProfOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOutsideClick = () => {
      setIsOpen(false);
      setProfOpen(false);
    };

    const handleProfileClick = () => {
      setProfOpen(!isProfOpen);
    };

  return (
    <>
      <UserNavBar/>
        <div className ="flex overflow-x-auto border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
          <div>
          <button  onClick={handleClick} className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
              Profile
          </button>

          {isOpen && (
            <div onClick={handleOutsideClick}>
            <section className="bg-white ">
      
                <div className='flex w-full '>
                  <div className='flex w-1/3'>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img1} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
    
                  <div className='flex w-1/3'>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img2} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
    
                  <div className='flex w-1/3'>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img3} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
                  
                  </div>
    
                  <div className='flex mt-16'>
                  <div className='flex w-1/3'>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img4} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
    
                  <div className='flex w-1/3'>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img2} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
    
                  <div className='flex w-1/3 '>
                  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img2} />
                    </div>
    
                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
    
                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                  </div>
                  </div>
                  
                  </div>
                    
              
     
        </section>
        </div>
          )}
          </div>

          <button  onClick={handleClick} className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
              Account
          </button>

          <button  onClick={handleClick} className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
              Notification
          </button>
        </div>
     
    
      
    </>
  )
}

export default Gallery