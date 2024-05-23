import React, { useState } from "react";
import data from "./component/data";

function App() {
  const [selected, setSlected] = useState(null);
  const [multi , setMulti] = useState(false)
  const [buttonData , setButtonData] = useState('Open All FAQ')

  function handleSingleSelection(questionSlected) {
      selected ? setSlected(null) : setSlected(questionSlected);

  }
  
  const handleAllFAQ = ()=>{
    
    buttonData==='Open All FAQ'?setButtonData("Close All FAQ"):setButtonData('Open All FAQ')
    multi?setMulti(false):setMulti(true)
  }

  return (
    < >
     <div className="w-1/3 ml-96 mt-24 flex-col items-center justify-center">
         <button onClick={handleAllFAQ} className="bg-red-500 p-2 rounded-xl text-white text-lg ml-44 mb-3">{buttonData}</button>
      {data.map((data) => (
        <div key={data.id} className=" border-black border-2 p-3 bg-red-900 text-ellipsis text-white text-xl">
          <div onClick={() => handleSingleSelection(data.id)} className="flex items-center justify-center gap-2 cursor-pointer" >
            <div> Question :{data.question}</div>
            <span>+</span>
          </div>
          <div className="bg-red-700 text-ellipsis text-white rounded-md">
          {multi?<div> Answer :{data.answer}</div>:(selected === data.id ? <div> Answer :{data.answer}</div> : null)}
    
          </div>
          
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
