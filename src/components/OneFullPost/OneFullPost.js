import React, { Component } from 'react';
import './OneFullPost.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class OneFullPost extends Component {


    state = {
        post: {}
    };

    componentDidMount() {

        axios.get('/posts/' + this.props.match.params.id + '.json').then((response) => {
            const post = [];
            for(let key in response.data) {
                post.push({...response.data[key], id: key})
            }
            this.setState({posts: post})
        });

    };

    removePost = (id) => {
        const index = this.state.posts.findIndex(p => p.id === id);
        const bulb = [...this.state.posts];
        bulb.splice(index, 1);

        this.setState({posts: bulb});
    };



    render() {
        return (
            <div className="OneFullPost">
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <NavLink to="/post/:id/edit">Edit a post</NavLink>
                <button onClick={this.props.removePost}>Remove a post</button>
            </div>
        )
    }
}
export default OneFullPost;