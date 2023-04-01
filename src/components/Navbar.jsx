// Navbar of the website

import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {

    var [navIconClicked, setNavIconClicked] = useState(false)

    return <div className=" bg-white sticky top-0 z-10">

        <nav className="flex justify-between shadow-xl">


                <h1 className=" flex font-nav text-heading py-7 text-3xl ml-10 md:text-4xl lg:ml-24 lg:py-9 xl:ml-36">
                    <a href="/" className="text-orange-600">ALLRecipes</a>
                    <img className="w-12" src="/pics/spoon2.png" alt="spoon-pic" />
                </h1>


                <ul className="hidden md:flex md:items-center py-7 ml-auto lg:py-9 lg:mr-10 xl:mr-16">

                    <li>
                       <Link to="/about" className="nav-a">About Us</Link>
                    </li>

                    <li>
                    <Link to="" className="nav-a">Login</Link>
                    </li>

                    <li>
                    <Link to="/register" className="nav-a">Register</Link>
                    </li>

                </ul>



            {navIconClicked ?

                <div className="py-7 mr-10">
                                                      {/* svg of the X icon */}
                    <svg
                        onClick={() => setNavIconClicked(false)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer text-orange-600 ml-auto md:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>


                    <ul className="md:hidden mt-10">

                        <li className="mt-2">
                        <Link to="/about" className="nav-a">About Us</Link>
                        </li>

                        <li className="mt-2">
                        <Link to="" className="nav-a">Login</Link>
                        </li>

                        <li className="mt-2">
                        <Link to="/register" className="nav-a">Register</Link>
                        </li>

                    </ul>
                </div> :
                <div className="py-7 mr-10">   {/* svg of the menu icon */}
                    <svg
                        onClick={() => setNavIconClicked(true)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer text-orange-600 md:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            }


        </nav>
    </div>
}

export default Navbar