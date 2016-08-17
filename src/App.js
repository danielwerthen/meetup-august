import React, { Component } from 'react';
import './App.css';
import reveal from 'reveal.js';
import ButtonSlide from './sections/button-slide';

class App extends Component {
  componentDidMount() {
    reveal.initialize();
  }
  render() {
    return (
      <div className="reveal">
          <div className="slides">
              <ButtonSlide />
          </div>
      </div>
    );
  }
}

export default App;
