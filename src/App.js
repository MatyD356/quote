import React, { Component } from 'react';
import Container from './components/Container.js'
import './App.css';

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    document.body.appendChild(script);
    const QuoteScript = document.createElement("script");
    script.src = "https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80.js"
    script.async = true;
    document.body.appendChild(QuoteScript)
  }
  render() {
    return (
      <div className="App">
        <Container />
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>
    );
  }
}

export default App;
