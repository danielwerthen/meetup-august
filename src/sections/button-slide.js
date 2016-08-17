import React from 'react';
import Highlight from '../highlight';
import snackbar from '../snackbar';

const H2 = snackbar(Highlight, {
  onClick: 'Button was clicked',
});

export default class ButtonSlide extends React.Component {
  render() {
    const {
      header,
      path,
    } = this.props;
    return (<section>
      <p>{header}</p>
      <H2 path={path}>
        View brand
      </H2>
    </section>);
  }
}
