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
                <main className="bg-slate-300 w-full min-h-screen relative">
                    <div className="w-full h-screen border-black border flex">
                        <div className="w-1/3 h-full border-black border"></div>
                        <div className="w-1/3 h-full border-black border"></div>
                        <div className="w-1/3 h-full border-black border"></div>
                    </div>
                </main>
            </Suspense>
        </>
    )
}

export default Singlemovie;