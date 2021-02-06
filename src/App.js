import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    this.setState({ loading: true });

    let response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users: response.data,
      loading: false
    })

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} usersData={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

