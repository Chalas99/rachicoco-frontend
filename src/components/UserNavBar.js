import React, {useState}  from 'react'
import LOGO from '../images/logo.jpg'


const UserNavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOutsideClick = () => {
      setIsOpen(false);
    };
  
  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
       <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
            <a href="#">
                <img className="w-auto h-8 sm:h-9" src={LOGO} alt=""></img>
            </a>

            {/* */}
            <div className="flex lg:hidden">
                <button x-cloak  type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
       

        {/* first section */}
        <div x-cloak className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-1">
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-50" href="#">HOME</a>
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-50" href="#">ABOUT US</a>
                <div className='flex mt-2'>
                  <div >
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 mt-20" href="#">PRODUCTS</a>
                  </div>
                  <div>
                  <div className="relative inline-block">
                      {/* <!-- Dropdown toggle button --> */}
                      <button
                        onClick={handleClick}
                        className="relative z-10 block p-2 text-gray-700 "> 
                        <svg
                          className="w-3 h-3 text-gray-800 dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* <!-- Dropdown menu --> */}
                      {isOpen && (
                      <div
                        onClick={handleOutsideClick}
                        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                        <a
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Coco chips
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Coco peat product
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Coco fiber product
                        </a>
                      </div>
                    )}
                  </div>
                  </div>
                  </div>
                </div>
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-0" href="#">CONTACT US</a>
            </div>

            <div className="flex justify-center md:block">
                <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                </a>
            </div>
            
            <div class="flex items-center gap-x-6">
              <img class="object-cover w-8 h-8 rounded-full bo" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt=""></img>
            </div>           

            <div className="text-center">
                    <button className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-0"><a href='Registration'>Sign up</a></button>
                </div>
          </div>
    </nav>
   </div>
  )
}

export default UserNavBar;