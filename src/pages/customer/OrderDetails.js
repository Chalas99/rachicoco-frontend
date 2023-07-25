import React from 'react'
import CustomerSideBar from '../../components/CustomerSideBar';
import CusNavBar from '../../components/CusNavBar';
import or1 from '../../images/5.jpg'
import or2 from '../../images/Products/Coco_Fibre_Pith.jpg'
import or3 from '../../images/Products/Husk_Chips.png'
import UserNavBar from '../../components/UserNavBar';

const OrderDetails = () => {
  return (
    <div>
    <div className='fixed top-0 w-full'>
        <UserNavBar/>
    </div>

    <div className="flex">
        <div className="h-screen sticky top-0 w-1/5 ">
            <CustomerSideBar/>    
        </div>
        <div className="mx-4 w-4/5 mt-20 ">
    
   
        <section className="bg-white :bg-gray-300">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl">Order #5361</h1>
                    
                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                        {/* <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span>view invoice</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a> */}
                    </div>
                </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <img className="object-cover w-22 h-22 " src={or1}></img>

                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <h1 className='font-bold text-gray-800'>Round husk pot</h1>
                            <h2>LKR 150.00 </h2>
                            <h2 className='text-left'>The "Round Husk Pot" is an eco-friendly coir product made from coconut husks, 
                                perfect for adding natural charm to your indoor or outdoor spaces.</h2>
                        </div>
                    </div>

                    <div>

                        <div className="mr-6 flex flex-col mt-5 space-y-4 items-end">
                            <h1>Quantity        </h1>
                            <h1>Pick Up date          </h1>
                            <h1>Status        </h1>
                            <h1>Total Amount        </h1>
                        </div>
                    </div>
                    <div>

                        <div className=" ml-6 flex flex-col items-start mt-5 space-y-4">
                            <h1>20 </h1>
                            <h1>March 20, 2023</h1>
                            <h1>prepaired</h1>
                            <h1>LKR 3000.00      </h1>
                        </div>
                    </div>

                    
                </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>
                
                <div className="mb-6 h-1 w-full bg-orange-100 bg-orange-400">
                    <div className="h-1 bg-primary bg-orange-400 width: 50%"></div>
                </div>
            </div>
            
        </section>
        <section className="bg-white :bg-gray-300">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl">Order #5362</h1>
                    
                    <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                        {/* <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <span>view invoice</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a> */}
                    </div>
                </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <img className="object-cover w-22 h-22 " src={or2}></img>

                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt- space-y-2">
                            <h1 className='font-bold text-gray-800'>Coco peat</h1>
                            <h2> 1 Kg </h2>
                            <h2>LKR 100.00 </h2>
                            <h2 className='text-left'>Coco peat
                            is a sustainable and moisture-retentive growing medium for healthy plant growth.</h2>
                        </div>
                    </div>

                    <div>

                        <div className="mr-6 flex flex-col mt-5 space-y-4 items-end">
                            <h1>Quantity        </h1>
                            <h1>Pick Up date          </h1>
                            <h1>Status        </h1>
                            <h1>Total Amount        </h1>
                        </div>
                    </div>
                    <div>

                        <div className=" ml-6 flex flex-col items-start mt-5 space-y-4">
                            <h1>10 Kg </h1>
                            <h1>April 20, 2023</h1>
                            <h1>prepaired</h1>
                            <h1>LKR 1000.00      </h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <img className="object-cover w-22 h-22 " src={or3}></img>

                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start  space-y-2">
                            <h1 className='font-bold text-gray-800'>Husk Chips 7mm</h1>
                            <h2>1 Kg </h2>
                            <h2>LKR 150.00 </h2>
                            <h2 className='text-left'> provide an eco-friendly and versatile material for
                             various horticultural and gardening applications.</h2>
                        </div>
                    </div>

                    <div>

                    <div className="mr-6 flex flex-col mt-5 space-y-4 items-end">
                        <h1>Quantity        </h1>
                        <h1>Pick Up date          </h1>
                        <h1>Status        </h1>
                        <h1>Total Amount        </h1>
                    </div>
                    </div>
                    <div>

                    <div className=" ml-6 flex flex-col items-start mt-5 space-y-4">
                        <h1>10 Kg </h1>
                        <h1>April 20, 2023</h1>
                        <h1>prepaired</h1>
                        <h1>LKR 1000.00      </h1>
                    </div>
                    </div>
                    </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>
                
                <div className="mb-6 h-1 w-full bg-orange-100 bg-orange-400">
                    <div className="h-1 bg-primary bg-orange-400 width: 50%"></div>
                </div>
            </div>
            
        </section>
        </div>
        </div>
    </div>
  )}

export default OrderDetails;