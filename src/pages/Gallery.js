import React, {useState,useEffect } from 'react'
import img1 from '../images/img1.jpg'
import UserNavBar from '../components/UserNavBar';
import AdminService from '../routes/adminServiceRoutes';
import { useAuthContext } from '../hooks/useAuthContext';

const Gallery = () => {
  
  const [products, setProducts] = useState([]);
  const { authUser } = useAuthContext();

    
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

    const handleCart = async (productID) => {
      const userID = authUser.user.id;
      console.log(userID)
      
      const data={
        status: "inCart"
      }
      AdminService
          .addToCart(productID)
          .then((res) => {
              console.log("Product added to the cart!");

          })
          .catch((error) => {
              console.log(error);
          });
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
                          <button onClick={() => handleCart(product.productID)} 
                          className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                      </div>
                  </div>
                </div>
                </div>
                ))} 
                </div>
            </section>
      </div>
    </div>
    </>
  )
}

export default Gallery