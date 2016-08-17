import React from 'react';
import baseStyle from '../simple-button-style';
import onHover from '../on-hover';

function Button({
  hovered,
  style,
  ...props,
}) {
  return (<button
    {...props}
    style={{
      ...baseStyle,
      background: hovered ? 'white' : 'none',
      color: hovered ? 'black' : 'white',
      ...style,
    }}
  />);
}

export default onHover(Button);
