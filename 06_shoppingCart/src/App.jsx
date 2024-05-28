import React,{useState} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

function App() {
  const [products, setProducts] = useState([]);
  const [items , setItems] = useState([]);
  console.log(items);
  
  const handleAddInCart = (product)=>{
    setItems(prevItem=>[...prevItem , product])
  }

  return (
    <>
      <Router>
        <NavBar />
          <Routes >
              <Route path='/' element={<Shop products={products} setProducts={setProducts} setItems={setItems} handleAddInCart={handleAddInCart} />} />
              <Route path='/cart'  element={<Cart items={items}/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App