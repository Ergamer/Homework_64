import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div className="Header">
                <NavLink to="/">My Blog</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/second">Add</NavLink>
                <NavLink to="/third">About</NavLink>
                <NavLink to="/fourth">Contacts</NavLink>
            </div>
        )
    }
}



export default Header;
