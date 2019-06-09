import React from 'react'
import { NavLink } from 'react-router-dom'

function SignInLinks() {
    return (
        <ul className="right">
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>RH</NavLink></li>
        </ul>
    )
}

export default SignInLinks