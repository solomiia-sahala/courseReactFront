import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext)
    const { loading, getUser, user, getUserRepos, repos } = githubContext;
    const {
        name,
        avatar_url,
        bio,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = user;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])

    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <Link to="/" className="btn btn-light">Back to search</Link>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="img" alt="" style={{ width: "150px" }} />
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
                <div className="badge badge-dark">Public Gists: {public_gists} </div>ç
            </div>
            <Repos repos={repos} />
        </div>
    )
}


export default User;

