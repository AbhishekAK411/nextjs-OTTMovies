import getSingleMovie from "@/lib/getSingleMovie"
import getSingleMovieCast from "@/lib/getSingleMovieCast"
import type { Metadata } from "next"
import { Suspense } from "react";
import Loading from "../loading";
import Detailsegment from "@/app/components/Detailsegment";

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
                <main className=" bg-slate-300 w-full min-h-screen relative">
                    <div className="w-full h-screen flex">
                        <div className="w-1/3 h-full flex items-center justify-center">
                            <div className="w-[65%] h-[70%] rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt="movie_image"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="w-2/3 h-full flex items-center">
                            <div className="w-[90%] h-[70%]">
                                <Detailsegment movieProps={movie} />
                            </div>
                        </div>
                    </div>
                </main>
            </Suspense>
        </>
    )
}

export default Singlemovie;