import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/images/file.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  return (
    <div className="bg-[#C046191A]">

      <div className="navbar max-w-7xl mx-auto py-3 md:px-6 px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[15] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}>Home</NavLink>
              <NavLink to='/allFoods' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}>All Foods</NavLink>
              <NavLink to='/gallery' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}>Gallery</NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <img className="md:w-16 md:h-16 w-10 h-10" src={logo} alt="" />
            <a className="md:text-4xl md:ml-3 ml-1 font-bold bg-gradient-to-r from-[#C04619] to-[#FFD133] text-transparent bg-clip-text">FlavorFleet</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex space-x-6 items-center">
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg border border-[#C04619]  ' : 'font-semibold text-[#FF8033]'}>Home</NavLink>
              <NavLink to='/allFoods' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg border border-[#C04619]  ' : 'font-semibold text-[#FF8033]'}>All Foods</NavLink>
              <NavLink to='/gallery' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg border border-[#C04619]  ' : 'font-semibold text-[#FF8033]'}>Gallery</NavLink>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end md:mr-3 flex">
              <div tabIndex={0} role="button" className="btn btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || 'User name not found'}>
                <div className=" rounded-full">
                  <img className="w-full" alt="" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                </div>
              </div>
              <ul tabIndex={0} className="mt-12 z-[15] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                <NavLink to='/myAdd' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}>My added food items</NavLink>
             
                </li>
                <li>
                <NavLink to='/add' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}>Add a food item</NavLink>
                </li>
                <li>
                <NavLink to='/myOrder' className={({ isActive }) => isActive ? 'text-[#FF8033] px-4 py-2 font-bold rounded-lg ' : 'font-semibold text-[#FF8033]'}> My ordered food items</NavLink>
                </li>
              </ul>

              <button onClick={handleLogout} className="btn md:ml-3 ml-1 text-orange-600 font-bold border-orange-700 bg-white  hover:bg-gradient-to-r from-orange-600 to-orange-500 hover:text-white">
                Logout
              </button>
              
            </div>

              :

              <NavLink to='/login'
                className={({ isActive }) => isActive ? 'text-orange-600 px-4 py-2 font-bold rounded-lg border border-orange-700  ' : 'font-semibold text-orange-800'}>
                Login</NavLink>

          }
        </div>
      </div>

    </div>
  );
};

export default Navbar;