import React, {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar'
import ModSideBar from '../../components/ModSideBar'
import CustomerService from '../../routes/customerServiceRoutes';


const ModCustomer = () => {

    const [Customers, setCustomers] = useState();

    useEffect(() => {
        CustomerService
          .findAllCustomers()
          .then((res) => {
            setCustomers(res.data.customer);
          })
          .catch((error) => {
            console.log(error);
          });

  }, []);

  return (
    <div>
        <div className='fixed top-0 w-full'>
            <NavBar/>
        </div>
    
        <div className="flex">
            <div className="h-screen sticky top-0 w-1/5 ">
                <ModSideBar/>    
            </div>
            <div className="mx-4 w-4/5 mt-20 ">
        
                <section class="container mt-5 px-4 mx-auto">
      <div className="flex">
        <div className='flex'>
        
        <h2 className="text-3xl font-medium text-orange-500">Customers</h2>
        </div>
        <div className='flex w-full justify-end'>
            <a href='/AddCusForm'>
            <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6 ">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


                <span className="mx-1"> Add </span>
            </button>
            </a>
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
                                            <span>Customer ID</span>
                                        </div>
                                    </th>

                                    <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                        <div className="flex items-center gap-x-3">
                                            <span>Name</span>
                                        </div>
                                    </th>

                                    <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                    <div className="flex items-center gap-x-3">
                                            <span>Email</span>
                                    </div>
                                    </th>
                                    <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                    <div className="flex items-center gap-x-3">
                                            <span>Contact number</span>
                                    </div>
                                    </th>
                                   
                                   


                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200  ">
                                {Customers?.map((customer) => ( 
                                    <tr key={customer.customerID}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="flex items-center gap-x-3">
                                            <span>{customer.customerID} </span>
                                    </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="flex items-center gap-x-3">
                                            <span>{customer.firstName} {customer.lastName}</span>
                                    </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="flex items-center gap-x-3">
                                            <span>{customer.email}</span>
                                    </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="flex items-center gap-x-3">
                                            <span>{customer.contactNo} </span>
                                    </div>
                                    </td>
                                    
                                
                                    
                                </tr>

                                ))}

                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
        </div>
       
    
        </div>
  )
}

export default ModCustomer