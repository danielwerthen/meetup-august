import React from 'react';
import baseStyle from '../simple-button-style';
import onHover from '../on-hover';
import { Motion, spring } from 'react-motion';
import ops from 'color-ops';
import parse from 'parse-color';

function mix(c0, c1, x) {
  const color0 = parse(c0).rgb;
  const color1 = parse(c1).rgb;
  const res = color0.map((c, idx) =>
    c + (color1[idx] - c) * (x / 100))
    .map(c => Math.round(c));
  return `rgb(${res.join(',')})`;
}

function animatedOverrides(style, x) {
  const c0 = style.backgroundColor || 'transparent';
  const c1 = style.color || 'white';
  const color = mix(c0, c1, x);
  return {
    background: `linear-gradient(${c0}, ${c0} ${x}%, ${c1} ${x + 0.01}%, ${c1})`,
    color,
  };
}

function animateButton(props) {
  return ({
    hovered,
  }) => {
    const {
      style,
      ...pass,
    } = props;
    const buttonStyle = {
      ...baseStyle,
      ...style,
    };
    return (<button
      {...pass}
      style={{
        ...buttonStyle,
        ...animatedOverrides(buttonStyle, hovered),
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
