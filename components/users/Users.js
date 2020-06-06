import React, { useContext } from 'react';
import UserItem from './UserItem';
import Nyan from '../layout/Nyan';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if(loading){
        return <Nyan />
    } else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users