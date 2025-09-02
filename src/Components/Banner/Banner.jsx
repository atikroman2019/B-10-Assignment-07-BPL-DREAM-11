
import banner from "../../../src/assets/banner-main.png"
import shadow from "../../assets/bg-shadow.png"
const Banner = ({handleClaim}) => {

    return (
           <div
      className="relative w-2/3 mx-auto h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${shadow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <img src={banner} alt="cricket" className="w-32 mb-4" />

        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-300 mb-6">
          Beyond Boundaries Beyond Limits
        </p>
        <button onClick={handleClaim} className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-lg border-2 border-black shadow-md transition">
          Claim Free Credit
        </button>
      </div>
    </div>

    );
};

export default Banner;