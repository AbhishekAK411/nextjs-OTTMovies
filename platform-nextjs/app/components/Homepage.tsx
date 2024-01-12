import getAllMovies from "@/lib/getAllMovies";

const Homepage = async() => {

    const allMovies: Promise<Movie[]> = getAllMovies();
    const movies = await allMovies;
    return (
        <>
            <div className="bg-slate-300 w-full h-screen">
                
            </div>
        </>
    )
}

export default Homepage;