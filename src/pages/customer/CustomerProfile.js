import React from 'react'
import CustomerSideBar from '../../components/CustomerSideBar';
import CusNavBar from '../../components/CusNavBar';


const CustomerProfile = () => {
  return (
    <div>
       <div className='fixed top-0 w-full'>
        <CusNavBar/>
        </div>

        <div className="flex">
          
            <div className="h-screen sticky top-0 w-1/5 ">
                <CustomerSideBar/>    
            </div>

            <div className="mx-4 w-4/5 mt-20 ">

            </div>

        </div>


    </div>
    
  )
}

export default CustomerProfile