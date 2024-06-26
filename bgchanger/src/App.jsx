import React from "react";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <div className="w-full h-screen transition duration-300 ease-in-out" style={{ backgroundColor: color }}>
      <div className="fixed bottom-0 left-0 w-1/2 mx-auto h-34 bg-black text-white rounded-full">
        <div className="flex items-center justify-center">
        <button className="m-2 px-4 py-2 border border-gray-400 rounded-full" onClick={()=>setcolor("red")}>Red</button>
        <button className="m-2 px-4 py-2 border border-gray-400 rounded-full" onClick={()=>setcolor("Green")}>Green</button>
        <button className="m-2 px-4 py-2 border border-gray-400 rounded-full" onClick={()=>setcolor("Blue")}>Blue</button>
        <button className="m-2 px-4 py-2 border border-gray-400 rounded-full" onClick={()=>setcolor("Yellow")}>Yellow</button>
      
        </div>
      </div>
    </div>
  );
}

export default App;
