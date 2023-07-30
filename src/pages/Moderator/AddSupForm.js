import React from 'react'

const AddSupForm = () => {


  return (
    <div>
        <div>
            <section className="bg-white dark:bg-gray-900" >
                <div className="flex justify-center min-h-screen">
                
                    <div className="items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 " style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)'} }>
                        <h1 className="text-3xl font-bold tracking-wider text-gray-800 capitalize dark:text-white mb-6">
                                Record Supplier Details
                        </h1>
                        <div className=" mt-16 flex justify-center w-full">
                        
                            <form className="w-full max-w-lg">
                                
                                <div className="flex flex-wrap  mb-6">
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                    Supplier Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="Chalani Wimalasooriya"/>
                                    
                                </div>
                                <div className="w-full mb-6 ">
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                                    Supplier type
                                    </label>
                                    <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>Regular</option>
                                        <option>Normal</option>
                                        
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                                        NIC
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="XXXXXXXXXX"/>
                                        
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                                        Contact Number
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="XXX XXX XXXX"/>
                                    </div>
                                    </div>
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                    Address
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="No. 217, Dambulla road, Kurunegala."/>
                                    
                                </div>
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                    Materials
                                    </label>

                                    {/* <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Materials</h3> */}
                                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coco husk</label>
                                                </div>
                                            </li>
                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Steel</label>
                                                </div>
                                            </li>
                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coco chips</label>
                                                </div>
                                            </li>
                                            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Strings</label>
                                                </div>
                                            </li>
                                        </ul>
                                    
                                </div>
                                <div className="w-full mb-6">
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                                    Description
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Text" placeholder="Their materials..."/>
                                    
                                </div>
                                </div>
                                
                                
                                <button  className="flex items-center justify-center w-full px-6 py-3  text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                                    <span>submit</span>

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default AddSupForm