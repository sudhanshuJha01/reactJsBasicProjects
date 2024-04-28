import { useState } from "react"
import {v4 as uuidv4} from 'uuid';


function App() {
    const [item , setItem]=useState('')
    const [items , setItems]=useState([])
    const handleAdd = ()=>{
      setItems([...items , {id:uuidv4(),item ,isCompleted:false}])
      setItem("")
    }
    
    const handleDelete = (key)=>{
        console.log();
        
    }
    const handleEdit = ()=>{

    }
  return (
   <>
    <div className="nav flex bg-violet-500 items-center justify-between h-12 p-7">
      <div className="log mx-9 text-white text-3xl font-bold">MyTask</div>
      <div>
        <ul className="flex mx-9 text-white gap-5 text-xl font-medium">
          <li>Home</li>
          <li>Task</li>
        </ul>
      </div>
    </div>
    <div className="upperCard bg-pink-300 shadow-md border-1 m-12 p-4 rounded-2xl lg:w-1/2 lg:mx-96">
      <h1 className="text-2xl font-semibold ">New Todos:</h1>
      <input value={item} 
      onChange={e=>{
        e.preventDefault();
        setItem(e.target.value)
      }}
      className="my-4 p-2 rounded-lg w-64" type="text" placeholder="Please Enter Your Work Here" />
      <button onClick={handleAdd} className=" bg-pink-600 hover:bg-pink-700 hover:font-medium p-2 w-16 text-white rounded-xl mx-5">Add</button>
    </div>
    <div  className="lowerCard shadow-md bg-pink-300 m-12 p-4 rounded-2xl lg:w-1/2 lg:mx-96">
      <span className="text-xl font-serif font-medium mx-2">Edit:</span>
      <input className="p-1 w-56 rounded-lg " type="text"  />
      <button className="bg-pink-600 p-2 rounded-xl w-12 text-white hover:bg-pink-700 hover:font-semibold mx-2">Save</button>
      {items.map((val)=>{

      
      return <div key={val.id} className="toDolist flex justify-center items-center my-7">
        <ul >
          <li  >
          <span  className=" text-xl">{val.item}</span>
          </li>
        </ul>
              
        
        <div className="btn">
          <button onClick={handleEdit} className="bg-pink-600 p-2 rounded-xl w-12 text-white hover:bg-pink-700 hover:font-semibold mx-4">Edit</button>

          <button onClick={()=>handleDelete(e,val.id)} className="bg-pink-600 p-2 rounded-xl w-16 text-white hover:bg-pink-700 hover:font-semibold mx-4">delete</button>
        </div>
      </div>
    })}
    </div>
   </>
  )
}

export default App
