import React, { Component } from 'react';
import './AddOnePost.css';
import axios from 'axios';

class AddOnePost extends Component {
    state = {
        posts: {
            title: '',
            body: ''
        },
    };

    postSubmitAction = (event) => {
        event.preventDefault();
        console.log('submit')

        axios.post('/posts.json', this.state.posts).then(() => {
            this.props.history.replace('/');
        });
    };
    postValueChanged = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                posts: {...prevState.posts, [event.target.name]: event.target.value}
            };
        });
    };
    render() {
        return (
            <form className="AddOnePost">
                <input type="text" name="title"
                       placeholder="Enter title text"
                       value={this.state.posts.title}
                       onChange={this.postValueChanged}
                />
                <textarea name="body"
                          placeholder="Enter post text"
                          value={this.state.posts.body}
                          onChange={this.postValueChanged}
                >
                </textarea>
                <button onClick={this.postSubmitAction}>Save</button>
            </form>
        );
    }
}


export default AddOnePost;

