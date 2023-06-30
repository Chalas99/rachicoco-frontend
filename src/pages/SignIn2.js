import React,{useState} from 'react'
import backgroundImage from '../images/bg2.jpg'
import Logo_Circular from '../images/logo.jpg'
// import LoginBanner from '../images/LoginBanner.jpg'
import CustomerService from '../routes/customerServiceRoutes'
import UserNavBar from '../components/UserNavBar'



const SignIn2 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const customer = {
            email:email,
            password:password
        }
        
        CustomerService
        .signInCustomer(customer)
        .then((res) => {
            console.log(res.data.error);
            console.log(res.data.message);
            setStatus(res.data.error);
            setMessage(res.data.message);


            })
            .catch((error) => {
            console.log(error);

        
    });
   
    };
    
  return (
    <div>
        <div className='fixed top-0 w-full'>
            <UserNavBar/>
        </div>
        
    <div>  
        <section>
    <div className="bg-blue" style={{backgroundImage: `url(${backgroundImage})`,backgroundSize:'cover'}}>

    <div className="flex">
    {/* <div className="hidden bg-cover lg:block lg:w-2/3" > */}
   
        <div className="w-2/5  h-screen ">
            
        </div>

        
        <div className="w-3/5  flex items-center"style={{ backgroundColor: 'rgba(128, 128, 128, 0.9)'} }>
            <div className="w-full mx-auto">
                <div>
                    <div className="text-start px-28">
                        <p className="mt-3 text-6xl font-bold text-gray-900">Welcome back!</p>
                        <h1 className='mt-2 text-2xl font-bold text-orange-500'>Login to continue</h1>
                    </div>

                    <div className="mt-16 px-28">
                        <form onSubmit={handleSubmit}>
                            <div >
                                <label htmlFor="email" className="flex justify-start block mb-2 font-semibold text-sm text-gray-200">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)}  type="email" name="email" id="email" placeholder="user@gmail.com" className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg" />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-200 font-semibold">Password</label>
                                    <a href="#" className="text-sm text-gray-300 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Your Password" className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"/>
                                
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:bg-gray-700 focus:ring focus:ring-gray-600 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>
                            <p className="mt-2 text-sm text-center text-gray-200">Don&#x27;t have an account yet? <a href="Registration" className="text-orange-300 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>

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
    </div>  
    </section>
    </div>
    </div>
  )
}

export default SignIn2;
