import React from 'react';
import classes from './NotFound.css'
import { Link } from 'react-router-dom'
const notFound = (props) => (
    <div className={classes.NotFound}>
        <Link to="/">Back to Homepage</Link>
    </div>
);
export default notFound;