import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts'

class Blog extends Component {
    render () {
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
                <section>
                    <Posts />
                </section>
            </div>
        );
    }
}

export default Blog;