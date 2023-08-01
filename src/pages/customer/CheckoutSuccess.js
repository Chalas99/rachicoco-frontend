import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import UserNavBar from '../../components/UserNavBar'
import payment from '../../images/payment.jpg'
import useCart from '../../hooks/useCart';

const CheckoutSuccess = () => {

const { cart, setCart } = useCart();

useEffect(() => {
    localStorage.removeItem('cart');
    setCart({
        cartItems: [],
        count: 0,
        subTotal: 0,
        discount: 0,
        total: 0,
    });
}, [])

  return (
    <>
    <UserNavBar/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
          <img
            className=" w-3/12 mb-10 object-cover object-center rounded"
            alt="hero"
            src={payment}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Payment Succeeded!
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
              you can keep track of all{" "}
              <span className="font-bold ">
                <Link to="/CustomerProfile">orders</Link>
              </span>{" "}
              from the orders section in the profile page
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Visit Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckoutSuccess