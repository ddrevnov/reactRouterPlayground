import React, { Component } from 'react';
import { Link } from 'react-router';

class Admin extends Component {
  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login');
    if (login !== 'admin') {
      replace('/')
    }
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <Link to="/admin/banlist">banlist</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Admin;