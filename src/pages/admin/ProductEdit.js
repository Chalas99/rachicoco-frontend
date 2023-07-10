import React from 'react'

const ProductEdit = () => {
  return (
    <div>
        <div>
            <section className="bg-white dark:bg-gray-200" >
            <div className="flex justify-center min-h-screen">
            
            <div className="items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 " style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)'} }>
            <h1 className="text-3xl font-bold tracking-wider text-gray-800 capitalize  mb-6">
                        Edit Product Details
                </h1>
            <div className=" mt-16 flex justify-center w-full">
            
            <form className="w-full max-w-lg">
                
                <div className="flex flex-wrap  mb-6">
                <div className="w-full ">
                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                    Product Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="Coco Chips"/>
                    
                </div>
                <div className="w-full mb-6 ">
                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                    Category
                    </label>
                    <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Coco Chips</option>
                        <option>Coco peat products</option>
                        <option>Coco fiber products</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div>
                </div>
                <div className="w-full mb-6">
                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                    Description
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="Text" placeholder="That product most suitable for..."/>
                    
                </div>
                <div className="flex flex-wrap -mx-3 ">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                        moisture level
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                        
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                        Acid level
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                        Electric conductivity
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
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

export default ProductEdit