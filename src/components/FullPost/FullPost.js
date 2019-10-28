import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    render () {
        let post = <p style={{textAlign:"center"}}><strong>Please select a Post!</strong></p>;
        // grab the props and destructure them
        const {id, posts} = this.props;

        // check if post have a unique id and display the data through looping
        if(id) {
            posts.map(singlePost => {
                return (
                    post = (
                        <div className="FullPost">
                            <h1>{singlePost.title}</h1>
                            <p>{singlePost.body}</p>
                            <div className="Edit">
                                <button className="Delete">Delete</button>
                            </div>
                        </div>
                    )
                )
            })
              
        }
        return post;
    }
}

export default FullPost;