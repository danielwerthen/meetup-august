import React from 'react';
import Highlight from 'react-highlight';

export default class ButtonSlide extends React.Component {
  render() {
    return (<section>
      <p>Testing</p>
      <Highlight className="javascript">
        var t = 5
      </Highlight>
    </section>);
  }
}
