import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); 
  return (
    <div className="hidden md:flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <img onClick={()=> navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

  <ul className="flex items-start gap-8 font-medium">
        <li>
          <NavLink to="/" className="py-1 flex flex-col items-center">
            HOME
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="py-1 flex flex-col items-center">
            ALL DOCTORS
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className="py-1 flex flex-col items-center">
            ABOUT US
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="py-1 flex flex-col items-center">
            CONTACT
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {
        token 
        ? <div className="flex items-center gap-2 cursor-pointer group relative">
<img className="w-10 h-10 rounded-full object-cover" src={assets.profile_pic} alt="Profile" />
<img className="w-3" src={assets.dropdown_icon} alt="Dropdown" />
        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div>
                <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer whitespace-nowrap">My Profile</p>
                <p onClick={()=>navigate('my-appointment')} className ="hover:text-black cursor-pointer whitespace-nowrap">My Appointment</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer whitespace-nowrap">Logout</p>
            </div>
          </div>
        </div>

          :<button onClick={() => navigate('/login')}className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">CREATE ACCOUNT</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
