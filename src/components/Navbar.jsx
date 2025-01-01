import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar justify-center gap-2 bg-base-100">
            
            <div className="">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li><NavLink to="/">1.Registration From</NavLink></li>
                    <li><NavLink to="/login">2.Login From</NavLink></li>
                    <li><NavLink to="/course">3.Course From</NavLink></li>
                    <li><NavLink to="/fetchDisplay">4.Fetch and Display</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;