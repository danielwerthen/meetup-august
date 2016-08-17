import React, { Component } from 'react';
import './App.css';
import reveal from 'reveal.js';
import ButtonSlide from './sections/button-slide';
import ButtonDesign from './sections/button-design';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  componentDidMount() {
    reveal.initialize();
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="reveal">
            <div className="slides">
                <ButtonSlide
                  header="On hover"
                  path="./on-hover-button"
                />
                <ButtonSlide
                  header="A styled button"
                  path="./styled-button"
                />
                <ButtonSlide
                  header="A wrapped button"
                  path="./wrapped-button"
                />
                <ButtonDesign />
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
