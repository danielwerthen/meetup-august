import React from 'react';

export default function Button(props) {
  return (<button
    onClick={() => console.log('Click')}
    {...props}
  />);
}
