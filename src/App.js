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
              <section>
                <h3>Frontend technical test</h3>
                <h4>Build a button</h4>
              </section>
              <section>
                <h3>What is the challenges?</h3>
              </section>
              <section>
                <ul>
                  <li>Build a nice api</li>
                  <li>Make it reusable</li>
                  <li>Good UX</li>
                </ul>
              </section>
              <ButtonDesign />
              <ButtonSlide
                header="A wrapped button"
                path="./wrapped-button"
              />
              <ButtonSlide
                header="A styled button"
                path="./styled-button"
              />
              <ButtonSlide
                header="On hover"
                path="./on-hover-button"
              />
              <ButtonSlide
                header="Higher order components"
                path="./on-hoc-button"
              />
              <ButtonSlide
                header="Just pass those props"
                path="./pass-props-button"
              />
              <ButtonSlide
                header="Style is fixed"
                path="./fixed-style-button"
              />
              <ButtonSlide
                header="Override style as expected"
                path="./pass-props-button-fixed"
                style={{
                  border: '1px solid blue',
                }}
              />
              <ButtonSlide
                header="Animate it"
                path="./animated-button"
              />
              <ButtonSlide
                header="Inherit colors"
                path="./override-animated-button"
              />
              <ButtonSlide
                header="Clean up"
                path="./clean-animated-button"
              />
              <ButtonSlide
                header="With overridden colors"
                path="./override-all-colors"
              />
              <ButtonSlide
                header="Override events"
                path="./override-events"
              />
              <ButtonSlide
                header="Pass events"
                path="./pass-events"
              />
              <section>
                <h3>Is the correct the solution?</h3>
                <p>I don't know...</p>
              </section>
              <section>
                <h3>Something as simple as a button</h3>
                <p>is far from easy</p>
              </section>
              <section>
                <h3>We are hiring ;-)</h3>
                <p>daniel.werthen@universalavenue.com</p>
              </section>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
