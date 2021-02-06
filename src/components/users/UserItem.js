import React, { Component } from 'react';


class UserItem extends Component {

    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="users avatar" className="roung-img" style={{ width: '60px' }} />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">Github Link</a>
                </div>
            </div>
        )
    }
}


export default UserItem;

