import Button from '../components/Button';
import { usePaymentContext } from '../context/paymentContext';
import Store from '../store';
import { SlCheck } from "react-icons/sl";
import { useLocation } from 'react-router-dom';
import Toast from '../components/Toast';
import { useState } from 'react';

const Payment = () => {
  const { 
    paymentMethodContext, 
    setPaymentMethodContext,
    loading,
    isLoading
  } = usePaymentContext();
  const location = useLocation();


  const [snackbarMessage, setSnckbarMessage]=useState<string>("")
  const [snackbarTime, setSnckbarTime]=useState<string>("")
  const [snackbarType, setSnckbarType]=useState<"success"|"error">("success")

  // Function to parse query parameters
  const getQueryParams = (search: string) => {
    return new URLSearchParams(search);
  };

  // Extract the query parameters
  const queryParams = getQueryParams(location.search);
  const amount = queryParams.get('amount');
  const description = queryParams.get('description');
  const token = queryParams.get('token');
  
  
  const processPayment=async ()=>{
    if(paymentMethodContext==="Paystack"){
      const {initiatePaystack}=store
      isLoading(true)
      //Initiate paystack payment
      const response= await initiatePaystack(
        {amount:Number(amount), 
        description:description??"Not supplied",},
        token??""
      );
      isLoading(false)
      //A successful payment only reirects to paystack
      //If there's a response it means an error
      if(response) {  
        const time= new Date().toLocaleTimeString();
        console.log(response)
        setSnckbarMessage(response)
        setSnckbarTime(time)
        setSnckbarType("error")
      }


    }
  }

  const store = new Store();
  const payments= store.getPaymentMethods();
  return (
    <>
    <Toast message={snackbarMessage} time={snackbarTime} type={snackbarType}/>
    <div className="min-h-screen  px-6 md:px-32 2xl:px-32 py-12 p-4 flex justify-center items-center">
     <div className='w-full md:flex md:font-semibold'>
        <div className='flex flex-col'>
        <div className='bg-primaryColor rounded-tr-3xl rounded-bl-3xl  *:rounded-full *:h-12 *:w-12 relative'>
          {/* Overlay effect */}
          <div  className={`absolute  left-[90px] opacity-10 top-8 bg-white `}></div>
          <div  className={`absolute  left-[40px] opacity-15 top-2 bg-white `}></div>
          <div  className={`absolute  left-[150px] opacity-10 top-7 bg-white `}></div>
          <div  className={`absolute  left-[10px] opacity-10 top-0 bg-white `}></div>
          <div  className={`absolute  left-[150px] opacity-10 top-0 bg-white `}></div>
          <div  className={`absolute  right-[10px] opacity-5 top-0 bg-white `}></div>
          <div  className={`absolute  right-[40px] opacity-10 top-4 bg-white `}></div>
          <div  className={`absolute  right-[0px] opacity-10 bottom-0 bg-white `}></div>
          <div  className={`absolute  right-[40px] h-32 w-32 opacity-10 top-4 bg-white `}></div>
          {/* {[4,20].map((value,index)=>{
            return(
              <div key={index} className={`absolute z-50  left-[${value}px] bg-red-200 h-6 w-6`}></div>
            )
          })} */}
            <h1 className='relative ml-3 z-10 text-6xl md:text-7xl mb-8 py-4 text-center outline-2 outline-primaryColor text-white md:pb-4'>Checkout</h1>
          </div>

          <h3 className='text-xl mt-12 text-gray-600'>Proceed to pay</h3>
          <p className='text-4xl text-gray-600 font-semibold'>{amount||"<Supply Amount>"}</p>
          <img className='md:w-[50vw]' src="https://img.freepik.com/free-photo/3d-render-online-payment-transaction-security_107791-16637.jpg?size=626&ext=jpg&ga=GA1.2.706113105.1722706366&semt=ais_hybrid" alt="" />
        </div>
        {/* Main content wrapper with flex for responsive layout */}
        <div className="flex flex-col justify-center  md:w-[50vw]">

          {/* Other Payment Options */}
          <div className="mt-12 ">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Payment Option</h3>
            <div className="space-y-4">
              {payments.map((method, index) => (
                <button
                  key={index}
                  onClick={() => setPaymentMethodContext(method)}
                  className={`
                    ${paymentMethodContext==method?"bg-green-50 font-semibold border border-green-400":""}
                    font-medium flex w-full items-center text-gray-600 justify-between p-3 border rounded-lg
                  `}>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">{method}</span>
                  </div>
                  {paymentMethodContext==method&&<SlCheck className='text-green-500'/>}
                </button>
              ))}
            </div>
          </div>
          {/* Continue Button */}
          <div onClick={processPayment} className="mt-6">
            <Button loading={loading} text={'Continue'}/>
          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default Payment;
