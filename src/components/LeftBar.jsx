import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic, MdOutlineCreateNewFolder } from "react-icons/md";
import { FcLike } from "react-icons/fc";

function LeftBar() {
    return (
        <div className="bg-[#121212] h-full min-h-screen">
            <nav className="pt-16 pl-7 pr-12">
                <ul className="space-y-4">
                    <li className="hover:opacity-80 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2">
                        <GoHomeFill className="w-7 h-7 text-[#FFFFFF]" />
                        <a href="#" className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                            Home
                        </a>
                    </li>
                    <li className="hover:opacity-80 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2">
                        <FaSearch className="w-6 h-6 text-[#FFFFFF]" />
                        <a href="#" className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                            Search
                        </a>
                    </li>
                    <li className="hover:opacity-80 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2">
                        <MdLibraryMusic className="w-6 h-6 text-[#FFFFFF]" />
                        <a href="#" className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                            Your Library
                        </a>
                    </li>
                    <li className="hover:opacity-80 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2">
                        <MdOutlineCreateNewFolder className="w-6 h-6 text-[#FFFFFF]" />
                        <a href="#" className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                            Create Playlist
                        </a>
                    </li>
                    <li className="hover:opacity-80 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2">
                        <FcLike className="w-6 h-6 text-[#FFFFFF]" />
                        <a href="#" className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                            Liked Songs
                        </a>
                    </li>
                </ul>
                <span className="h-[1px] bg-[#636262] w-full block my-5"></span>
                
                <ul className="playlists space-y-4">
                    {["Chill Mix", "Insta Hits", "Your Top Songs 2021", "Mellow Songs", "Anime Lofi & Chillhop Music", "BG Afro “Select” Vibes", "Afro “Select” Vibes"].map((playlist) => (
                        <li key={playlist} className="hover:opacity-80 pl-2">
                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                {playlist}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default LeftBar;
