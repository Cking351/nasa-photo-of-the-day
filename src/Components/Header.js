import React, { useEffect } from 'react'
import logo from './nasalogo.png'
export default function Header() {

    return(
        <header>
            <img src={logo} />
            <h1>Picture of the Day</h1>
            <br></br>
        </header>
    )
}