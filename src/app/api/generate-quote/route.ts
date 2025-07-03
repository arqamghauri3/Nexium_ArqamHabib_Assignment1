import axios from "axios";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers:{
            'X-Api-Key': process.env.X_Api_Key
          }
        })
  
        return NextResponse.json(response.data)
      } catch (error) {
        console.log("Error", error);
        
      }
  
}


