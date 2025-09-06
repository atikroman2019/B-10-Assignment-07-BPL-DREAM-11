import { useEffect, useState } from "react";
import { IoFlagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";




const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect( ()=> {
        fetch("/public/players.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[])
    return (
        <div className="w-2/3 mx-auto my-8">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-8">Available Players </h2>
                <div className="border rounded-lg">
                    <button className="mr-10 p-4  ">Available</button>
                    <button>Selected</button>
                </div>
            </div>

        <div className=" grid grid-cols-3 gap-6">
  {players.map(player => (
    <div key={player.id} className="p-4 border rounded-lg shadow">
      <img src={player.image} alt={player.name} className="w-full h-40 object-cover rounded" />

      <div className="flex mt-3 mb-5 gap-2">
      <FaUser />
      <h3 className="mt-[-5px] font-semibold">{player.name}</h3>
      </div>

      
 <div className="flex items-center justify-between  border-b-2 gap-2">

  <div className="flex items-center gap-2">
    <IoFlagSharp />
    <p className="text-sm text-gray-600">{player.country}</p>
  </div>
  <span className="bg-slate-100 rounded-md  mb-3 px-3 py-1 text-sm text-gray-700">
    {player.player_category}
  </span>
</div>

<p className="text-sm font-bold mt-4">Rating</p>

<div className="mt-2 mb-2">
  <p  className="text-sm mb-2">Batting: {player.batting_type}</p>
<p  className="text-sm mb-2 "> Bowling: {player.bowling_type}</p>
</div>

      <div className="flex mt-2 mb-2 font-semibold justify-between">
        <p className="mt-2">Price: {player.price}</p>
   
      <button className="border rounded-lg text-sm p-3">Choose Player</button>
      </div>

    </div>
  ))}
</div>

            
        </div>
    );
};

export default Players;