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
                <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer whitespace-nowrap">My Profile</p>
                <p onClick={()=>navigate('/my-appointment')} className ="hover:text-black cursor-pointer whitespace-nowrap">My Appointment</p>
                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer whitespace-nowrap">Logout</p>
            </div>
          </div>
        </div>

          :<button onClick={() => navigate('/login')}className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">CREATE ACCOUNT</button>
        }
        <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden' alt="" />
        {/* -----------Mobile Menu--------------- */}
        <div>
          <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}> {/* ✅ fixed: 'fixed-w-full' → 'fixed w-full' */}
            <div className='flex items-center justify-between px-5 py-6'>
              <img className='w-36' src={assets.logo} alt="Logo" />
              <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" />
            </div>

            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink onClick={() => setShowMenu(false)} to='/'>
                <p className='px-4 py-2 rounded inline-block'>Home</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/aboutus'>
                <p className='px-4 py-2 rounded inline-block'>ABOUT US</p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                <p className='px-4 py-2 rounded inline-block'>CONTACT</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
