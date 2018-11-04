import React, { Component } from 'react';
import logo from './sari.jpeg';
import img from './ankara.jpg';
import './App.css';


class App extends Component {
  
  showDetails(){
    Image()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Kungara App</h1>
        <h1>Classy designs available here</h1>
           <img src={logo} onClick={this.showDetails}></img>
           <img src={img} onClick={this.showDetails}></img>
            </header>
            
      </div>
     
    );
  }
}


export default App;
