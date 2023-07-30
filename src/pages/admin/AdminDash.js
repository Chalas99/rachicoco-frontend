import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import NavBar from '../../components/NavBar'
// https://github.com/cruip/tailwind-dashboard-template/tree/main/src

const AdminDash = () => {
  return (
    <>
        <div className='fixed top-0 w-full'>
        <NavBar/>
        </div>
    
        <div className="flex">
            <div className="h-screen sticky top-0 w-1/5 ">
                <AdminSideBar/>    
            </div>
            <div className="mx-4 w-4/5 mt-20 ">

            



            </div>
        </div>
    </>
  )
}

export default AdminDash