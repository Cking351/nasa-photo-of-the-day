import React, { useEffect } from 'react'
import logo from './nasalogo.png'
import Container from './Container'
import Button from './Button'


export default function Header() {
    const liftOff = () => {
        return console.log('Button functions')
    }

    return(
        <Container>
            <img src={logo} />
            <h1>Picture of the Day</h1>
            <br></br>
            <a href='#myTarget' onClick={liftOff}>
            <Button>Launch!</Button>
            </a>
        </Container>
    )
}