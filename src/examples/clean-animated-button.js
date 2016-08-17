import React from 'react';
import baseStyle from '../simple-button-style';
import { Motion, spring } from 'react-motion';

import colorize from '../colorize';
import animateEvents from '../animate-events';
import onEvents from '../on-events';

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

export default onEvents(animateEvents('hovered', 'focus')(StyledButton));
