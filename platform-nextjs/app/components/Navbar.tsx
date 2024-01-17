import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="w-full h-14 flex justify-evenly fixed z-10 border-slate-900/10 border-b backdrop-blur-lg">
                <div className="w-1/6 h-full flex items-center justify-center">
                    <Link href="/"><p className="text-lg text-slate-950 cursor-pointer">Flix</p></Link>
                </div>
                <div className="w-8/12 h-full flex justify-evenly">
                    <div className="w-6/12 h-full flex items-center justify-evenly">
                        <Link href="/top"><p className="text-base text-slate-950 cursor-pointer">Top Rated</p></Link>
                        <Link href="/"><p className="text-base text-slate-950 cursor-pointer">Popular</p></Link>
                        <Link href="/upcoming"><p className="text-base text-slate-950 cursor-pointer">Upcoming</p></Link>
                    </div>
                    <div className="w-5/12 h-full flex items-center justify-center relative">
                        <input className="w-9/12 h-[60%] p-2 rounded-md focus:outline-none text-sm" placeholder="Search" />
                        <svg className="absolute right-20 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#525252" viewBox="0 0 256 256"><path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path></svg>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;