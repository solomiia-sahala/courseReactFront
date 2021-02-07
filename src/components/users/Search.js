import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Search = (props) => {
    const { searchUsers, clearUsers, showClear } = props;

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            props.setAlert('Please, enter something', 'light')
        } else {
            searchUsers(text);
            setText('');
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Search users..." />
                <input type="submit" value="Submit" className="btn btn-dark btn-block" />
            </form>
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    )
}

export default Search;

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}