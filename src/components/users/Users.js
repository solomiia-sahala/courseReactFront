import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropType from 'prop-types';


const Users = ({ loading, usersData }) => {
    if (loading) {
        return <Spinner />
    }
    return (
        <div style={userStyle}>
            {usersData.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                />
            ))
            }
        </div>
    )
}

Users.propType = {
    usersData: PropType.array.isRequired,
    loading: PropType.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;

