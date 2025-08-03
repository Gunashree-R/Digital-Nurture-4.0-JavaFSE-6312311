import React, { Component } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    // ✅ Element variable method
    let pageContent;
    if (isLoggedIn) {
      pageContent = <UserPage />;
    } else {
      pageContent = <GuestPage />;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>🎫 Ticket Booking App</h1>

        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

        <hr />

        {/* Conditional Rendering */}
        {pageContent}
      </div>
    );
  }
}

export default App;