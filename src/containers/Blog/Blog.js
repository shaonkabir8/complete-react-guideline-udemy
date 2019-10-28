import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
    }

    // fetching data from jsonplaceholder
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0,4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Shaon Kabir'

                    }
                });
                this.setState({posts: updatedPost})
            })
            .catch(error => console.log(error))
    }

    selectPostHandler = id => {
        this.setState({selectedId: id})
    }

    render () {
        return (
            <div>
                <section className="Posts">
                   {this.state.posts.map(post => {
                      return <Post 
                                key={post.id} 
                                title={post.title} 
                                author={post.author} 
                                clicked={() => this.selectPostHandler(post.id)}/>
                   })}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;