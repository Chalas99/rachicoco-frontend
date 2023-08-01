import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import StoreSideBar from '../../components/StoreSideBar';
import StoreService from '../../routes/storeServiceRoutes';



const StoreOrder = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewOrder, setViewOrder] = useState();


    const [Orders, SetOrders] = useState();
    
    useEffect(() => {
          StoreService
            .findAllOrders()
            .then((res) => {
                console.log(res.data.orders);
              SetOrders(res.data.orders);

            })
            .catch((error) => {
              console.log(error);
            });

    }, []);

    const handleview = (id) => {
        console.log("mhgcytgvn",id);
        StoreService
            .viewOrder(id)
            .then((res) => {
                setViewOrder(res.data.data);
                console.log(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }



  return (
    <>
        <div className='fixed top-0 w-full'>
            <NavBar/>
        </div>
        <div className='flex'>
            <div className="h-screen sticky top-0 w-1/5 ">
                <StoreSideBar/> 
            </div>
            <div className="mx-4 w-4/5 mt-20 ">

                <section class="container mt-5 px-4 mx-auto">
                <div className="flex">
                    <div className='flex '>
                    
                    <h2 className="text-3xl font-medium text-orange-500">Orders</h2>
                    </div>
                    
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="-overflowhidden border md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead className="bg-gray-300">
                                            <tr >
                                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Order ID</span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Date & Time</span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                                <div className="flex items-center gap-x-3">
                                                        <span>Total amount</span>
                                                </div>
                                                </th>
                                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                                <div className="flex items-center gap-x-3">
                                                        <span>Status</span>
                                                </div>
                                                </th>
                                                <th></th>


                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200  ">
                                        {Orders?.map((Order) => ( 
                                            <tr key={Order.orderID}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="flex items-center gap-x-3">
                                                     <span>{Order.orderID}</span>
                                                </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="flex items-center gap-x-3">
                                                        <span>{Order.dateTime}</span>
                                                </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="flex items-center gap-x-3">
                                                        <span>{Order.totalPrice}</span>
                                                </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="flex items-center gap-x-3">
                                                        <span>{Order.status}</span>
                                                </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">
                                                    <button 
                                                    
                                                     onClick={() => {handleview(Order.orderID); setIsVisible(true) }}
                                                     className="flex items-center px-4 text-white  transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                                        <span className="">View</span>
                                                    </button>
                                            
                                                </div>
                                                   
                                                </td>
                                                </tr>))}
                                            
                                                
                                            
                                        </tbody>
                                    </table>
                                    {isVisible && (
                                    <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-40 flex items-center justify-center">
                                        <section className="relative bg-white dark:bg-white py-8 px-4 md:px-10 rounded-lg w-full max-w-lg">
                                      
                                        <div class="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
                                           {viewOrder[0].orderID}
                                        </div>

                                        <div class="flex-grow border-t border-gray-400"></div>

                                        <div class="p-1 mr-4 ml-2 md:flex-row md:space-x-4 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
                                            <ul class="flex  justify-between ">
                                            <li class="block  text-gray-600 ml-5">{viewOrder[0].firstName} {viewOrder[0].lastName}</li>
                                            </ul>
                                        </div>

                                        <div class="p-1 mr-4 ml-2 md:flex-row md:space-x-4 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-700">
                                            <ul class="flex justify-between ">
                                            <li class="block  text-gray-600 ml-5">{viewOrder[0].contactNo}</li>
                                            </ul>
                                        </div>

                                            <div class="flex w-1/2 p-1 mr-4 ml-2 md:flex-row md:space-x-4 md:mt-6 md:text-sm md:font-medium text-right">
                                                <ul class="flex justify-between ">
                                                <li class="block  text-gray-600 ml-5">Items</li>
                                                </ul>
                                            </div> 

                                            <table className='flex px-4 p-1 md:flex-row md:space-x-4 md:mt-6 md:text-sm md:font-medium text-right'>
                                                <tr>
                                                <th className='px-4'>
                                                    Product ID
                                                </th>
                                                <th className='px-4'>
                                                    Product Name 
                                                </th>
                                                <th className='px-4'>
                                                    Quantity
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                </tr>
                                               
                                            </table>
                                         


                                        
             
                                        <button  className="flex items-center justify-center w-full px-6 py-3 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                                            <span>submit</span>

                                        </button>
                                   
                                    
                                    <button onClick={() => setIsVisible(false)} className="absolute right-0 top-0 m-4">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </button>
                                    </section>
                                </div>
                                )}

                                </div>
                            </div>
                         </div>
                    </div>
                </section>              
            </div>
        </div>
    
    </>
    
  )
}

export default StoreOrder;