import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [index,setIndex]=useState(1);
  const [nindex,setNindex]=useState(1);
  const[images,setImages]=useState([]);
  async function getData(){
    if(index<1)
     setIndex(1)

    const data= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`);
    setImages(data.data);
    setNindex("")
  }
  useEffect(()=>{
    getData()
  },[index]);
  return (
    <main className="min-h-screen bg-gray-100 px-8 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        Image Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {images.map((image,idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={image.download_url}
              alt={`Photo by ${image.author}`}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {image.author}
              </h2>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center items-center gap-6 mt-12">

        <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={()=>{
          setIndex(index-1)
        }}>
          Previous
        </button>
         <p>Page : {index}</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500" onClick={()=>{
          setIndex(index+1)
        }}>
          Next
        </button>
        <div className="flex justify-center items-center gap-3 mt-8">
  <input
    type="number"
    placeholder="Enter page number"
    onChange={(e)=>{
      if(e.target.value>0)
        setNindex(e.target.value)
    }}
    className="w-48 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500" onClick={()=>{
    setIndex(nindex)
  }}>
    Go
  </button>
</div>
      </div>

    </main>
  );
}

export default App;