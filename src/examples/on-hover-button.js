import React from 'react';
import style from '../simple-button-style';

export default class onHoverButton extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }
  render() {
    const {
      hovered,
    } = this.state;
    const {
      onClick,
      children,
    } = this.props;
    return (<button
      onClick={onClick}
      style={{
        ...style,
        background: hovered ? 'white' : 'none',
        color: hovered ? 'black' : 'white',
      }}
      onMouseEnter={() => this.setState({ hovered: true })}
      onMouseLeave={() => this.setState({ hovered: false })}
    >
      {children}
    </button>);
  }
}
