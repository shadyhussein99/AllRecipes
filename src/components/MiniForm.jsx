
// The component used to structure the form of the Login and Register page

import React from "react"

function MiniForm(props) {
    return <div className=" mt-6" >
        <label className=" text-2xl font-semibold"><h5>{props.label}</h5></label>
        <input onChange={props.change} value={props.value} className="border-2 border-orange-600 rounded-xl mt-3 w-full" type={props.type} placeholder={props.placeholder} />
    </div>
}

export default MiniForm