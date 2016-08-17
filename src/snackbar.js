import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default function snackbar(Component, events) {
  class SnackbarWrapper extends React.Component {
    constructor() {
      super();
      this.state = {
        message: '',
        open: false,
      };
      const onEvent = (ev) => {
        return () => this.setState({
          open: true,
          message: events[ev],
        });
      }
      this.events = Object.keys(events)
        .reduce((sum, ev) =>
          Object.assign(sum, { [ev]: onEvent(ev) }),
          {});
    }
    render() {
      return (<div>
        <Component
          {...this.props}
          {...this.events}
        />
        <Snackbar
          {...this.state}
          autoHideDuration={3000}
          onRequestClose={() => this.setState({ open: false })}
        />
      </div>);
    }
  }
  return SnackbarWrapper;
}
