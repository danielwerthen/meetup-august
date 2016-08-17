import React from 'react';
import baseStyle from '../simple-button-style';
import { Motion, spring } from 'react-motion';

import colorize from '../colorize';
import animateEvents from '../animate-events';
import onPassEvents from '../on-pass-events';

const ColorizedButton = colorize('button');

function StyledButton({ style, ...props }) {
  const buttonStyle = {
    ...baseStyle,
    ...style,
  };
  return (<ColorizedButton
    {...props}
    style={buttonStyle}
  />);
}

export default onPassEvents(animateEvents('hovered', 'focus')(StyledButton));
