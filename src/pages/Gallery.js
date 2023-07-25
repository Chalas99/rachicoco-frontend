import React, {useState,useEffect } from 'react'
import { Link } from "react-router-dom";

import NavBar from '../components/NavBar'

import img1 from '../images/img1.jpg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.png'
import img7 from '../images/coco peat product/briquettes.jpg'
import img8 from '../images/coco peat product/cocohuskchipbales.jpg'
import img9 from '../images/coco peat product/coconutpeatgrowbags.jpg'
import img10 from '../images/coco peat product/cocopeatbriquettes.jpg'
import img11 from '../images/coco peat product/cocopeatdisc.jpg'
import img12 from '../images/coco peat product/compressed5kg.jpg'
import img13 from '../images/coco fibre product/5.jpg'
import img14 from '../images/coco fibre product/10.jpg'
import img15 from '../images/coco fibre product/bristle fiber.jpg'
import img16 from '../images/coco fibre product/coir bale fibre.jpg'
import img17 from '../images/coco fibre product/coirgeotextiles.jpg'
import img18 from '../images/coco fibre product/coirweedmat.jpg'



import UserNavBar from '../components/UserNavBar';
import AdminService from '../routes/adminServiceRoutes';



const Gallery = () => {
  
  const [products, setProducts] = useState();
    
    useEffect(() => {
          AdminService
            .getAllProducts()
            .then((res) => {
              setProducts(res.data.products);
            })
            .catch((error) => {
              console.log(error);
            });

    }, []);

    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabClick = (tabNumber) => {
      setActiveTab(tabNumber);
    };

  const [isOpen, setIsOpen] = useState(false);
    const [isProfOpen, setProfOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOutsideClick = () => {
      setIsOpen(false);
      setProfOpen(false);
    };

  return (
    <>
      <UserNavBar/>

      <div>
        <div className='font-semibold'>
          <button
            className={activeTab === 1 ? 'active-tab' : 'tab h-10 px-4 mb-6 text-sm text-center text-orange-600 bg-transparent border-b-2 border-Orange-500 sm:text-base dark:border-orange-400 dark:text-orange-400 whitespace-nowrap focus:outline-none' } 
            onClick={() => handleTabClick(1)}
            
          >
            Coco Chips
          </button>
          <button
            className={activeTab === 2 ? 'active-tab' : 'tab h-10 px-4 mb-6 text-sm text-center text-orange-600 bg-transparent border-b-2 border-Orange-500 sm:text-base dark:border-orange-400 dark:text-orange-400 whitespace-nowrap focus:outline-none'}
            onClick={() => handleTabClick(2)}
          >
            Coco peat products
          </button>
          <button
            className={activeTab === 3 ? 'active-tab' : 'tab h-10 px-4 mb-6 text-sm text-center text-orange-600 bg-transparent border-b-2 border-Orange-500 sm:text-base dark:border-orange-400 dark:text-orange-400 whitespace-nowrap focus:outline-none'}
            onClick={() => handleTabClick(3)}
          >
            Coco fiber product
          </button>
        </div>

      <div>
        {activeTab === 1 && 
        <p>
           <section className="bg-white ">
      
              <div className='flex flex-wrap justify-center gap-12 mt-8 xl:mt-12 '>
              {products?.map((product) => (
                <div className='flex w-1/3' key={product.productID}>
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                  <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img1} />
                  </div>

                  <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                      <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{product.Name}</h3>

                      <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                          <span class="font-bold text-gray-800 dark:text-gray-200">{product.price}</span>
                          <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                      </div>
                  </div>
                </div>
                </div>
                ))} 
               
                
                </div>
                  
            

            </section>
        </p>}

        {activeTab === 2 && 
        <p>
          <section className="bg-white ">
      
            <div className='flex w-full '>
              <div className='flex w-1/3'>
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img7} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Briquettes </h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 300.00</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
              </div>
              </div>

              <div className='flex w-1/3'>
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img8} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Coco husk chip bales</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 400.00</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
              </div>
              </div>

              <div className='flex w-1/3'>
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img9} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Coconut peat grow bags</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 600.00</span>
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
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img10} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Coco peat briquettes</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 350.00</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
              </div>
              </div>

              <div className='flex w-1/3'>
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img11} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Coco peat disc</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 150.00</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
              </div>
              </div>

              <div className='flex w-1/3 '>
              <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img12} />
                </div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"> Compressed coco peat 5kg</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">LKR 400.00</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                    </div>
                </div>
              </div>
              </div>
              
              </div>
                
          

          </section>
          
        </p>}

        {activeTab === 3 && 
        <p>
            <section className="bg-white ">
      
              <div className='flex w-full '>
                <div className='flex w-1/3'>
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                  <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img13} />
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
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img14} />
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
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img15} />
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
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img16} />
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
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img17} />
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
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img18} />
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
        </p>}
      </div>
    </div>
   
      
    </>
  )
}

export default Gallery