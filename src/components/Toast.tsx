import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  time:string;
  type: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message,time, type }) => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
        if (message) {
            setShow(true);

            // Automatically hide the toast after 5 seconds
            const timer = setTimeout(() => {
                setShow(false);
            }, 5000);

      // Cleanup timer on component unmount
          return () => clearTimeout(timer);
    }
  }, [time]);

  if (!show) return null;

  return (
    <div
      className={`fixed w-full top-4 text-center z-50 p-4 rounded-lg shadow-lg transition-opacity duration-300
        ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}
      `}
    >
      <p className='capitalize'>{message}</p>
      <p className='text-xs'>{time}</p>
    </div>
  );
};

export default Toast;
