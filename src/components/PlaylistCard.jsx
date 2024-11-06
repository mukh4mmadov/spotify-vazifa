function PlaylistCard({ imageUrl, name, description, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-black w-[224px] p-5 gap-5 text-[#000] bg-opacity-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-200 cursor-pointer"
        >
            <img
                src={imageUrl}
                className="w-[182px] h-[182px] rounded-lg object-cover"
                alt={name}
            />
            <h4 className="text-white font-circular font-bold text-[18px] mt-4">
                {name}
            </h4>
            {description && (
                <p className="text-gray-400 font-circular mt-4">{description}</p>
            )}
        </div>
    );
}

export default PlaylistCard;
