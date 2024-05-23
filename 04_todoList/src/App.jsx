import React,{ useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoCard from './components/TodoCard'

function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue , setTodoValue]=useState('')

   const hadleAddFUnction =(newTodo)=>{
    setTodos([...todos , newTodo])
   }

   const handleDelete = (toBeDeleteIndex)=>{
    console.log(toBeDeleteIndex);
    
    const newTodos = todos.filter((todo,index)=>
          index!=toBeDeleteIndex
    )
      setTodos(newTodos)
   }

  const handleEdit=(todo,todoIndex)=>{
    setTodoValue(todo) 
    handleDelete(todoIndex)
  }
  return (
  <>
    <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} hadleAddFUnction={hadleAddFUnction}/>
    <TodoCard todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}  />
  </>
  )
}

export default App
