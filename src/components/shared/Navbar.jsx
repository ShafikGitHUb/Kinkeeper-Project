import React from 'react';
import logopng from "../../assets/logo.png"
import { NavLink } from 'react-router';

const Navbar = () => {
      const link = ({ isActive }) =>
    `px-4 py-1 rounded border transition-all duration-200
     ${isActive? "bg-[#244D3F] border-[#244D3F] text-white": "border-transparent text-black hover:border-[#244D3F] hover:text-[#244D3F]"
     }`;
    return (
            <nav className='shadow'>
      <div className='flex justify-between items-center container mx-auto gap-4 py-2 px-2'>

        <NavLink to="/">
          <img src={logopng} alt="Logo" />
        </NavLink>

        <ul className='flex  items-center sm:gap-1.5 md:gap-3'>
          <li>
            <NavLink to="/" className={link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={link}>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={link}>
              Stats
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
    );
};

export default Navbar;