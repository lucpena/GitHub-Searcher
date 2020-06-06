import React, { Fragment, useEffect, useContext } from 'react';
import Nyan from '../layout/Nyan';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContex from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContex);

    const { getUser, loading, user, repos, getUserRepos } = githubContext; 

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const { 
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
        } = user;

        if (loading) return <Nyan />

    return <Fragment>
        <Link to='/' className='btn btn-light'> 
        Back to Search
        </Link>
        Hireable: {' '}
        {hireable ? 
        (<i className='fas fa-check text-success' />) :         
        (<i className='fas fa-times-circle text-danger' />)}
        <div className='card grid-2'>

            <div className='all-center'>
                <img 
                src={avatar_url} 
                alt="" 
                className="round-img"
                style={{ width:'150px' }}/>
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>

            <div>

                {bio && 
                <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment>}

                <ul>

                    <li>{login &&
                    <Fragment>
                        <strong>Username: </strong> {login}
                    </Fragment>}
                    </li>

                    
                    <li>{company &&
                    <Fragment>
                        <strong>Company: </strong> {company}
                    </Fragment>}
                    </li>

                    
                    <li>{blog &&
                    <Fragment>
                        <strong>Website: </strong> {blog}
                    </Fragment>}
                    </li>

                </ul>

                <a href={html_url} className='btn btn-dark my-1'>GitHub Profile</a>

            </div>
        </div>

        <div className="card text-center">
            <div className="badge badge-dark">Followers: {followers}</div>
            <div className="badge badge-dark">Following: {following}</div>
            <div className="badge badge-dark">Public Repos: {public_repos}</div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos}/>

    </Fragment>
}

export default User
