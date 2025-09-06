import { useEffect, useState } from "react";
import { IoFlagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Players = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // Add player
  const handleSelect = (player) => {
    if (selectedPlayers.length >= 6) {
      setModalMessage("❌ You can only select up to 6 players!");
      setShowModal(true);
      return;
    }

    if (coins < player.price) {
      setModalMessage("❌ Not enough coins to select this player!");
      setShowModal(true);
      return;
    }

    if (!selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoins(coins - player.price); // ✅ reduce balance
    }
  };

  // Remove player (refund coins)
  const handleRemove = (id) => {
    const playerToRemove = selectedPlayers.find((p) => p.id === id);
    if (playerToRemove) {
      setCoins(coins + playerToRemove.price); // ✅ refund balance
    }
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
  };

  return (
    <div className="w-2/3 mx-auto my-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-8">Available Players</h2>
        <div className="border rounded-lg overflow-hidden flex">
          <button
            className={`px-4 py-2 ${
              activeTab === "available" ? "bg-yellow-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("available")}
          >
            Available
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "selected" ? "bg-yellow-200 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Available Tab → Show Player Cards */}
      {activeTab === "available" && (
        <div className="grid grid-cols-3 gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="p-4 border rounded-lg shadow bg-white"
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-40 object-cover rounded"
              />

              <div className="flex mt-3 mb-5 gap-2">
                <FaUser />
                <h3 className="mt-[-5px] font-semibold">{player.name}</h3>
              </div>

              <div className="flex items-center justify-between border-b-2 gap-2 pb-2">
                <div className="flex items-center gap-2">
                  <IoFlagSharp />
                  <p className="text-sm text-gray-600">{player.country}</p>
                </div>
                <span className="bg-slate-100 rounded-md px-3 py-1 text-sm text-gray-700">
                  {player.player_category}
                </span>
              </div>

              <p className="text-sm font-bold mt-4">Rating</p>

              <div className="mt-2 mb-2">
                <p className="text-sm mb-2">Batting: {player.batting_type}</p>
                <p className="text-sm mb-2">Bowling: {player.bowling_type}</p>
              </div>

              <div className="flex mt-2 mb-2 font-semibold justify-between items-center">
                <p className="mt-2">Price: {player.price}</p>

                <button
                  onClick={() => handleSelect(player)}
                  className="border rounded-lg text-sm px-3 py-2 hover:bg-gray-100"
                >
                  Choose Player
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Tab → Show Compact Rows with Delete */}
      {activeTab === "selected" && (
        <div className="space-y-4">
          {selectedPlayers.length === 0 ? (
            <p className="text-gray-600">No players selected.</p>
          ) : (
            selectedPlayers.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between border rounded-lg p-3 shadow-sm bg-white"
              >
                {/* Thumbnail */}
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-12 h-12 object-cover rounded"
                />

                {/* Info */}
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{player.name}</h3>
                  <p className="text-sm text-gray-600">
                    {player.batting_type} | {player.bowling_type}
                  </p>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => handleRemove(player.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-bold text-red-600 mb-4">Error</h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;
