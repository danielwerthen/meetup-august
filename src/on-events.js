import React from 'react';

export default function onEvents(Component) {
  class OnEvents extends React.Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
        focus: false,
      };
    }
    render() {
      return (<Component
        {...this.state}
        {...this.props}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onFocus={() => this.setState({ focus: true })}
        onBlur={() => this.setState({ focus: false })}
      />);
    }
  }
  return OnEvents;
}
