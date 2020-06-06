import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p className="lead">Page not found, mate...</p>
            <p className="">The only place you should be is here: </p>

            <Link to="/">
                <a className='btn btn-dark my-1'>HOME</a>
            </Link>

        </div>
    )
}

export default NotFound