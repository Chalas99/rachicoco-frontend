import React, {useState} from 'react'
import backgroundImage from '../images/bg2.jpg'
import Logo_Circular from '../images/logo.jpg'
import CustomerService from '../routes/customerServiceRoutes';
import { useNavigate } from 'react-router-dom';

import UserNavBar from '../components/UserNavBar';


function SignUp() {
    
const navigateTo = useNavigate();

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [contactNum, setContactNum] = useState("");
const [password, setPassword] = useState("");
const [conpassword, setConPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();

    const customer = {
        firstName: firstName,
        lastName: lastName,
        email:email,
        contactNum: contactNum,
        password: password
    }
   
    CustomerService
        .signUpCustomer(customer)
        .then((res) => {
            console.log("Successfully Registered");
            navigateTo("/Login");
            })
            .catch((error) => {
            console.log(error);
    });

}
   

  return (
    <div>
        <div className='fixed top-0 w-full'>
            <UserNavBar/>
        </div>
        
        <div>
        <section className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${backgroundImage})` , backgroundSize:'cover'} }>
        <div className="flex justify-center min-h-screen">
            
            {/* <div className="hidden bg-cover lg:block lg:w-2/5 flex justify-start px-12 py-16 mx-auto" >
            <img className="w-auto h-24" src={Logo_Circular} alt=""></img>

            </div> */}


            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 " style={{ backgroundColor: 'rgba(128, 128, 128, 0.6)'} }>
                <div className="w-full">

                    <h1 className="text-5xl font-bold tracking-wider text-gray-800 capitalize dark:text-white mb-6">
                        SignUp
                    </h1>
                    
                    <h1 className="text-xl  tracking-wider text-gray-800 capitalize dark:text-white mb-3">
                        Get your free account now.
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-orange-400">
                        Let's get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>

                
                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" >
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="John" name='fname' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Snow" name='lname' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                            <input value={contactNum} onChange={(e) => setContactNum(e.target.value)} type="text" placeholder="XXX-XX-XXXX-XXX" name='contactnum' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-white rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsnow@example.com" name='email' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" name='password' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                            <input value={conpassword} onChange={(e) => setConPassword(e.target.value)} type="password" placeholder="Enter your password" name='conpassword' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-white dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <button onClick={handleSubmit} className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                            <span>Sign Up</span>
                
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            
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

export default SignUp