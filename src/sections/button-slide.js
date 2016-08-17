import React from 'react';
import Highlight from '../highlight';
import snackbar from '../snackbar';

const H2 = snackbar(Highlight, {
  onClick: 'Button was clicked',
  notify: (str) => str,
});

export default class ButtonSlide extends React.Component {
  render() {
    const {
      header,
      path,
      ...rest,
    } = this.props;
    return (<section>
      <p>{header}</p>
      <H2 path={path} {...rest}>
        View brand
      </H2>
    </section>);
  }
}
