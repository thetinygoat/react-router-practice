import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
