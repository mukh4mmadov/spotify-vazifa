import React, { useEffect, useState } from "react";

const Likes = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];
    setLikedSongs(storedSongs);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-800 to-black min-h-screen p-7">
      <h1 className="text-white text-[39px] font-bold">Liked Songs</h1>
      {likedSongs.length > 0 ? (
        <div className="mt-7">
          {likedSongs.map((song, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-[#333] rounded-lg mb-4"
            >
              <span className="text-white flex items-center gap-2">
                {index + 1}
                <img
                  className="w-10 h-10 rounded-full"
                  src={song.album.images[0]?.url}
                  alt={song.album.name}
                />
                <div>
                  {song.name}
                  <br />
                  <span className="text-gray-400 text-sm">
                    {song.artists.map((artist) => artist.name).join(", ")}
                  </span>
                </div>
              </span>
              <span className="text-gray-400">{song.album.name}</span>
              <span className="text-gray-400">
                {Math.floor(song.duration_ms / 60000)}:
                {(Math.floor((song.duration_ms % 60000) / 1000)).toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white mt-7">Hech qanday liked qo'shiqlar topilmadi.</p>
      )}
    </div>
  );
};

export default Likes;
