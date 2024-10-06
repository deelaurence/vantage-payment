

const Pay = () => {



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between p-4">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-700 text-lg">&#8592;</button>
        <h2 className="text-lg font-semibold">Payment</h2>
        <div></div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Cards</h3>
        <div className="bg-gradient-to-r from-purple-500 to-primaryColor text-white rounded-xl p-6 shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold tracking-wider">UltimateFly Reward</h4>
              <p className="text-sm font-light tracking-wide">Platinum</p>
            </div>
            <div className="flex items-center">
              <span className="text-sm bg-white text-primaryColor rounded-full px-2 py-1">CARD</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg tracking-widest font-semibold">8394 2567 3467 9930</p>
            <div className="flex justify-between mt-2">
              <p className="text-sm">08/25a</p>
              <p className="text-sm">Regina Doe</p>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Add New Card
        </button>
      </div>

      {/* Other Payment Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Other Payment Option</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Mastercard/Visa</span>
            </div>
            <input type="radio" name="payment" className="form-radio text-primaryColor" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
            <div className="flex items-center space-x-4">
              <span className="text-sm">PayPal</span>
            </div>
            <input type="radio" name="payment" className="form-radio text-primaryColor" />
          </div>

          <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Coin Payment</span>
            </div>
            <input type="radio" name="payment" className="form-radio text-primaryColor" />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button className="w-full py-3 bg-primaryColor text-white rounded-lg text-lg font-semibold">
        Continue
      </button>
    </div>
  );
};

export default Pay;
