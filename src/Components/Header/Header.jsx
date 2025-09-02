import logo from "../../assets/logo.png"
import coin from "../../assets/icons8-coins-64.png"

const Header = ({coins}) => {

    return (
      <div className='w-2/3 mx-auto my-8 p-4 flex justify-between'>

    <img className='w-20 h-20 bg-white' src={logo} alt="" />
      
      <nav className='flex gap-10 mt-6'>
        <ul className='flex gap-6 justify-around text-lg'>
          <a href=""><li>Home</li></a>
          <a href=""><li>Fixtures</li></a>
          <a href=""><li>Teams</li></a>
          <a href=""><li>Schedules</li></a>
        </ul>
      <div className='flex justify-around w-[150px]'>
          <h4 className='font-bold text-lg'>{coins} Coin</h4>
        <img className='w-7 h-7' src={coin} alt="" />
      </div>

      </nav>
      
    </div>
    );
};

export default Header;