import React, { PropTypes, Component } from 'react';

export default class Home extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.context.router
      .setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  routerWillLeave() {
    return 'Вы уверены?'
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}