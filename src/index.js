const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;
require('./index.css');
require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/black.css');
require('highlight.js/styles/github.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
