"use client";

type DetailSegmentProps = {
    movieProps: Singlemovie
}

const Detailsegment: React.FC<DetailSegmentProps> = ({movieProps}: DetailSegmentProps) => {

    console.log(movieProps);
    return (
        <>
            <div className="w-full h-full px-2 flex flex-col gap-2">
                <h1 className="text-5xl font-medium font-mono uppercase">{movieProps.original_title}</h1>
                <div className="pt-5 pb-10 flex gap-3">
                    <p className="text-2xl">{movieProps.release_date}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#525252" viewBox="0 0 256 256"><path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Z"></path></svg>
                    <p className="text-2xl">{movieProps.genres.map((genre,i) => (<>{genre.name},</>))}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#525252" viewBox="0 0 256 256"><path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Z"></path></svg>
                    <p className="text-2xl">{movieProps.status}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#525252" viewBox="0 0 256 256"><path d="M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Z"></path></svg>
                    <p className="text-2xl">Rating: {movieProps.vote_average}</p>
                </div>
                <p className="pr-32 text-2xl text-justify tracking-tight">{movieProps.overview}</p>
                <div className="flex w-full gap-5 pt-5">
                    <button className="shadow-xl p-5 text-3xl rounded-2xl flex gap-2 items-center justify-center bg-[#128dd3] text-white font-medium uppercase">
                        Watch now
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#dedede" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg>
                    </button>
                    <button className="shadow-xl p-5 text-3xl rounded-2xl flex gap-2 items-center justify-center bg-slate-700/10 text-slate-800 font-medium uppercase">
                        Add to watchlist
                    </button>
                    <button className="shadow-xl p-5 text-3xl rounded-2xl flex gap-2 items-center justify-center bg-slate-700/10 text-slate-800 font-medium uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#525252" viewBox="0 0 256 256"><path d="M238,136v64a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V136a14,14,0,0,1,14-14H72a6,6,0,0,1,0,12H32a2,2,0,0,0-2,2v64a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2V136a2,2,0,0,0-2-2H184a6,6,0,0,1,0-12h40A14,14,0,0,1,238,136Zm-114.24-3.76a6,6,0,0,0,8.48,0l48-48a6,6,0,0,0-8.48-8.48L134,113.51V24a6,6,0,0,0-12,0v89.51L84.24,75.76a6,6,0,0,0-8.48,8.48ZM198,168a10,10,0,1,0-10,10A10,10,0,0,0,198,168Z"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Detailsegment;