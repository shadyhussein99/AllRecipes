
// The component used to structure the form of the Login and Register page

import React from "react"

function MiniForm(props) {
    return <section className=" mt-6" >
        <label className=" text-2xl font-semibold"><h5>{props.label}</h5></label>
        <input onChange={props.change} value={props.value} className="border border-orange-500 rounded-xl mt-3 w-full pl-2" type={props.type} placeholder={props.placeholder} />
    </section>
}

export default MiniForm