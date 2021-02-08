import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {
        name,
        avatar_url,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = props.user;

    useEffect(() => {
        props.getUser(props.match.params.login);
    }, [])

    if (props.loading) {
        return <Spinner />
    }
    return (
        <div>
            <Link to="/" className="btn btn-light">Back to search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="img" style={{ width: "150px" }} />
                    <h1>{name}</h1>
                </div>
                <div>
                    {bio && (<React.Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </React.Fragment>)}
                    <a href={html_url} className="btn btn-dark my-1">Visit my github profile</a>
                </div>

            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers} </div>
                <div className="badge badge-success">Following: {following} </div>
                <div className="badge badge-danger">Public Repos: {public_repos} </div>
                <div className="badge badge-dark">Public Gists: {public_gists} </div>
            </div>
        </div>
    )
}

User.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

export default User;

