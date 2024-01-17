import { NextResponse } from "next/server"
import axios from 'axios';

const Api_key: string = "c45a857c193f6302f2b5061c3b85e743";

export const GET = async() => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US`)
        if(!response) return NextResponse.json({message: "Could not fetch data."}, {status: 400});

        return NextResponse.json({data: response.data.results}, {status: 200});
    
    } catch (error) {
        return NextResponse.json({message: `Connection error: ${error}`}, {status: 500});
    }
}