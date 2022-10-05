import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navbar.css';
import "../LoginFormModal/LoginForm.css"

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;

    // NavLink styles
    let navStyles = { color: "white", marginLeft: "5px", marginRight: "5px", fontSize: "15px", textDecoration: "none" }

    // if a user is logged in
    if (sessionUser) {
        sessionLinks = (
            <div className="session-links">
                <div id="logged-in-links">
                    <NavLink style={navStyles} className='get-songs' exact to="/songs">Home</NavLink>
                    <NavLink style={navStyles} className='create-song' exact to="/new">Upload</NavLink>
                    <ProfileButton user={sessionUser} />
                </div>
            </div>
        );
    } else {
        // show login and signup buttons if not logged in
        sessionLinks = (
            <div className="login-signup-links">
                <div id="login">
                    <LoginFormModal />
                </div>
                <div id="signup">
                    <SignupFormModal />
                </div>
            </div>
        );
    }

    return (
        <div className="navbar-container">
            <div className="outer-empty-nav"></div>
            <div className="logo-container">
                <div className="title-container">
                    AUDIO STRATUS
                </div>
                <div className="logo">
                    {/* my custom logo */}
                    <img className="logo" alt=" stratus" src={"https://res.cloudinary.com/ddmb8mrlb/image/upload/v1664661127/icons/image_m12nib.png"} />
                </div>
            </div>
            <div className="middle-empty-nav"></div>
            <div className="navbar-links">
                {isLoaded && sessionLinks}
            </div>
            <div className="outer-empty-nav"></div>
        </div>
    );
}

export default Navigation;

