
// Login page

import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import MiniForm from "./MiniForm"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"


function Register() {

    var [validEmail, setValidEmail] = useState(true)         // Describes if the user entered a valid email or not

    var [Password, setPassword] = useState(true)           // Describes if the user entered a valid password or not

    var [emailChange, setEmailChange] = useState(false)            //  check if email input is changed

    var [PasswordChange, setPasswordChange] = useState(false)     // check if password input is changed

    var [disableButton, setDisableButton] = useState(false)           // Enable and Disable Register button

    /* ( emailChange & passwordChange ) these stats are responsible to make
        the Login button disabled at the begining without them the Login button will be enabled before the input changes 
        because the other stats starts with true */

        function handleEmail(event) {

            const change = event.target.value;
    
            setEmailChange(true)
    
            if (!change.includes("@") || !change.includes(".com")) {
                setValidEmail(false)
            } else {
                setValidEmail(true)
            }
        }

        function handlePassword(event) {

            const change = event.target.value
    
            setPasswordChange(true)
    
            if (change.length < 8) {
                setPassword(false)
            } else {
                setPassword(true)
            }
        }

        useEffect(function () {
            if (validEmail && Password && emailChange && PasswordChange) {
                setDisableButton(true)
            } else {
                setDisableButton(false)
            }
        }, [validEmail, Password, emailChange, PasswordChange])

    return <div>

        <Navbar />

        <div className="my-16 mx-20 rounded-2xl shadow-xl p-8 sm:mx-32 md:mx-48 md:my-24 lg:mx-80 xl:mx-96 xl:px-20">
            <img className="w-28 rounded-2xl" src="/pics/spoon.png" alt="earth-pic" />
            <h3 className=" text-3xl font-bold text-orange-600 mt-6">Create your account</h3>

            <MiniForm
                label="Email"
                change={handleEmail}
                type="email"
                placeholder=""
            />

            {!validEmail && <p className=" text-red-500 text-sm">Please enter a valid email address</p>}

            <MiniForm
                label="Password"
                change={handlePassword}
                type="password"
                placeholder=""
            />

            {!Password && <p className="text-red-500 text-sm">At least 8 characters long</p>}

            {disableButton ?

                <Link to="/"><div className="flex justify-center">
                    <button type="button" className="register-button cursor-pointer hover:border-2 hover:bg-white hover:border-orange-600 hover:text-orange-600 transition ease-out duration-300">Login</button>
                </div></Link> :

                <Link><div className="flex justify-center">
                    <button type="button" className="register-button brightness-75" disabled>Login</button>
                </div></Link>}

        </div>
        <Footer />
    </div>
}

export default Register