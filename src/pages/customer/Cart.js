import React from 'react'
import UserNavBar from '../../components/UserNavBar'

const Cart = () => {
  return (
<>
<UserNavBar/>


<div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

  <div class="flex justify-start item-start flex-col">
  </div>
  <div class="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-30 xl:space-y-8">
      <div class="flex flex-col justify-start items-start dark:bg-gray-200 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p class="text-lg md:text-3xl font-semibold leading-6 xl:leading-8 text-gray-800">Shopping cart</p>
        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div class="pb-4 md:pb-8 w-full md:w-40">
            <img class="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
            <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
          </div>
          <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
              </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base  xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
              <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>  
              <div>
                <label for="Quantity" class="sr-only"> Quantity </label>

                <div class="flex items-center gap-1">
                  <button
                    type="button"
                    class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value="1"
                    class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />

                  <button
                    type="button"
                    class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                  >
                    +
                  </button>
                </div>
              </div>
              <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
            </div>
          </div>
        </div>
        <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div class="w-full md:w-40">
            <img class="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
            <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
          </div>
          <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-full flex flex-col justify-start items-start space-y-8">
              <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">High Quaility Italic Dress</h3>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                <p class="text-sm  leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
              </div>
            </div>
            <div class="flex justify-between space-x-8 items-start w-full">
              <p class="text-base  xl:text-lg leading-6">$20.00 <span class="text-red-300 line-through"> $30.00</span></p>
              <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
              <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-200 space-y-6">
          
        </div>
        
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-200 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full  lg:space-x-8 xl:space-x-0">
        
        </div>
        <div class="flex justify-between xl:h-full items-stretch w-full flex-col ">
        <h3 class="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base  leading-4 text-gray-800">Subtotal</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-800">$56.00</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base  leading-4 text-gray-800">Discount </p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-800">-$28.00 (50%)</p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base  leading-4 text-gray-800">Shipping</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-800">$8.00</p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base  font-semibold leading-4 text-gray-800">Total</p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-800">$36.00</p>
          </div>
          
        </div>
      </div>
    </div>
  
</div>
    
</>
    
  )
}

export default Cart