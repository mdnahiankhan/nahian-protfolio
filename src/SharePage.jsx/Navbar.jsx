import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaWatchmanMonitoring, FaAngleDoubleRight, FaPhone } from 'react-icons/fa'

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link to='/'><FaHome />Home</Link></li>
        <li><Link><FaUser /> About</Link></li>
        <li><Link to='/projects'><FaWatchmanMonitoring />Projects</Link></li>
        <li><Link to='/contact'><FaPhone />Contact Me</Link></li>
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Nahian's Porfolio</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Hire Me <FaAngleDoubleRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;