import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicForm from './Forms';
import NewForm from './newForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
	   <BasicForm /> 
	   </div>

	   <div>
	   <NewForm />
	   </div>
      </div>
    );
  }
}

export default App;
