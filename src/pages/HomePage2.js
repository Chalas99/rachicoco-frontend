import React from 'react'
import { Link } from "react-router-dom";

import NavBar from '../components/NavBar'

import Banner1 from '../images/Banner1.jpg'
import Banner2 from '../images/Banner2.jpg'
import Banner3 from '../images/Banner3.jpg'
import Wlogo from '../images/logo.jpg'

import CocoPith from '../images/Products/Coco_Fibre_Pith.jpg'
import HuskChips from '../images/Products/Husk_Chips.png'
import GrowBlock from '../images/Products/Grow_Block.jpeg'
import GrowBrick from '../images/Products/Grow_Brick.jpeg'
import GrowBag from '../images/Products/Grow_Bag.jpeg'


const HomePage2 = () => {
  return (
    <>
      <NavBar/>

      <div
          className="relative text-center text-white font-popins bg-cover bg-center h-screen brightness-50"
          style={{ backgroundImage: `url(${Banner1})` }}
      ></div>

      <div className="z-50 fixed bottom-0 right-0 m-8">
        <a href="https://wa.me/94761431782">
            <img className='pl-6 w-20' src={Wlogo} alt='Chat with us'></img>
        </a>
        <span className='text-white font-bold'>Chat with us</span>
      </div>
      
      <div className="mx-4 my-8">
        <h1 className="text-center text-5xl text-green-500 tracking-widest font-bold px-4">
          About CHACHÅ COCO
        </h1>
      </div>

      <div className="grid justify-items-center mx-4 my-8">
        <p className="text-xl w-2/3 font-semibold">
          We proudly introduce you the Sri Lankan company that is 
          doing a production of high-quality coco peat and husk chips under the registered brand name CHACHÅ COCO. 
          Our products are high quality because our raw materials such as coco peat and coconut husk chips are obtained from the first coconut triangle in Sri Lanka.
        </p>
        <p className="mt-4 text-xl w-2/3 font-semibold">
        Kurunegala,	Puttalam	and
        Gampaha districts are the first coconut triangle and it's consisting the largest coconut plantations in Sri Lanka. Kurunegala district consisting
        550,958	acres,	Puttalam
        districts	consisting	115,895
        acres and Gampaha district consisting 106,576 acres' coconut plantations. 
        In these three districts annual coconut harvest is 5000 million nuts. Our factory is situated in middle of Kurunegala District Kuliyapitiya and regularly we are rich with high quality cocopeat and husk chips.
        </p>
        <a href="./AboutUs">
            <button className=" mt-8 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
              READ MORE
            </button>
          </a>
      </div>

      <hr className="w-3/4 mx-auto bg-gray-900" />

      <div className="container mx-auto p-4 mt-12">
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

      <hr className="w-3/4 mx-auto bg-gray-900" />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        <div className="flex flex-col">
          <div className="flex-1">
          <img className='h-full' src={Banner2} alt='Coco Peat'></img>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 bg-gray-800 text-start p-16">
              <div className="xl:text-5xl lg:text-5xl text-3xl text-white font-medium">
                Our Products
              </div>
              <p className='md:text-sm lg:text-base font-semibold text-white mt-12'> 
              At 'CHACHA COCO', we pride ourselves on being a leading exporter of high-quality coco peat products. 
              With a commitment to sustainability and superior quality, we offer a range of coco peat solutions that cater to 
              the diverse needs of our global clientele. Our dedication to customer satisfaction, reliable sourcing, and eco-friendly 
              practices sets us apart as a trusted partner in the coco peat industry.
              </p>

            <a className='mt-12' href="./Products">
              <button className=" mt-16 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
                READ MORE
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <hr className="mt-8 w-3/4 mx-auto bg-gray-900" />

      <div className="dark:bg-green-700 mb-36 mt-16">
        <div className="pb-20">
          <div
            className="mx-auto h-96 bg-cover bg-center bg-fixed h-96"
            style={{ backgroundImage: `url(${Banner3})` }}
          >
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <div className="mt-20">
                  <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                  CHACHÅ COCO
                  </h2>
                </div>
                <div className="mt-6 mx-2 md:mx-0 text-center">
                  <p className="lg:text-lg md:text-base font-bold leading-6 text-sm text-white">
                    3 years, consistent quality and
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-green-800">
                  100+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-green-600">
                  Happy Customers
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-green-800">
                  50+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-green-600">
                  Orders Completed
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-green-800">
                  300
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-green-600">
                  Dedicated Members
                </p>
              </div>
              <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-green-800">
                  25+
                </h2>
                <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-green-600">
                  Positive Reveiws
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      
    </>
  )
}

export default HomePage2