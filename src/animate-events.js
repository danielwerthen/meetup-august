import React from 'react';
import { Motion, spring } from 'react-motion';

function makeObject(keys, fn) {
  return keys.reduce((sum, key) => 
    Object.assign(sum, { [key]: fn(key) }),
    {});
}

export default function animateEvents(...events) {
  return Component => props =>
    (<Motion
      defaultStyle={makeObject(events, () => 0)}
      style={makeObject(events, key => spring(props[key] ? 100 : 0) )}
    >
      {animated => (<Component
        {...props}
        {...animated}
      />)}
    </Motion>);
}
