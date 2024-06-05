import React,{useState} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'
import {ShopContextProvider} from './context/shopContext'
function App() {
  const [products, setProducts] = useState([]);
  const [items , setItems] = useState([]);
  console.log(items);
  
  const handleAddInCart = (product)=>{
    setItems(prevItem=>[...prevItem , product])
  }

  return (
    <ShopContextProvider value={{products , items , setItems ,setProducts , handleAddInCart}}>
      <Router>
        <NavBar />
          <Routes >
              <Route path='/' element={<Shop  />} />
              <Route path='/cart'  element={<Cart />} />
          </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App