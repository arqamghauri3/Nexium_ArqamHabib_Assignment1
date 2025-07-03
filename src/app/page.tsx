'use client'
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)


  const generateQuote = async() => {
    setIsDisabled(true)
    try {
      const response = await axios.get('/api/generate-quote')
      setQuote(response.data[0].quote)
      setAuthor(response.data[0].author)
      setIsDisabled(false)

      return response
    } catch (error) {
      console.log("Error", error);
      
    }
    
    
  };

  useEffect(()=>{
    
  },[])


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Quote Generator</h1>
      <p className="text-xl font-semibold">{quote} - "{author}"</p>
      <Button className="bg-black  text-white p-2 rounded-md cursor-pointer" disabled={isDisabled} onClick={generateQuote}>
        {isDisabled ? <p>Generating Quote</p> : <p>Generate Quote</p>}
      </Button>
    </div>
  );
}
