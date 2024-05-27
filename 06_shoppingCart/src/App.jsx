import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

function App() {
  
function addInCart(){

}
  return (
    <>
      <Router>
        <NavBar />
          <Routes >
              <Route path='/' element={<Shop addInCart={addInCart}/>} />
              <Route path='/cart'  element={<Cart/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App