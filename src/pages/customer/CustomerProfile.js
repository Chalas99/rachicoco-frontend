import React from 'react'
import CustomerSideBar from '../../components/CustomerSideBar';
import UserNavBar from '../../components/UserNavBar';


const CustomerProfile = () => {
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
                      <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl">User Info</h1>
                    
                  </div>
                  
                  <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>

                      <div>

                          <div className="flex flex-col items-start mt-5 space-y-2">
                              <h1 className='font-bold text-gray-800'>Username</h1>
                              <h2>LKR 150.00 </h2>
                              <h2 className='text-left'>The "Round Husk Pot" is an eco-friendly coir product made from coconut husks, 
                                  perfect for adding natural charm to your indoor or outdoor spaces.</h2>
                          </div>
                      </div> 
                  
                  
                  <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>
                  <div>

                          <div className="flex flex-col items-start mt-5 space-y-2">
                              <h1 className='font-bold text-gray-800'>Username</h1>
                              <h2>LKR 150.00 </h2>
                              <h2 className='text-left'>The "Round Husk Pot" is an eco-friendly coir product made from coconut husks, 
                                  perfect for adding natural charm to your indoor or outdoor spaces.</h2>
                          </div>
                      </div> 
               </div>
             
              </section>
        </div>
    </div>
    </div>
    
  )
}

export default CustomerProfile