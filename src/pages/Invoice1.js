import React, {useState, useEffect} from 'react'
import LOGO from '../images/logo.jpg'
import StoreService from '../routes/storeServiceRoutes';
import { useParams } from "react-router-dom";

const Invoice1 = () => {

    const [Orders, SetOrders] = useState();
    const {id}= useParams();

    useEffect(() => {
        console.log(id);
        StoreService
            .viewOrder(id)
            .then ((res) => {
                SetOrders(res.data.data);
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


  return (
    <div>
        <section className="bg-gray-50 dark:bg-slate-900">
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
            <div className="sm:w-11/12 lg:w-3/4 mx-auto">
            <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
                <div className="flex justify-between">
                <img className="w-auto h-16 sm:h-16" src={LOGO} alt=""></img>
                
                <div className="text-right">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice #</h2>
                    <span className="mt-1 block text-gray-500">3682303</span>

                    <section className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                    717/1,Moonamale, Panadaragama
                    </section>
                </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
              
                <div className=" text-left" >
                    <h3 className="text-lg  font-semibold text-gray-800 dark:text-gray-200">Bill to:</h3>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200"> </h3>
                    <section className="mt-2 not-italic text-gray-500">
                    </section>
                </div>
               
                <div className="sm:text-right space-y-2">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Invoice date:</dt>
                        <dd className="col-span-2 text-gray-500">03/10/2023</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due date:</dt>
                        <dd className="col-span-2 text-gray-500">03/11/2023</dd>
                    </dl>
                    </div>
                </div>
                </div>

                <div className="mt-6">
                <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                    <div className="hidden sm:grid sm:grid-cols-5">
                    <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                    <div className="text-left text-xs font-medium text-gray-500 uppercase">Qty</div>
                    <div className="text-left text-xs font-medium text-gray-500 uppercase">Rate</div>
                    <div className="text-right text-xs font-medium text-gray-500 uppercase">Amount</div>
                    </div>

                    <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
                    
             
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                        <p className="font-medium text-gray-800 dark:text-gray-200"></p>
                       
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                        <p className="text-gray-800 dark:text-gray-200"></p>
                       
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                        <p className="text-gray-800 dark:text-gray-200"></p>
                       
                    </div>
                    <div>
                        <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                        <p className="sm:text-right text-gray-800 dark:text-gray-200">$500</p>
                    </div>
                    </div>
             


                </div>
                </div>

                <div className="mt-8 flex sm:justify-end">
                <div className="w-full max-w-2xl sm:text-right space-y-2">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                        <dd className="col-span-2 text-gray-500">$2750.00</dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                        <dd className="col-span-2 text-gray-500">$2750.00</dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Tax:</dt>
                        <dd className="col-span-2 text-gray-500">$39.00</dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Amount paid:</dt>
                        <dd className="col-span-2 text-gray-500">$2789.00</dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3">
                        <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due balance:</dt>
                        <dd className="col-span-2 text-gray-500">$0.00</dd>
                    </dl>
                    </div>
                </div>
                </div>

                <div className="mt-8 sm:mt-12">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
                <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
                <div className="mt-2">
                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">rachicoco@email.com</p>
                    <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">+94 70 430 9780</p>
                </div>
                </div>

                {/* <p className="mt-5 text-sm text-gray-500">© 2022 Preline.</p> */}
            
            

            <div className="mt-6 flex justify-end gap-x-3">
                <a className="inline-flex justify-center items-center gap-x-3 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="#">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
                PDF
                </a>
                <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                </svg>
                Print details
                </a>
            </div>
           
       </div>
       </div>
       </div>
        </section>
        
    </div>
  )
}

export default Invoice1