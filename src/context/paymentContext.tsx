import React, { createContext, useContext, useState } from 'react';

interface PaymentContextType {
  paymentMethodContext: string;
  setPaymentMethodContext: (method: string) => void;
  loading: boolean;
  isLoading: (loading: boolean) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  //Default paymnt method is paystack unless user chooses another
  const [paymentMethodContext, setPaymentMethodContext] = useState<string>('Paystack');
  const [loading, setLoading] = useState<boolean>(false);

  // Method to update the loading state
  const isLoading = (loading: boolean) => {
    setLoading(loading);
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentMethodContext,
        setPaymentMethodContext,
        loading,
        isLoading,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook to use the payment context
export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePaymentContext must be used within a PaymentProvider');
  }
  return context;
};
