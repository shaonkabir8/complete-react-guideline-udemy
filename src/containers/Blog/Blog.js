import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import NewPost from '../Blog/NewPost/NewPost'

class Blog extends Component {
    render () {
        return (
            <div className="MainBlog">
                <header>
                    <section className="Logo">
                        <a href="/">My Blog</a>
                    </section>
                    <nav className="Nav">
                        <ul>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h2>Home</h2>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;