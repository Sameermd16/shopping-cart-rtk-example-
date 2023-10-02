import './App.css'
import Product from './components/Product'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Cart from './components/Cart';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
