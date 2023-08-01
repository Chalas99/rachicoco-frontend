import React, {useState,useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import img1 from '../images/img1.jpg'
import UserNavBar from '../components/UserNavBar';
import AdminService from '../routes/adminServiceRoutes';
import { useAuthContext } from '../hooks/useAuthContext';
import useCart from '../hooks/useCart';

const Gallery = () => {
  
  const { authUser } = useAuthContext();
  const { cart, setCart } = useCart();
  const location = useLocation();
  const navigateTo = useNavigate();

  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartSuccess, setCartSuccess] = useState(false);
  const [cartProduct, setCartProduct] = useState();

    
    useEffect(() => {
          AdminService
            .getAllProducts()
            .then((res) => {
              setProducts(res.data.products);
            })
            .catch((error) => {
              console.log(error);
            });

    }, []);
    
    const handleCart = async (product) => {
      if (!authUser.user) {
        navigateTo(
          "/Login",
          {
            state: {
              from: location,
            },
          },
          { replace: true }
        );
      }else{
        let itemCount = cart.count;
        const isItemAlreadyAdded = cart.cartItems.some(
          (item) => item.productID == product.productID
        );

        if (isItemAlreadyAdded) {
          setAlreadyAdded(true);
          setTimeout(() => {
            setAlreadyAdded(false);
          }, 1000);
        } else {
          let items = cart.cartItems.push(product);
          setCart({ ...cart, cartItems: items });
          setCart({
            ...cart,
            count: ++itemCount,
          });
          console.log(cart);
          setCartSuccess(true);
          setTimeout(() => {
            setCartSuccess(false);
          }, 1000);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    }

    const [activeTab, setActiveTab] = useState("Coco chips");

    const tabs = ['Coco chips', 'Coco peat products', 'Coco fiber products'];

    const filteredData = products.filter(product => product.category === activeTab);

  return (
    <>
      <UserNavBar/>

      <div>
        <div className='font-semibold'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active-tab' : 'tab h-10 px-4 mb-6 text-sm text-center text-orange-600 bg-transparent border-b-2 border-Orange-500 sm:text-base dark:border-orange-400 dark:text-orange-400 whitespace-nowrap focus:outline-none' } 
            onClick={() => setActiveTab(tab)}
            
          >
            {tab}
          </button>
        ))}
        </div>

      <div>
          <section className="bg-white ">
            <div className='flex flex-wrap justify-center gap-12 mt-8 xl:mt-12 '>
              {filteredData?.map((product) => (
                <div className='flex w-1/3' key={product.productID}>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                  <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={img1} />
                  </div>

                  <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{product.Name}</h3>

                      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                          <span className="font-bold text-gray-800 dark:text-gray-200">{product.price}</span>
                          <button onClick={() => {handleCart(product);
                            setCartProduct({product});
                          }} 
                          className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                      </div>
                  </div>
                </div>
                </div>
                ))} 
            </div>

            {cartSuccess && (
            <>
              <div className="flex mt-5 px-3 py-2 bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#16a34a"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-green-500">Item Added to the Cart</p>
              </div>
            </>
          )}

          {alreadyAdded && (
            <>
              <div className="flex mt-5 px-3 py-2 bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#16a34a"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-green-500">
                  Item Already In the Cart
                </p>
              </div>
            </>
          )}

          </section>
      </div>
    </div>
    </>
  )
}

export default Gallery