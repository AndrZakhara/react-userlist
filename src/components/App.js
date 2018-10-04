import React, { Component } from 'react';
import MainHeader from './MainHeader';
import { Container,  Grid, Segment } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
      </div>
    );
  }
}

export default App;
