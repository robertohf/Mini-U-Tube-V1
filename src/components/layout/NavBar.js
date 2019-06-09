import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/' className="navbar-brand">Mini <p>U-Tube</p></Link>  
                <SignInLinks />
            </div>
        </nav>
    )
}

export default NavBar