import React, { Component } from 'react';
import './OnePost.css';
import {NavLink} from "react-router-dom";


class OnePost extends Component {

    render() {
        return (
            <div className="OnePost">
                <h2>{this.props.text}</h2>
                <NavLink to={"/post/" + this.props.id}>read more</NavLink>
            </div>
        )
    }
}


export default OnePost;