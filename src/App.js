import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import Main from './components/Main';


class App extends Component {
  state = {
    navItems: ["Home", "Projects", "About"],
  }

  render() {
    return (
      <div className="App">
        <NavBar navItems={this.state.navItems}/>
        <Main/>
      </div>
    );
  }
}

export default App;
