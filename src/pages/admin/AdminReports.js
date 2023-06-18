import React from 'react'
import NavBar from '../../components/NavBar'
import AdminSideBar from '../../components/AdminSideBar'

const AdminReports = () => {
  return (
    <div>
         <div className='fixed top-0 w-full'>
        <NavBar/>
        </div>

        <div className="flex">
            <div className="h-screen sticky top-0 w-1/5 ">
                <AdminSideBar/>    
            </div>
            <div className="mx-4 w-4/5 mt-20 ">

            <section class="container mt-5 px-4 mx-auto">
                <div className="flex">
                    <div className='flex '>
                    
                    <h2 className="text-3xl font-medium text-orange-500">Report</h2>
                    </div>
                    {/* <div className='flex w-full justify-end'>
                        <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>


                            <span className="mx-1">Add User</span>
                        </button>
                    </div> */}

                </div>

            

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="-overflowhidden border md:rounded-lg">
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto text-left align'>
                    <l1 className=''>
                   <h1 className='font-semibold mt-4'>Sales</h1>
                   <h2>Sales by Customer</h2>
                   <h2>Sales by Order</h2>

                   <h1 className='font-semibold mt-4'>Inventory</h1>
                   <h2>Inventory Summary</h2>
                   <h2>Product Sales Report</h2>


                   </l1>
                </div>
                
                </section>


                </div>
        </div>
    </div>
  )
}

export default AdminReports