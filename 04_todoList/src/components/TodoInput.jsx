import React, { useState } from "react";

function TodoInput({todoValue,setTodoValue,hadleAddFUnction}) {
   
   
  return (
    <>
     <div className="ml-72 mt-36 rounded-xl bg-pink-500 p-5 w-1/2">
      <input value={todoValue} onChange={(e)=>
        setTodoValue(e.target.value)
      } className="w-2/3 text-2xl border-none h-12 p-5 rounded-md" type="text" placeholder="Enter your todo....." />
      <button onClick={()=>{
        hadleAddFUnction(todoValue);
        setTodoValue("")
        }} className="rounded-lg ml-5 hover:bg-pink-950 hover:text-blue-300 bg-pink-900 text-white text-2xl p-3">Add</button>
      </div>
    </>
  );
}

export default TodoInput;
