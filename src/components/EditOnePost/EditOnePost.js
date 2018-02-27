import React, { Component } from 'react';
import './EditOnePost.css';
import axios from 'axios';


class EditOnePost extends Component {

    state = {
        posts: {
            title: '',
            body: ''
        },
    };

    onePostEditAction = (event) => {
        event.preventDefault();

        axios.post('/posts.json', this.state.posts).then(() => {
            this.props.history.replace('/');
        });
    };

    onePostValueChanged = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                posts: {...prevState.posts, [event.target.name]: event.target.value}
            };
        });
    };

    render() {
        return (
            <form className="EditOnePost">
                <h4>Edit a post</h4>
                <input name="title"
                       type="text"
                       onChange={this.onePostValueChanged}
                />
                <textarea name="body"
                          onChange={this.onePostValueChanged}
                >
                </textarea>
                <button onClick={this.onePostEditAction}>Save changes</button>
            </form>
        )
    }
}


export default EditOnePost;
