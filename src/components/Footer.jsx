// Footer of the website

import React from "react";

function Footer() {

const year = new Date().getFullYear()

    return <div className=" bg-orange-600 py-8 text-center">
        <footer className="">
            <i className="fa-brands fa-facebook text-white mx-5 "></i>
            <i className="fa-brands fa-twitter text-white mx-5 "></i>
            <i className="fa-solid fa-envelope text-white mx-5 "></i>
            <p className=" text-white mt-5 font-semibold ">Copyright ⓒ {year} AllRecipes</p>
        </footer>
    </div>
}

export default Footer