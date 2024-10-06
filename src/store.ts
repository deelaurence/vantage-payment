import axios from 'axios'

class Store {
    private paymentMethods: string[] = ["Paystack", "Paypal","Crypto"];
    baseUrl: string="http://localhost:3000"
    constructor(initialData: string[] = []) {
      if (initialData.length > 0) {
        this.paymentMethods = initialData;
      }
    }
  
    public getPaymentMethods(): string[] {
      return this.paymentMethods;
    }

    initiatePaystack = async (paymentData: { amount: number; description: string }, token: string) => {
    try {
        const response = await axios.post(
        `${this.baseUrl}/payment/paystack/initiate`,
        paymentData, 
        {
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, 
            },
        }
        );

        const { redirect } = response.data.payload;
        console.log(redirect)
        // Redirect to Paystack checkout page
        window.location.href = redirect;
    } catch (error:any) {
        const errorFromApi:string = error.response.data.reason
        console.error('Error initiating Paystack payment:', error);
        return errorFromApi||error.message;
    }
    };

  }
  
  export default Store;
  