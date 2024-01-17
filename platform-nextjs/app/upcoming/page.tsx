import { Suspense } from "react";
import Loading from "./loading";
import axios from "axios";
import Link from "next/link";

const Upcoming = async() => {
    const response = await axios.get("http://localhost:3000/api/upcoming");
    const movies: Array<Singlemovie> = response?.data?.data;
    return (
        <>
            <Suspense fallback={<><Loading /></>}>
                <main className="pt-16 w-full min-h-screen bg-slate-300">
                    <div className="w-full h-full flex justify-center">
                        <div className="w-[95%] h-[90%] px-5 flex flex-wrap justify-start gap-x-2 gap-y-2">
                            {movies.length > 0 ? (<>
                                {movies.map((movie => (
                                    <div key={movie.id} className="w-[13.5%] h-[40%] overflow-hidden rounded-2xl shadow-md">
                                        <Link href={`/movie/${movie.id}`}><img className="w-full h-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></Link>
                                    </div>
                                )))}
                            </>) : (<>
                                <p className="m-auto text-2xl">Movies not found.</p>
                            </>)}
                        </div>
                    </div>
                </main>
            </Suspense>  
        </>
    )
}

export default Upcoming;