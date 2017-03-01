import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Admin from './Admin';
import Genre from './Genre';
import BanList from './BanList';
import List from './Genre/List';
import NotFound from './NotFound';
import Release from './Genre/Release';
import Login from './Login';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='admin' component={Admin} onEnter={Admin.onEnter}>
        <Route path="banlist" component={BanList} />
      </Route>
      <Route path='/genre/:genre' component={Genre}>
        <Route path='/genre/:genre/:release' component={Release} />
      </Route>
      <Route path='list' component={List} />
      <Route path='/login' component={Login} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);