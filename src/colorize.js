import React from 'react';
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

function colorizeHover({
  hovered,
}) {
  const x = 100 - hovered;
  return style => {
    const c0 = style.backgroundColor || 'transparent';
    const c1 = style.color || 'white';
    const color = mix(c0, c1, x);
    return {
      background: `linear-gradient(${c0}, ${c0} ${x}%, ${c1} ${x + 0.01}%, ${c1})`,
      color,
    };
  };
}

function fade(c0, x) {
  const color0 = parse(c0).rgb;
  const res = color0.map((c, idx) =>
    c * (x / 100))
    .map(c => Math.round(c));
  return `rgb(${res.join(',')})`;
}

function colorizeFocus({
  focus,
}) {
  const x = (focus + 100) / 2;
  return style => {
    const c0 = style.borderColor || 'white';
    const borderColor = fade(c0, x);
    return {
      borderColor,
      outline: 'none',
    };
  };
}

function applyStyle(style, props) {
  const animations = [
    colorizeHover(props),
    colorizeFocus(props),
  ];

  return animations.reduce(
    (sum, foo) => Object.assign(sum, foo(sum)),
    Object.assign({}, style)
  );
}


export default function colorize(Component) {
  return ({ style, ...props }) => {
    return (<Component
      {...props}
      style={
        applyStyle(style, props)
      }
    />);
  };
}
