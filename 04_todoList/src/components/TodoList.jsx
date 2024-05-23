import React from "react";

function TodoList({todos,handleDelete,handleEdit}) {


  return (

    
    <>
      {todos.map((todo ,todoIndex) => {
        return (
          <li key={todoIndex} className="list-none">
          <div className="rounded-xl ml-72 p-5 mt-5 text-white text-xl bg-pink-500 w-1/2 flex items-center justify-between">
            <span className="w-1/3">{todo}</span>
            <div >
              <i onClick={()=>handleEdit(todo , todoIndex)} className="fa-solid fa-pen-to-square mr-7"></i>
              <i onClick={()=>handleDelete(todoIndex)} className="fa-solid fa-trash"></i>
              </div>
          </div>
          </li>
        );
      })}
    </>
  );
}

export default TodoList;
