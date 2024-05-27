import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

function App() {
  
  return (
    <>
      <Router>
        <NavBar />
          <Routes >
              <Route path='/' element={<Shop />} />
              <Route path='/cart'  element={<Cart/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App