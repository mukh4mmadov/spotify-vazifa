import { IoPersonAddOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function RightBar() {
    return (
        <div className="pt-7 px-5 bg-[#121212] h-full min-h-screen shadow-lg">
            <div className="flex items-center justify-between font-circular">
                <h2 className="font-bold text-xl text-[#CCCCCC] bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    Friend Activity
                </h2>
                <div className="flex items-center gap-3">
                    <IoPersonAddOutline className="text-[#B3B3B3] w-6 h-6 cursor-pointer hover:text-white" />
                    <FaPlus className="rotate-45 text-[#B3B3B3] w-6 h-6 cursor-pointer hover:text-white" />
                </div>
            </div>
            <p className="font-circular text-[16px] text-gray-400 mt-7 mb-5">
                Let friends and followers on Spotify see what you’re listening to.
            </p>
            <div className="space-y-6">
                {Array(3).fill(0).map((_, index) => (
                    <img key={index} src="./rightBar.svg" alt="Friend Activity" className="rounded-lg shadow-md hover:shadow-lg transition duration-200"/>
                ))}
            </div>
            <p className="mt-4 text-gray-400">
                Go to Settings Social and enable “Share my listening activity on Spotify.” You can turn this off at any time.
            </p>
            <button className="mt-4 w-full h-[62px] rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-[18px] transition hover:opacity-90 shadow-lg">
                SETTINGS
            </button>
        </div>
    );
}

export default RightBar;