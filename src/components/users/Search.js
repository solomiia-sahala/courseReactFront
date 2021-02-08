import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';



const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please, enter something', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Search users..." />
                <input type="submit" value="Submit" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
        </div>
    )
}

export default Search;
