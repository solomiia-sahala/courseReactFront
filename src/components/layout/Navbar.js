import React from 'react';
import PropsType from 'prop-types'

class Navbar extends React.Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
    static PropsType = {
        title: PropsType.string.isRequired,
        icon: PropsType.string.isRequired
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon} />
                    {this.props.title}
                </h1>
            </nav>
        )
    }

}

export default Navbar;