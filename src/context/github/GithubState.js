import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search users
    const searchUsers = async text => {
        setLoading();
        let response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: SEARCH_USERS, payload: response.data.items });
    }

    //get user 
    const getUser = async login => {
        setLoading();
        let response = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: GET_USER, payload: response.data })
    }

    //get Users repos
    const getUserRepos = async username => {
        setLoading();
        let response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ type: GET_REPOS, payload: response.data });
    }


    //Set Loading 

    const setLoading = () => dispatch({ type: SET_LOADING });

    //clearUsers
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    return (<GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos

    }}>{props.children}</GithubContext.Provider>
    )
}

export default GithubState;
