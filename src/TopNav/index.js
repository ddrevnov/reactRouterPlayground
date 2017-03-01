import React, { Component } from 'react';
import NavLink from './NavLink';

class TopNav extends Component {
  render() {
    return (
      <ul className='nav nav-pills'>
        <li>
          <NavLink
          onlyActiveOnIndex={true}
          to='/'>Главная</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Админка</NavLink>
        </li>
        <li>
          <NavLink to='/list'>Список жанров</NavLink>
        </li>
        <li><NavLink to='/login'>Войти</NavLink></li>
      </ul>
    );
  }
}

export default TopNav;