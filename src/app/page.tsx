'use client'
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");


  const generateQuote = async() => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers:{
          'X-Api-Key': 'ZmXkl3O/OGYy8N1p2mIS8w==MrAffKqyQQN46BPn'
        }
      })
      console.log(response.data[0].quote);
      setQuote(response.data[0].quote)
      setAuthor(response.data[0].author)
      

      return response
    } catch (error) {
      console.log("Error", error);
      
    }
    
    
  };

  useEffect(()=>{
    generateQuote()
    
  },[])


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Quote Generator</h1>
      <p className="text-xl font-semibold">{quote} - "{author}"</p>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={generateQuote}>Generate Quote</button>
    </div>
  );
}
