import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = props => {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    if(props.value) {
        return (
            <div className="container">
            <nav>
                <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">collectION</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/user">My Profile</NavLink></li>
                    <li><NavLink to="/create_collection">Create New Collection</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log out</a></li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
    return (
        <div className="container">
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">collectION</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/auth">Log in/Sign up</NavLink></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}