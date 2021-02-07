import React from 'react';
import PropsType from 'prop-types'

const Navbar = ({ icon, title }) => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />
                {title}
            </h1>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.PropsType = {
    title: PropsType.string.isRequired,
    icon: PropsType.string.isRequired
};

export default Navbar;