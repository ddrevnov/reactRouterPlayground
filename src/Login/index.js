import React, { PropTypes, Component } from 'react';

export default class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleSubmit =(e) => {
    e.preventDefault();
    const value = e.target.elements[0].value.trim();
    window.localStorage.setItem('rr_login', value);

    if (value === 'admin') {
      this.context.router.push('/admin');
    } else {
      this.context.router.push('/');
    }
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Пожалуйста, введите логин:</div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='login'/>
          <button type='submit'>Войти</button>
        </form>
      </div>
    )
  }
}