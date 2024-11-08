import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic, MdOutlineCreateNewFolder } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div className="bg-[#121212] h-full min-h-screen shadow-lg">
      <nav className="pt-16 pl-7 pr-12">
        <ul className="space-y-4">
          {[
            { icon: GoHomeFill, label: "Home", path: "/" },
            { icon: FaSearch, label: "Search" },
            { icon: MdLibraryMusic, label: "Your Library" },
            { icon: MdOutlineCreateNewFolder, label: "Create Playlist" },
            { icon: FcLike, label: "Liked Songs", path: "/likes" },
          ].map(({ icon: Icon, label, path }, index) => (
            <li
              key={index}
              className="hover:opacity-90 duration-200 flex items-center gap-5 border-l-4 border-transparent hover:border-l-[#1DB954] pl-2"
            >
              <Link to={path} className="flex items-center gap-5">
                <Icon className="w-7 h-7 text-[#FFFFFF]" />
                <span className="font-circular font-bold text-[18px] text-gray-200 hover:text-[#1DB954]">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="h-[1px] bg-gradient-to-r from-gray-600 to-gray-800 w-full block my-5"></span>

        <ul className="playlists space-y-4">
          {[
            "Chill Mix",
            "Insta Hits",
            "Your Top Songs 2021",
            "Mellow Songs",
            "Anime Lofi & Chillhop Music",
            "BG Afro “Select” Vibes",
            "Afro “Select” Vibes",
          ].map((playlist) => (
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
