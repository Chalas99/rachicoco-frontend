import React, {useEffect} from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import NavBar from '../../components/NavBar'
import AdminService from '../../routes/adminServiceRoutes';
import { useState } from 'react';

const AdminDash = () => {

  const [customerCount, setCustomerCount] = useState();
  const [orderCount, setOrderCount] = useState();

  useEffect(() => {
    AdminService.
    getCustomerCount()
    .then((res) =>{
      setCustomerCount(res.data.count.customerCount);
    })
  }, []);

  useEffect(() => {
    AdminService.
    getOrderCount()
    .then((res) =>{
      setOrderCount(res.data.count.orderCount);
    })
  }, []);

  return (
    <>
        <div className='fixed top-0 w-full'>
        <NavBar/>
        </div>
    
        <div className="flex">
            <div className="h-screen sticky top-0 w-1/5 ">
                <AdminSideBar/>    
            </div>
            <div className="mx-4 w-4/5 mt-20 ">
            <div className="container px-6 py-10 mx-auto">
              <div className="w-full bg-gray-300 h-10">
                <p className="ml-5 mt-4 p-2 font-medium">Good Day Admin!</p>
              </div>

              <div className='flex'>
              <div className="mt-8 mx-16">
                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Total Buyers
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                  {customerCount}
                  </p>
                </div>
              </div>

              <div className="mt-8 mx-16">
                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Order Count
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                  {orderCount}
                  </p>
                </div>
              </div>
            </div>  

            </div>
            </div>
        </div>
    </>
  )
}

export default AdminDash