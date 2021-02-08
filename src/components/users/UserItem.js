import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = (props) => {
    const { login, avatar_url, html_url } = props.user;
    return (
        <div className="card text-center">
            <img
                src={avatar_url}
                alt="users avatar"
                className="roung-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Github Link</Link>

                {/* <a href={html_url} className="btn btn-dark btn-sm my-1">Github Link</a> */}
            </div>
        </div>
    )
}


UserItem.propType = {
    user: PropType.object.isRequired
};


export default UserItem;

