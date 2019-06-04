import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, i'm a React app</h1>
       <p>This is really working!</p>
       <Person />
       <Person />
       <Person />
      </div>
    );
    /**Voilà pourquoi JSX est si important car sans JSX, on farait ceci pour avoir le même resultat */
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,  'Does this work now ?'));
  }
}

export default App;
