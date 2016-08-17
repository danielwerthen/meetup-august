import React from 'react';
import style from '../simple-button-style';
import onHover from '../on-hover';

function Button({
  hovered,
  onClick,
  children,
  onMouseEnter,
  onMouseLeave,
}) {
  return (<button
    onClick={onClick}
    style={{
      ...style,
      background: hovered ? 'white' : 'none',
      color: hovered ? 'black' : 'white',
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </button>);
}

export default onHover(Button);
