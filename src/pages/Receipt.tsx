import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
const Receipt: React.FC = () => {
  const location = useLocation();

  // Function to parse query parameters
  const getQueryParams = (search: string) => {
    return new URLSearchParams(search);
  };

  // Extract the query parameters
  const queryParams = getQueryParams(location.search);
  const amount = queryParams.get('amount');
  const description = queryParams.get('description');
  const reference = queryParams.get('reference');
  const name = queryParams.get('name');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md relative">
        <div className="flex justify-center">
          <div className="bg-green-100 text-green-500 rounded-full p-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-2">Payment Success!</h2>
        <p className="text-center text-gray-500 mb-4">{amount && `AMOUNT ${Number(amount).toLocaleString()}`}</p>

        <div className="px-4 py-8  bg-neutral-50  border-spacing-9 mt-12">
          <div className="mb-2">
            <p className="text-gray-500">Reference Number</p>
            <p className="font-semibold">{reference}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Description</p>
            <p className="font-semibold">{description}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Name</p>
            <p className="font-semibold">{name}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">Amount</p>
            <p className="font-semibold">{amount && ` ${Number(amount).toLocaleString()}`}</p>
          </div>
        </div>

        <Button text="Back to dashboard" loading={false}/>
      </div>
    </div>
  );
};

export default Receipt;
