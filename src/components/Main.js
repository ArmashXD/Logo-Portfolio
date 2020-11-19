import React from 'react'
import '../css/Main.css'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

function Main() {
    return (
        <div className="main_container">
                <Typewriter  className="main_text" delay={80} string="Hello my name is Shahina Afzal and i am a logo designer."/>
        </div>
   
    )
}

export default Main
