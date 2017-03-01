import React, { Component } from 'react';

class Release extends Component {
  render() {
    const releaseName = this.props.params.release.replace(/-/g,' ');

    return (
      <div className='col-md-12'>
        {releaseName}
      </div>
    );
  }
}

export default Release;