import React from 'react';
import baseStyle from '../simple-button-style';
import onHover from '../on-hover';
import { Motion, spring } from 'react-motion';

function animateButton(props) {
  return ({
    hovered,
  }) => {
    const {
      style,
      ...pass,
    } = props;
    return (<button
      {...pass}
      style={{
        ...baseStyle,
        background: `linear-gradient(transparent, transparent ${hovered}%, white ${hovered + 0.01}%, white)`,
        ...style,
      }}
    />);
  };
}

function AnimatedButton({
  hovered,
  ...props,
}) {
  return (<Motion
    defaultStyle={{ hovered: 100 }}
    style={{ hovered: spring(hovered ? 0 : 100) }}
  >
    {animateButton(props)}
  </Motion>);
}

export default onHover(AnimatedButton);
