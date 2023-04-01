
// Register page

import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import MiniForm from "./MiniForm"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"


function Register() {

    var [validEmail, setValidEmail] = useState(true)         // Describes if the user entered a valid email or not

    var [createPassword, setCreatePassword] = useState(true)           // Describes if the user entered a valid password or not

    var [valueCreatePassword, setValueCreatePassword] = useState("")      // Value of user password input in Create password

    var [confirmPassword, setConfirmPassword] = useState(true)       // Check if user input in Confirm password is the same as in Create password

    var [emailChange, setEmailChange] = useState(false)            //  check if email input is changed

    var [createPasswordChange, setCreatePasswordChange] = useState(false)     // check if create password input is changed

    var [confirmPasswordChange, setConfirmPasswordChange] = useState(false)    //  check if confirm password input is changed

    var [disableButton, setDisableButton] = useState(false)           // Enable and Disable Register button

    /* ( emailChange & createPasswordChange & confirmPasswordChange ) these stats are responsible to make
        the Register button disabled at the begining without them the Register button will be enabled before the input changes 
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

    function handleCreatePassword(event) {

        const change = event.target.value

        setCreatePasswordChange(true)
        setValueCreatePassword(change)

        if (change.length < 8) {
            setCreatePassword(false)
        } else {
            setCreatePassword(true)
        }
    }

    function handleConfirmPassword(event) {

        const change = event.target.value

        setConfirmPasswordChange(true)

        if (change !== valueCreatePassword) {
            setConfirmPassword(false)
        } else if (change === valueCreatePassword) {
            setConfirmPassword(true)
        }
    }

    useEffect(function () {
        if (validEmail && createPassword && confirmPassword && emailChange && createPasswordChange && confirmPasswordChange) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [validEmail, createPassword, confirmPassword, emailChange, createPasswordChange, confirmPasswordChange])

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

            {!validEmail && <p className="text-red-500">Please enter a valid email address</p>}

            <MiniForm
                label="Create password"
                change={handleCreatePassword}
                type="password"
                placeholder=""
            />

            {!createPassword && <p className="text-red-500">At least 8 characters long</p>}

            <MiniForm
                label="Confirm password"
                change={handleConfirmPassword}
                type="password"
                placeholder=""
            />

            {!confirmPassword && <p className="text-red-500">Please match both passwords</p>}

            {disableButton ?

                <Link to="/"><div className="flex justify-center">
                    <button type="button" className="register-button cursor-pointer hover:border-2 hover:bg-white hover:border-orange-600 hover:text-orange-600 transition ease-out duration-300">Register Now</button>
                </div></Link> :

                <Link><div className="flex justify-center">
                    <button type="button" className="register-button brightness-90" disabled>Register Now</button>
                </div></Link>}

        </div>
        <Footer />
    </div>
}

export default Register