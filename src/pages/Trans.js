import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import ModSideBar from '../components/ModSideBar'
import DatePicker from "react-date-picker";


const Trans = () => {

    const [isVisible, setIsVisible] = useState(false);

    const [items, setItems] = useState([
        { name: 'Item 1', quantity: 0, selected: false },
        { name: 'Item 2', quantity: 0, selected: false },
        { name: 'Item 3', quantity: 0, selected: false },
      ]);
    
      const handleCheckboxChange = (index) => {
        setItems(items.map((item, i) => {
          if (i === index) {
            return { ...item, selected: !item.selected };
          }
          return item;
        }));
      };
    
      const handleQuantityChange = (index, quantity) => {
        setItems(items.map((item, i) => {
          if (i === index) {
            return { ...item, quantity };
          }
          return item;
        }));
      };

    const [quantity, setQuantity] = useState("Quantity");
    const [isOpen, setIsOpen] = useState(false);
    const quantities = [1, 2, 3];

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };
  return (
    <div>
    <div className='fixed top-0 w-full'>
            <NavBar/>
        </div>
    
        <div className="flex">
            <div className="h-screen sticky top-0 w-1/5 ">
                <ModSideBar/>    
            </div>
    <div>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center  mt-16 ">
        <div className="container max-w-screen-lg mx-auto">
            <div>
            <h2 className="font-semibold text-3xl text-orange-500">Place Orders</h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mt-4 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                    <p>Select the products with quantity</p>

                    <button 
                    onClick={() => setIsVisible(true)}
                    className="mt-4 bg-gray-400 border border-gray-700 hover:bg-gray-300 text-black font-bold py-1 px-16 rounded"
                    >
                    Items
                    </button>
                    {isVisible && (
                    <div className="p-6">
                    <h2 className="text-  mb-4">Checklist with Quantity</h2>
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center mb-2">
                        <input 
                            type="checkbox" 
                            className="mr-2 h-5 w-5" 
                            checked={item.selected} 
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <p className="mr-4">{item.name}</p>
                        {item.selected && (
                            <input
                            type="number"
                            className="border rounded w-20 p-2"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(index, e.target.value)}
                            />

                            
                        )}
                         
                        </div>
                        
                    ))}
                </div>)}    
                </div>
                

                <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                        <label for="full_name">Full Name</label>
                        <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                    </div>

                    <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
                    </div>

                    <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                    </div>

                    <div className="md:col-span-2">
                        <label for="city">contact number</label>
                        <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                    </div>

                    <div className="md:col-span-2">
                    <div className="w-full md:mb-0">
                    <label for="city">Date</label>

                                    <div className=" relative  ">
                                <input
                                    className="appearance-none block w-full bg-gray-50  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-8"
                                    type="date" 
                                    value={selectedDate} 
                                    onChange={handleDateChange}
                                />
                                </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                        <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Trans