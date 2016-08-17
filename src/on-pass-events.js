import _ from 'lodash';
import React from 'react';


export default function onEvents(Component) {
  class OnEvents extends React.Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
        focus: false,
      };
      const passEvent = (ev, newState) => {
        return e => {
          const cb = this.props[ev] || (() => {});
          this.setState(newState);
          cb(e);
        };
      }
      this.events = _.reduce({
        onMouseEnter: { hovered: true },
        onMouseLeave: { hovered: false },
        onFocus: { focus: true },
        onBlur: { focus: false },
      }, (sum, val, key) => Object.assign(sum, {
        [key]: passEvent(key, val),
      }), {});
    }
    render() {
      return (<Component
        {...this.state}
        {...this.props}
        {...this.events}
      />);
    }
  }
  return OnEvents;
}
