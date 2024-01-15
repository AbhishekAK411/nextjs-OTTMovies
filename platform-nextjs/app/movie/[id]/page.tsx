import getSingleMovie from "@/lib/getSingleMovie"
import getSingleMovieCast from "@/lib/getSingleMovieCast"
import type { Metadata } from "next"
import { Suspense } from "react";
import Loading from "../loading";

type Params = {
    params: {
        id: string
    }
}

export const generateMetadata = async({params: {id}}: Params): Promise<Metadata> => {
    const singleMovie: Promise<Singlemovie> = getSingleMovie(id);

    const movie = await singleMovie;
    
    return {
        title: movie.original_title,
        description: movie.overview
    }
}

const Singlemovie = async({params: {id}}: Params) => {
    const singleMovie: Promise<Singlemovie> = getSingleMovie(id);
    const singleCast: Promise<Singlecast> = getSingleMovieCast(id);

    const [movie, cast] = await Promise.all([singleMovie, singleCast]);
    return (
        <>
            <Suspense fallback={<><Loading /></>}>
                <main className="bg-slate-300 w-full h-screen relative">
                    <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}} className="absolute top-0 -z-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover "></div>
                    <div className="absolute top-0 z-10 w-full h-full bg-black bg-opacity-20 backdrop-blur-lg drop-shadow-lg"></div>
                    <div className=" relative top-full w-full h-screen bg-gradient-to-t from-slate-200 to-slate-700">
                        
                    </div>
                </main>
            </Suspense>
        </>
    )
}

export default Singlemovie;