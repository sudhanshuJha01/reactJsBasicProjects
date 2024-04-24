import React from "react";
import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [searchTerm, setSearch] = useState("");
  return (
    <>

      <div className="bg-emerald-400 rounded-md h-3/4 w-1/2 mx-64 my-10 contain-content">
        <input className="bg-yellow-300 w-64 h-12 rounded-lg p-2 m-16 relative top-10"
          type="text"
          placeholder="Search.."
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
      
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return <div className="text-2xl m-10 text-black font-medium">{val.first_name}</div>;
      })}
    </div>
    </>
  );
}

export default App;
