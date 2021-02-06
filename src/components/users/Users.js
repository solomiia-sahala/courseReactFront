import React, { Component } from 'react';
import UserItem from './UserItem';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: '1',
                    login: 'Mojombo',
                    avatar_url: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?s=612x612',
                    html_url: 'https://github.com/mojombo'
                },
                {
                    id: '2',
                    login: 'Mojombo',
                    avatar_url: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?s=612x612',
                    html_url: 'https://github.com/mojombo'
                },
                {
                    id: '3',
                    login: 'Mojombo',
                    avatar_url: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?s=612x612',
                    html_url: 'https://github.com/mojombo'
                }
            ]
        }
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))
                }
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;

