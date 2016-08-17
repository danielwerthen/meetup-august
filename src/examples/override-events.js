import React from 'react';

import Button from './clean-animated-button';

export default function ButtonWithEvents({
  notify,
  ...props,
}) {
  return (<Button
    {...props}
    onClick={() => notify('onClick')}
    onMouseEnter={() => notify('onMouseEnter')}
    style={{
      borderColor: 'red',
      color: '#63be8c',
      backgroundColor: '#555',
    }}
  >
    View brands
  </Button>);
}
