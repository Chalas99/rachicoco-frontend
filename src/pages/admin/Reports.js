import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar';

const Reports = () => {

    const [formState, setFormState] = useState({
        type: 1,
        from: "",
        to: "",
      });
    
      const [error, setError] = useState();
    
      const navigateTo = useNavigate();
    
      const setType = (e) => {
        e.preventDefault();
        setFormState({ ...formState, type: e.target.value });
      };
    
      const setFromDate = (e) => {
        e.preventDefault();
        setFormState({ ...formState, from: e.target.value });
      };
    
      const setTodate = (e) => {
        e.preventDefault();
        setFormState({ ...formState, to: e.target.value });
      };
    
      const generateReport = (e) => {
        e.preventDefault();
        if (!formState.from || !formState.to) {
          setError("From and To dates can't be empty");
        } else if (formState.from > formState.to) {
          setError("From date must be a past date than To date");
        } else {
          if (formState.type == 1) {
            navigateTo(
              `/sys/admins/reports/sales/${formState.type}/${formState.from}/${formState.to}`,
              { replace: true }
            );
          } else if (formState.type == 2) {
            navigateTo(
              `/sys/admins/reports/issues/${formState.type}/${formState.from}/${formState.to}`,
              { replace: true }
            );
          }
        }
      };
      
  return (
    <>
    <NavBar/>
      <div className=" h-screen bg-orange-500 ">
        <main class="flex justify-center items-center pt-32">
          <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h1 className="text-3xl text-center font-bold mb-10">
                Generate Reports
              </h1>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-base font-bold mb-2"
                  for="username"
                >
                  Report Type
                </label>
                <select
                  class="bg-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                  onChange={setType}
                >
                  <option value="1">Earnings Report</option>
                  <option value="2">Issues Report</option>
                </select>
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-base font-bold mb-2"
                  for="From"
                >
                  Select Date
                </label>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="From"
                >
                  From:
                </label>
                <input
                  class="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="from"
                  type="date"
                  placeholder=""
                  onChange={setFromDate}
                />
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="To"
                >
                  To:
                </label>
                <input
                  class="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="To"
                  type="date"
                  placeholder=""
                  onChange={setTodate}
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  onClick={generateReport}
                  class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default Reports