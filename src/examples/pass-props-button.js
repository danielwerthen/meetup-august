import React from 'react';
import style from '../simple-button-style';
import onHover from '../on-hover';

function Button({
  hovered,
  ...props,
}) {
  return (<button
    {...props}
    style={{
      ...style,
      background: hovered ? 'white' : 'none',
      color: hovered ? 'black' : 'white',
    }}
  />);
}

export default onHover(Button);
