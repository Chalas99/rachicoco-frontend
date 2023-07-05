import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import NavBar from '../../components/NavBar'
// https://github.com/cruip/tailwind-dashboard-template/tree/main/src

const AdminDash = () => {
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

            <section class="container mt-5 px-4 mx-auto">
    <div className="flex items-center gap-x-3">
        <h2 className="text-3xl font-medium text-orange-500">Users</h2>

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
                                        <span>Name</span>
                                    </div>
                                </th>

                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                    <div className="flex items-center gap-x-3">
                                        <span>Job Role</span>
                                    </div>
                                </th>

                                <th scope="col" className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-black-500 ">
                                   <div className="flex items-center gap-x-3">
                                        <span>Email</span>
                                  </div>
                                </th>
                                <th>
                                   
                                </th>


                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200  ">
                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="flex items-center gap-x-3">
                                        <span>Chalani Wimalasooriya</span>
                                  </div>
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="flex items-center gap-x-3">
                                        <span>Supervisor</span>
                                  </div>
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="flex items-center gap-x-3">
                                        <span>chal@gmail.com</span>
                                  </div>
                                </td>
                            
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                        <button className="text-black-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>

                                        <button className="text-black-500 transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                           

                         
                        </tbody>
                    </table>
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

export default AdminDash