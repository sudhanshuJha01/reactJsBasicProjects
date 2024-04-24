import React ,{useState} from 'react'

function App() {
  const [temprature , setTemprature] = useState(10)
   
   const addTemp = ()=>{
        setTemprature(temprature+1)
   }
   const subTemp = ()=>{
    if(temprature <= -10) return;
      setTemprature(temprature-1)
   }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display ">{temprature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={addTemp}>+</button>
        <button onClick={subTemp}>-</button>
      </div>
    </div>
  )
}

export default App
