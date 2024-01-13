const Navbar = () => {
    return (
        <>
            <nav className="w-full h-14 backdrop-blur-3xl sticky bg-slate-800/95 flex justify-evenly shadow-2xl">
                <div className="w-1/6 h-full flex items-center justify-center">
                    <p className="text-xl text-cyan-300 cursor-pointer">Flix</p>
                </div>
                <div className="w-8/12 h-full flex justify-evenly">
                    <div className="w-6/12 h-full flex items-center justify-evenly">
                        <p className="text-lg text-cyan-300 hover:underline hover:underline-offset-4 cursor-pointer">Top Rated</p>
                        <p className="text-lg text-cyan-300 hover:underline hover:underline-offset-4 cursor-pointer">Popular</p>
                        <p className="text-lg text-cyan-300 hover:underline hover:underline-offset-4 cursor-pointer">Upcoming</p>
                    </div>
                    <div className="w-5/12 h-full flex items-center justify-center relative">
                        <input className="w-9/12 h-[60%] p-2 rounded-md focus:outline-none text-sm" placeholder="Search" />
                        <svg className="absolute right-14 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#525252" viewBox="0 0 256 256"><path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path></svg>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;