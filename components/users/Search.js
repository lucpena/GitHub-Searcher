import React, { useState, useContext } from 'react'
import GithubContex from '../../context/github/githubContext';
import AlertContex from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContex);
    const alertContext = useContext(AlertContex);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(text === ''){
            alertContext.setAlert('Enter a valid Username', 'danger');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value);


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                type="text"
                name="text"
                placeholder="Insert a Username"
                value={text}
                onChange={onChange}
                />
                <input 
                type="submit"
                value="Search"
                className="btn btn-dark btn-block"
                />
            </form>

            {githubContext.users.length > 0 && (
            <button 
            className="btn btn-light btn-block" 
            onClick={githubContext.clearUsers}>Clear</button>
            ) }
        </div>
    )

}

export default Search
