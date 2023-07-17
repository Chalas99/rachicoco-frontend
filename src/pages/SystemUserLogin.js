import React,{useState} from 'react'
import backgroundImage from '../images/logini.jpg'
import logo from '../images/logo.jpg'
import SystemUserService from '../routes/systemUserServiceRoutes'



const SystemUserLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const systemuser = {
            email:email,
            password:password
        }
        
        SystemUserService
        .signInSystemUser(systemuser)
        .then((res) => {
            setStatus(res.data.error);
            setMessage(res.data.message);

            })
            .catch((error) => {
            console.log(error);

        
    });
   
    };
    
  return (
           
    <div className="bg-white dark:bg-gray-900">
    <div className="flex justify-center h-screen">
        
    {/* <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        
        <div>09</div>
        </div> */}
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-60">
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
                    <form onSubmit={handleSubmit}>
                        <div >
                            
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input onChange={(e) => setEmail(e.target.value)}  type="email" name="email" id="email" placeholder="user@gmail.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>

                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 
                            placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign in
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="Registration" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>

                        {status === true ? <div className="mt-4 flex w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="flex items-center justify-center w-12 bg-red-500">
                                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                </svg>
                            </div>

                            <div className="py-2 w-full">
                                <div className="mx-3 ">
                                    <span className="font-semibold text-red-500 dark:text-red-400 text-center">Error</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">
                                    {message}
                                    </p>
                                </div>
                            </div>
                        </div> : null}
 
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SystemUserLogin;