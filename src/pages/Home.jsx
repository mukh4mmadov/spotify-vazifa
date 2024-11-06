import React, { useEffect, useState } from "react";
import http from "../axios";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Home() {
    const [playlists, setPlaylists] = useState({
        featured: [],
        toplists: [],
        yourlists: [],
        recently: [],
        jump: [],
        uniquely: [],
    });
    const [showAll, setShowAll] = useState({
        featured: false,
        toplists: false,
        yourlists: false,
        recently: false,
        jump: false,
        uniquely: false,
    });

    const navigate = useNavigate();
    const handlePlaylistClick = (id) => navigate(`/details/${id}`);

    const toggleShowAll = (listName) => setShowAll((prev) => ({
        ...prev, [listName]: !prev[listName]
    }));

    const fetchPlaylists = async () => {
        try {
            const responses = await Promise.all([
                http.get("featured-playlists"),
                http.get("categories/toplists/playlists"),
                http.get("categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"),
                http.get("categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"),
                http.get("categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"),
                http.get("categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"),
            ]);

            setPlaylists({
                featured: responses[0].data.playlists.items.slice(0, 6),
                toplists: responses[1].data.playlists.items,
                yourlists: responses[2].data.playlists.items,
                recently: responses[3].data.playlists.items,
                jump: responses[4].data.playlists.items,
                uniquely: responses[5].data.playlists.items,
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const renderPlaylistSection = (title, listName, items) => (
        <div className="bg-[#121212] p-7 rounded-lg mt-7">
            <div className="flex items-center justify-between">
                <h2 className="text-white text-[30px] font-circular font-bold tracking-[1px]">{title}</h2>
                <button
                    onClick={() => toggleShowAll(listName)}
                    className="font-bold text-[16px] text-[#ADADAD]"
                >
                    {showAll[listName] ? "SHOW LESS" : "SEE ALL"}
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-7">
                {items.slice(0, showAll[listName] ? items.length : 4).map((val, ind) => (
                    <div
                        key={ind}
                        onClick={() => handlePlaylistClick(val.id)}
                        className="w-[224px] p-5 gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer"
                    >
                        <img
                            src={val.images[0]?.url}
                            className="w-[182px] h-[182px] rounded-lg object-cover"
                            alt=""
                        />
                        <h4 className="text-white font-circular font-bold text-[18px] mt-4">{val.name}</h4>
                        <p className="text-white font-circular mt-4">{val.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-gradient-to-b from-purple-800 to-black min-h-screen">
            <div className="p-7">
                <div className="flex gap-4">
                    <GrPrevious className="w-10 h-10 py-2 px-3 text-white bg-[#000] rounded-full" />
                    <GrNext className="w-10 h-10 py-2 px-3 text-white bg-[#000] rounded-full" />
                </div>
                <h1 className="mt-7 text-white text-[39px] font-circular font-bold tracking-[1px]">
                    Good afternoon
                </h1>
                <div className="grid grid-cols-2 gap-7 mt-7">
                    {playlists.featured.map((value, index) => (
                        <div
                            key={index}
                            onClick={() => handlePlaylistClick(value.id)}
                            className="flex items-center gap-5 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 duration-200 cursor-pointer"
                        >
                            <img
                                src={value.images[0]?.url}
                                className="w-20 h-20 rounded-l-md"
                                alt=""
                            />
                            <h2 className="text-white font-circular font-bold text-[20px]">
                                {value.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
            {renderPlaylistSection("Your top mixes", "toplists", playlists.toplists)}
            {renderPlaylistSection("Made For You", "yourlists", playlists.yourlists)}
            {renderPlaylistSection("Recently played", "recently", playlists.recently)}
            {renderPlaylistSection("Jump Back In", "jump", playlists.jump)}
            {renderPlaylistSection("Uniquely Yours", "uniquely", playlists.uniquely)}
        </div>
    );
}

export default Home;
