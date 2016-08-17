import React from 'react';
import Highlight from '../highlight';

import buttonImg from '../images/button.png';

export default class ButtonSlide extends React.Component {
  render() {
    return (<section>
      <p>The design</p>
      <img src={buttonImg} />
    </section>);
  }
}
