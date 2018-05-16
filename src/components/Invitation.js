import React from 'react';

export default class Invitation extends React.Component {
  render() {
    return (
      <div className="invite">
        <div className="invite-title"><h1>You&#39;ve been invited!</h1></div>
        <div className="invite-body">{this.props.children}</div>
      </div>
    )
  }
}
