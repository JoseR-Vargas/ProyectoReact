
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import categories from "./mock/mockData.js"

function App() {

  const title = "Jose Vargas Proyecto React Coder House"

  return (
  <>
  <Navbar categories={categories} />
  <ItemListContainer title={title}/>
  </>
);    
}

export default App
