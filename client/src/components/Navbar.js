import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useHistory()
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    if(auth.isAdmin) {
        return (
            <div className="container">
            <nav className="blue-grey darken-4">
                <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">collectION</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/user">My Profile</NavLink></li>
                    <li><NavLink to="/create_collection">Create New Collection</NavLink></li>
                    <li><NavLink to="/users">Users List</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log out</a></li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
    if(auth.isAuthenticated) {
        return (
            <div className="container">
            <nav className="blue-grey darken-4">
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
                <li><NavLink to="/auth">Sign up</NavLink></li>
                <li><NavLink to="/login">Log in</NavLink></li>
            </ul>
            </div>
        </nav>
        </div>
    )
}