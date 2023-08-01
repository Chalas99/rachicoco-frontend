import React, {useEffect, useState} from 'react'
import CustomerSideBar from '../../components/CustomerSideBar';
import or1 from '../../images/5.jpg'
import UserNavBar from '../../components/UserNavBar';
import CustomerService from '../../routes/customerServiceRoutes';
import { useAuthContext } from '../../hooks/useAuthContext';

const OrderDetails = () => {

    const {authUser} = useAuthContext();
    const [ordersList, setOrdersList] = useState();

    useEffect(() => {
      CustomerService
        .getOrders(authUser.user.id)
        .then((res) =>{
            setOrdersList(res.data.orders);
        })
    }, [])
    

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
        {ordersList?.map((order) => (
            <div key={order.order_itemsID} className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl">Order #{order.orderID}</h1>
                </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <img className="object-cover w-22 h-22 " src={or1}></img>

                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <h1 className='font-bold text-gray-800'>{order.Name}</h1>
                            <h2>{order.price}</h2>
                            <h2 className='text-left'>{order.description}</h2>
                        </div>
                    </div>

                    <div>

                        <div className="mr-6 flex flex-col mt-5 space-y-4 items-end">
                            <h1>Quantity</h1>
                            <h1>Pick Up date</h1>
                            <h1>Status</h1>
                            <h1>Total Amount</h1>
                        </div>
                    </div>
                    <div>

                        <div className=" ml-6 flex flex-col items-start mt-5 space-y-4">
                            <h1>{order.quantity}</h1>
                            <h1>{order.dateTime}</h1>
                            <h1>{order.status}</h1>
                            <h1>{order.price}</h1>
                        </div>
                    </div>
                    
                </div>
                
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"></hr>
                
                <div className="mb-6 h-1 w-full bg-orange-100 bg-orange-400">
                    <div className="h-1 bg-primary bg-orange-400 width: 50%"></div>
                </div>
            </div>
          ))}  
        </section>
        </div>
        </div>
    </div>
  )}

export default OrderDetails;