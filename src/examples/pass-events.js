import React from 'react';

import Button from './pass-events-button';

export default function ButtonWithEvents({
  notify,
  ...props,
}) {
  return (<Button
    {...props}
    onClick={() => notify('onClick')}
    onMouseEnter={() => notify('onMouseEnter')}
  >
    View brands
  </Button>);
}
