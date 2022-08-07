import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import OrderConfirmed from './components/OrderConfirmed/OrderConfirmed';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/confirmed" element={<OrderConfirmed/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
