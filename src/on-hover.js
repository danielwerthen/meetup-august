import React from 'react';

export default function onHover(Component) {
  class OnHover extends React.Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
      };
    }
    render() {
      return (<Component
        {...this.state}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        {...this.props}
      />);
    }
  }
  return OnHover;
}
