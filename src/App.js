import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    selectedFile:null
  }
 fileSelectedHandler = event=> //funtion
 {
   this.setState({
   selectedFile:event.target.files[0]
  })
 }
 fileUploadHandler =()=>{
   axios.post("");
 }
  render() {
    return (
      
      <div className="App">

        <header className="App-header">
         
          <h2> kungara</h2>
        
          <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload </button>
        </header>
        
    
      </div>
    );
  }
}

export default App;
