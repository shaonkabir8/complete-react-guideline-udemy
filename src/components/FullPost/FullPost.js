import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
    }

    componentDidUpdate() {
        // check if unique id is available
        if(this.props.id) {
            // check if DOM isn't loading and loadedId !== ourId
            if(!this.state.loadedPost || (this.props.id && this.props.id !== this.state.loadedPost.id)) {
                axios
                .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(res => {
                    this.setState({loadedPost: res.data})
                })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(res => console.log(res))
    }

    render () {
        let post = <p style={{textAlign:"center"}}><strong>Please select a Post!</strong></p>;

        // check if post have a unique id
        if(this.props.id) {
            post = <p style={{textAlign:"center"}}><strong>Loading.......</strong></p>;
        }
        // check if state is loaded with real data
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            )
        }
        return post;
    }
}

export default FullPost;