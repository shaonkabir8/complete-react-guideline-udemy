import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    // fetching data from jsonplaceholder
    componentDidMount() {
        axios.get('/posts')
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
            .catch(error => {
                this.setState({error: true});
                console.log(error)
            })
    }

    selectPostHandler = id => {
        this.setState({selectedId: id})
    }

    render () {
        let posts = <p style={{textAlign: "center", color: 'red'}}>Something went wrong !!</p>
        // check if no error occour,
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                          key={post.id} 
                          title={post.title} 
                          author={post.author} 
                          clicked={() => this.selectPostHandler(post.id)}/>
             })
        }
        return (
            <div>
                <header>
                    <section className="Logo">
                        <a href="/">My Blog</a>
                    </section>
                    <nav className="Nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                   {posts}
                </section>
            </div>
        );
    }
}

export default Blog;