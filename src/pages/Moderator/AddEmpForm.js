import React,{useState} from 'react'
//import Datepicker from "react-tailwindcss-datepicker";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//export default function BasicDatePicker() {

const AddEmpForm = () => {
    const [value, setValue] = useState(new Date());

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    

  return (
    <div>
        <div>
            <section className="bg-white dark:bg-white" >
                <div className="flex justify-center min-h-screen">
                
                    <div className="items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 " style={{ backgroundColor: 'rgba(128, 128, 128, 0.1)'} }>
                        <h1 className="text-3xl font-bold tracking-wider text-gray-800 capitalize text-gray-800 mb-6">
                                Record Employee Details
                        </h1>
                        <div className=" mt-16 flex justify-center w-full">
                        
                            <form className="w-full max-w-lg">
                                
                                <div className="flex flex-wrap  mb-6">
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Employee Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="Chalani Wimalasooriya"/>
                                    
                                </div>
                                <div className="w-full mb-6 ">
                                    <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-state">
                                    Job role
                                    </label>
                                    <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option value={2070}>Accountant</option>
                                        <option value={2060}>Moderator</option>
                                        <option value={2050}>Storekeeper</option>
                                        <option value={2070}>labour</option>
                                        <option value={2050}>security</option>
                                        <option value={2060}>other</option>
                                        
                                        
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6">
                                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
                                        NIC
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="997892283V"/>
                                        
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-last-name">
                                        Contact Number
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="076 4387563"/>
                                    </div>
                                    </div>
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Address
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="No. 217, Dambulla road, Kurunegala."/>
                                    
                                </div>
                                {/* <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Date of Birth" />
                                    </DemoContainer>
                                    </LocalizationProvider>
                                </div>     */}
                               
                                {/* <div class="relative max-w-sm">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div>
                                <input datepicker datepicker-title="Date of birth" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                                </div> */}

                                {/* <div>
                                    <Datepicker
                                        selected={value}
                                        onChange={handleValueChange}
                                    />
                                </div> */}


                                {/* <div
                                class="relative mb-3"
                                data-te-datepicker-init
                                data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    placeholder="Select a date" />
                                <label
                                    for="floatingInput"
                                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Select a date</label
                                >
                                </div> */}



   
 
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

export default AddEmpForm

