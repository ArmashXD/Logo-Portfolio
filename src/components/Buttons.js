import React from 'react'
import '../css/Buttons.css'
function Buttons({ setclass,setname,setsubmit }) {

    return (
        <button className={setclass} type={setsubmit}>
                {setname}
        </button>
    )
}

export default Buttons
