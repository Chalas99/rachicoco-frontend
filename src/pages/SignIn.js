import React from 'react'
import backgroundImage from '../images/login.png'
import logo from '../images/logo.jpg'


const SignIn = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
    <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">Welcome back! Login to continue</h2>

                    <p className="max-w-xl mt-3 text-gray-300">
                    Discover the wonders of coir. Login to browse, buy, and bring nature's touch to your doorstep
                    </p>
                </div>
            </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src={logo} alt=""></img>
                    </div>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                </div>

                <div className="mt-8">
                    <form>
                        <div >
                            
                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 
                            placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign in
                            </button>
                        </div>

                    </form>

                    <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="Registration" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignIn