import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext.jsx'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Layout from './components/pages/Layout.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error404 from './components/Error404/Error404.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/Cart/Cart.jsx'


function App() {

 // const title = " Proyecto React Coder House"

  return (
  <CartContextProvider>
  <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/pepito/:categoryId" element={<ItemListContainer/>} />
    <Route path="/product/:id" element={<ItemDetailContainer/>} />
    <Route path="/Cart/cart" element={<ItemDetailContainer/>} />
    <Route path="/Checkout/checkout" element={<ItemDetailContainer/>} />
    <Route path="/contact" element={  <Contact />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<Error404 />} />
    </Routes>
  </Layout>
  </BrowserRouter>
  </CartContextProvider>
);    
}

export default App
