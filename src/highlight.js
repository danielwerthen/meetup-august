import React from 'react';
import Highlight from 'react-highlight';

const sources = require.context(
  "!!raw!./examples",
  true,
  /.*/
);
const components = require.context(
  "./examples",
  true,
  /.*/
);

export default class highlightFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.setup(props);
  }
  componentWillUpdate(nextProps) {
    const p = nextProps.path;
    if (this.props.path !== p && p) {
      this.setState(
        this.setup(nextProps)
      );
    }

  }
  setup(nextProps) {
    const p = nextProps.path;
    return {
      Component: components(p).default,
      code: sources(p),
    };
  }
  render() {
    const {
      code,
      Component,
    } = this.state;
    return (<section>
      {Component && <Component {...this.props} />}
      <Highlight className="javascript">
        {code}
      </Highlight>
    </section>);
  }
}
