import React from 'react';

const style = {
  background: 'none',
  color: 'white',
  border: '1px solid white',
  padding: '12px 24px',
  textTransform: 'uppercase',
  borderRadius: '1px',
};

export default function Button({ children, onClick }) {
  return (<button onClick={onClick} style={style}>
    {children}
  </button>);
}
