import React from 'react'

const AddUserForm = () => {
  return (
    <div>
        <div>
        <section className="bg-white dark:bg-gray-900" >
        <div className="flex justify-center min-h-screen">
            
            {/* <div className="hidden bg-cover lg:block lg:w-2/5 flex justify-start px-12 py-16 mx-auto" >
            <img className="w-auto h-24" src={Logo_Circular} alt=""></img>

            </div> */}
         <div className="items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 " style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)'} }>
         <h1 className="text-3xl font-bold tracking-wider text-gray-800 capitalize dark:text-white mb-6">
                       Add System Users
            </h1>
        <div className=" mt-16 flex justify-center w-full">
         
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-first-name">
                first Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
            </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="user@gmail.com"/>
                
            </div>
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-password">
                Password
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="**************"/>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                
            </div>
            </div>
            
            <div className="w-full mb-6 ">
                <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2" for="grid-state">
                Job Role
                </label>
                <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Accountant</option>
                    <option>Moderator</option>
                    <option>Storekeeper</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 py-3 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
                </div>
            </div>
            <button  className="flex items-center justify-center w-full px-6 py-3 mt-8 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
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

export default AddUserForm

