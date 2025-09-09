import { useEffect, useState } from "react";
import { IoFlagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Players = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // Add player
  const handleSelect = (player) => {
    const safeCoins = Number(coins) || 0;
    const price = Number(player.price) || 0;

    if (selectedPlayers.length >= 6) {
      toast.error("❌ You can only select up to 6 players!");
      return;
    }

    if (safeCoins === 0) {
      toast.error("❌ You have no coins left!");
      return;
    }

    if (selectedPlayers.find((p) => p.id === player.id)) {
      toast.info(`${player.name} is already selected.`);
      return;
    }

    if (safeCoins < price) {
      toast.error("❌ Not enough coins to buy this player!");
      return;
    }

    setSelectedPlayers((prev) => [...prev, player]);
    setCoins((prev) => (Number(prev) || 0) - price);

    toast.success(`✅ ${player.name} added successfully!`);
  };

  // Remove player (refund coins)
  const handleRemove = (id) => {
    const playerToRemove = selectedPlayers.find((p) => p.id === id);
    if (playerToRemove) {
      setCoins((prev) => prev + playerToRemove.price);
      toast.info(`ℹ️ ${playerToRemove.name} removed.`);
    }
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
  };

  return (
    <div className="w-2/3 mx-auto my-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-8">
          {activeTab === "available"
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length}/6)`}
        </h2>
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
                  {player.role}
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

      {activeTab === "selected" && (
        <div>
          <div className="space-y-4">
            {selectedPlayers.length === 0 ? (
              <p className="text-gray-500">No players selected yet.</p>
            ) : (
              selectedPlayers.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between border rounded-lg p-3 shadow-sm bg-white"
                >
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-12 h-12 object-cover rounded"
                  />

                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold">{player.name}</h3>
                    <p className="text-sm text-gray-600">
                      {player.batting_type} | {player.bowling_type} | {player.price}
                    </p>
                  </div>

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

          <button
            onClick={() => setActiveTab("available")}
            className="mt-6 bg-yellow-200 font-semibold hover:bg-yellow-300 rounded-lg px-5 py-2"
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

export default Players;
