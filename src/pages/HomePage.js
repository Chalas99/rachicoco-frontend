import React from 'react'
import { Link } from 'react-router-dom'

import LOGO from '../images/logo.jpg'
import tree from '../images/tree.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.png'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/10.jpg'
import img8 from '../images/9.jpg'
import usimg from '../images/kal2.jpg'
import Banner1 from '../images/Banner1.jpg'
import about from '../images/logo.jpg'


import CocoPith from '../images/Products/Coco_Fibre_Pith.jpg'
import HuskChips from '../images/Products/Husk_Chips.png'
import GrowBrick from '../images/14.jpg'
import GrowBag from '../images/15.webp'
import UserNavBar from '../components/UserNavBar'

const HomePage = () => {
  return (
    <dic className ='bg-gray-300'> 
       <div className='fixed top-0 w-full'>
        <UserNavBar/>
       </div>
       <div className="w-full mt-16 bg-center bg-cover h-[38rem]" style={{ backgroundImage: `url(${tree})` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">New <span className="text-orange-600">Coir</span> Product Collection</h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-orange-500 focus:outline-none focus:bg-orange-500"><a href='Login2'>Order now</a></button>
          </div>
        </div>
      </div>

 <div className="flex mt-5 bg-gray-400">
        <div className="flex w-1/3  flex items-center flex-col">
          <div className="flex-1">
          <img className='h-full' src={about}></img>
          </div>
        </div>
        <div className="flex w-2/3  flex items-center flex-col">
          <div className="flex-1 bg-gray-800 text-start p-16">
              <div className="xl:text-5xl lg:text-5xl text-3xl text-white font-medium">
                About Us
              </div>
              <p className='md:text-sm lg:text-base font-semibold text-white mt-12'> 
              Rochicoco is a company that manufactures products using coconut husks. We mainly focused on making
               coconut chips for export to the global market. Also, we supply the products to the local market as
                per the demand. In our, production process we made four types of chips according to international standards. 
              </p>

            <a className='mt-12' href="./Products">
              <button className=" mt-16 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
                READ MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    {/* <section className="bg-white ">
       
        <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Rachicoco Products</h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img1} alt="" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Husk chips in between 0mm-6mm</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">4S</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img2} />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Husk Chips in between 12mm-19mm</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">2S</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img3} />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Husk Chips 7mm</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">7C</span>
                    </div>
                </div>

                <div className="w-full max-w-xs text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img4} alt='' />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Husk Chips 10mm</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">10C</span>
                    </div>
                </div>
            </div>
            </div>
    </section> */}
    <section className='bg-gray-300'>
    <div className="container mx-auto p-4 mt-12 ">
        <div className="flex flex-row flex-wrap -mx-2">
          <div className="w-full md:w-1/3 h-64 md:h-auto mb-4 px-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <Link
              className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
              to="/"
              title="Link"
              style={{
                backgroundImage: `url(${CocoPith})`,
              }}
            ></Link>
          </div>
          <div className="w-full md:w-2/3 mb-4 px-2">
            <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
              <div className=" flex flex-row sm:w-1/2 md:w-full h-fu48 xl:h-64 sm:mb-0 md:mb-4 px-2">
                <div className="w-1/2 sm:w-1/3 h-48 md:h-full mb-4 sm:mb-0 px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Link
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    to="/"
                    title="Link"
                    style={{
                      backgroundImage: `url(${HuskChips})`,
                    }}
                  ></Link>
                </div>
                <div className="w-1/2 sm:w-1/3 h-48 md:h-full mb-4 sm:mb-0 px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <Link
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    to="/"
                    title="Link"
                    style={{
                      backgroundImage: `url(${GrowBag})`,
                    }}
                  ></Link>
                </div>
                <div className="w-1/2 sm:w-1/3 h-48 md:h-full px-2">
                  <Link
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
                    to="/"
                    title="Link"
                    style={{
                      backgroundImage: `url(${GrowBrick})`,
                    }}
                  ></Link>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-4 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <Link
                  className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                  to="/"
                  title="Link"
                  style={{
                    backgroundImage: `url(${Banner1})`,
                  }}
                ></Link>
              </div>
            </div>
          </div>
        </div>

        <a href='./Gallery'>
          <button type="button" className="font-bold mt-4 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600">
            Go to Gallery
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </button>
        </a>
      </div>
      </section>
      <section className=" bg-gray-500">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="text-4xl text-blue-500 dark:text-white">Contact us</p>
            <p className="mt-3 text-gray-500 dark:text-gray-200">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                    <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-orange-500">hello@merakiui.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-orange-500">717/1,Moonamale, Panadaragama</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-orange-500">+94704309780</p>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.191104205678!2d80.24188987465473!3d7.554130092459632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32fc2692354df%3A0xb0882dd7164ad009!2sRACHICOCO!5e0!3m2!1sen!2slk!4v1688109413668!5m2!1sen!2slk"></iframe>
            </div>
        </div>
    </div>
</section>

    <footer className="bg-white dark:bg-gray-900">
        <div className="container text-sm p-6 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <a href="#">
                            <img className="w-auto h-7 ml-40" src={LOGO} alt=""></img>
                        </a>

                        <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Coir for a sustainable future. Join us in creating a greener world, one coir product at a time</p>

                        <div className="flex mt-6 max-w-sm mx-auto">
                            <a href="#"
                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                aria-label="Reddit">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 
                                        12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217
                                        13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                    </path>
                                </svg>
                            </a>
                        
                            <a href="#"
                                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                    </path>
                                </svg>
                            </a>
                        
                        </div>
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Coco chips</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Coco peat products</a>
                            <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Coco fiber product</a>
                        </div>

                        <div>
                            <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+94704309780</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">rachicoco@email.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"></hr>

            <div>
                <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
            </div>
        </div>
    </footer>
</dic>
  )
}

export default HomePage