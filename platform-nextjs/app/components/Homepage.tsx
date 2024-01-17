import getAllMovies from "@/lib/getAllMovies";
import Link from "next/link";

const Homepage = async() => {

    const allMovies: Promise<Movie[]> = getAllMovies();
    const movies = await allMovies;
    
    return (
        <>
            <div className="bg-slate-300 w-full min-h-screen">
                <div className="w-full h-96 flex flex-col items-center justify-center relative">
                    <p className="text-4xl text-slate-800">Find Movies, TV Shows and more</p>
                    <input type="text" placeholder="Enter Keywords..." className="absolute bottom-20 rounded-lg px-5 h-12 w-[60%] focus:outline-none" />
                    <svg className="absolute bottom-[65px] right-[280px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#525252" viewBox="0 0 256 256"><path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path></svg>
                </div>
                <div className="w-full min-h-screen flex justify-center">
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
            </div>
        </>
    )
}

export default Homepage;