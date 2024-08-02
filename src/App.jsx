import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Layout from './components/pages/Layout.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error404 from './components/Error404/Error404.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {

  const title = " Proyecto React Coder House"

  return (
  <>
  <BrowserRouter>
  <Layout>
    <Routes>
    <Route path="/" element={<ItemListContainer title={title}/>} />
    <Route path="/pepito/:categoryId" element={<ItemListContainer title={title}/>} />
    <Route path="/product/:id" element={<ItemDetailContainer/>} />
    <Route path="/Cart/cart" element={<ItemDetailContainer/>} />
    <Route path="/Checkout/checkout" element={<ItemDetailContainer/>} />
    <Route path="/contact" element={  <Contact />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="*" element={<Error404 />} />
    </Routes>
  </Layout>
  </BrowserRouter>
  </>
);    
}

export default App
