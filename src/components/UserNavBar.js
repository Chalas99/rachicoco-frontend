import React, {useState}  from 'react'
import LOGO from '../images/logo.jpg'
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart';

const UserNavBar = () => {

    const {authUser, setAuthUser} = useAuthContext();
    const { cart, setCart } = useCart();
    const navigateTo = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isProfOpen, setProfOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOutsideClick = () => {
      setIsOpen(false);
      setProfOpen(false);
    };

    const handleProfileClick = () => {
      setProfOpen(!isProfOpen);
    };

    const handleLogOut = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      setAuthUser({});
      navigateTo("/")
  };
  
  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-900">
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
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-50" href="/">HOME</a>
                <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-50" href="#">ABOUT US</a>
                <div className='flex mt-2'>
                  <div >
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 mt-20" href="/Gallery">PRODUCTS</a>
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

          {authUser?.user ?
            <div className="hidden xl:flex items-center space-x-5 items-center">
              <a className="flex items-center hover:text-gray-200" href="/cart">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                <span className="flex absolute -mt-5 ml-4">
                  {cart.count !== 0 && (
                      <>
                        <span class="inline-flex justify-center items-center p-2 ml-2 w-2 h-2 text-sm font-medium text-gary-800 bg-white rounded-full ">
                          {cart.count}
                        </span>
                      </>
                    )}
                </span>
              </a>

              <div>
                  <div className="relative inline-block">
                      {/* <!-- Dropdown toggle button --> */}
                      <button
                        onClick={handleProfileClick}
                        className="relative z-10 block p-2 text-gray-700 "> 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </button>

                      {/* <!-- Dropdown menu --> */}
                      {isProfOpen && (
                      <div
                        onClick={handleOutsideClick}
                        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                        <a
                          href="/CustomerProfile"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Profile
                        </a>
                        <a
                          onClick={handleLogOut}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                          Logout
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div> :
              <div className="text-right">
                      <button className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-0"><a href='Login'>Sign In</a></button>
                      <button className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-orange-600 md:mx-4 md:my-0"><a href='Registration'>Sign up</a></button>
              </div>
          }

            
          </div>
    </nav>
   </div>
  )
}

export default UserNavBar;