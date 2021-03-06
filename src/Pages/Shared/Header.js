import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/')
    }
  return (
    <div class="navbar sticky top-0 z-40 px-12" style={{ backgroundColor: '#010a13'}}>
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#project">Project</a>
            </li>
            
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a onClick={navigateToHome} class="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a href="#project">Projects</a>
          </li>
        
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
