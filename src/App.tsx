import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './context/paymentContext';
import Payment from './pages/PaymentMethod';
import Receipt from './pages/Receipt';
import './index.css'
function App() {
  return (
    <PaymentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/receipt" element={<Receipt/>} />
        </Routes>
      </Router>
    </PaymentProvider>
  );
}

export default App;


