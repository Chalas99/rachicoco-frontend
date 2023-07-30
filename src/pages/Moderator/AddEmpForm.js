import React,{useState} from 'react'
import DatePicker from "react-date-picker";
import ModService from '../../routes/modServiceRouter';
import { useNavigate } from 'react-router-dom'



const AddEmpForm = () => {
    const [value, setValue] = useState(new Date());

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

        const navigateTo = useNavigate();
      
        const [Name, setName] = useState("");
        const [job_role, setJob_role] = useState("");
        const [NIC, setNIC] = useState("");
        const [contactNo, setContactNo] = useState("");
        const [DOB, setDOB] = useState("");
        const [hireDate, setHireDate] = useState("");
        const [address, setAddress] = useState("");
    
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            const Employee = {
                Name: Name,
                job_role: job_role,
                NIC: NIC,
                contactNo: contactNo,
                DOB: DOB,
                hireDate: hireDate,
                address: address,
            }
            
    
            ModService
            .recordempDetails(Employee)
            .then((res) => {
                if(res.data.error === true){
                    console.log(res.data.message);
                }else{
                    navigateTo("/ModEmployee");
                }
                })
                .catch((error) => {
                console.log(error);
        });
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
                                    <input value={Name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="Chalani Wimalasooriya"/>
                                    
                                </div>
                                <div className="w-full mb-6 ">
                                    <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-state">
                                    Job role
                                    </label>
                                    <div className="relative">
                                    <select value={job_role} onChange={(e) => setJob_role(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
                                    <div className="w-full md:w-1/2  mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
                                        NIC
                                        </label>
                                        <input value={NIC} onChange={(e) => setNIC(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="997892283V"/>
                                        
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-last-name">
                                        Contact Number
                                        </label>
                                        <input value={contactNo} onChange={(e) => setContactNo(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="076 4387563"/>
                                    </div>
                                    </div>
                                <div className="w-full ">
                                    <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Address
                                    </label>
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8" id="grid-password" type="text" placeholder="No. 217, Dambulla road, Kurunegala."/>
                                    
                                </div>
                                <div className="w-full md:w-1/2  mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Date of birth
                                    </label>
                                    <div className=" relative  ">
                                <input value={DOB} onChange={(e) => setDOB(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8"
                                    type="date" 
                            //        value={selectedDate} 
                              //      onChange={handleDateChange}
                                />
                                </div>
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-left text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Hire Date
                                    </label>
                                    <div className=" relative  ">
                                <input value={hireDate} onChange={(e) => setHireDate(e.target.value)}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8"
                                    type="date" 
                                    // value={selectedDate} 
                                    // onChange={handleDateChange}
                                />
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

export default AddEmpForm

