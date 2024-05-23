import React from 'react'
import TodoList from './TodoList'

function TodoCard({todos,handleDelete,handleEdit}) {
  return (
    <>  
     <TodoList todos={todos}  handleDelete={handleDelete} handleEdit={handleEdit}/>   </>
  )
}

export default TodoCard