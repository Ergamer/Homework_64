import React, { Component } from 'react';
import './AllPostWindow.css';
import OnePost from "../../components/OnePost/OnePost";
import axios from 'axios';

class AllPostWindow extends Component {
    state = {
        posts: []
    };

    componentDidMount () {
        axios.get('/posts.json').then((response) => {
            const post = [];
            for(let key in response.data) {
                post.push({...response.data[key], id: key})
            }
            this.setState({posts: post})
        });
    }



    render() {
        return (
            <div className="AllPostWindow">
                {this.state.posts.map(post => <OnePost
                    text={post.title}
                    id={post.id}
                />)}
            </div>
        );
    }
}

export default AllPostWindow;

