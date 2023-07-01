import React from 'react'
import face from '../images/a2.jpg'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-white shadow dark:bg-gray-900 w-full  justify-end">
            <div className="container flex items-center justify-end p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 ">
                <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-b-2 hover:border-orange-500 mx-1.5 sm:mx-6">Log out</a>
              
              <div className="flex items-center align-right gap-x-6">
                  <img className="object-cover w-7 h-7 rounded-full ring ring-gray-300 dark:ring-gray-600" src={face}></img>
              </div>

            </div>
</nav>
</div>
  )
}

export default NavBar