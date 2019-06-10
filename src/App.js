<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
=======
import React, { Component } from 'react'
import './App.css'
>>>>>>> 7a84e66481b6c8fdbb04ae33f49987ea0ca3b585
import Person from './Person/Person';
import { isClassExpression } from '@babel/types';
import { constants } from 'fs';
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput.js'

<<<<<<< HEAD

 
 const app = props =>{}
 const [ personState, setPersonsState ] = useState({
=======
export default class App extends Component {
  state = {
    username: 'superman',
>>>>>>> 7a84e66481b6c8fdbb04ae33f49987ea0ca3b585
    persons: [
      { id: 'gfts', name: 'Max', age: 28 },
      { id: 'aszr', name: 'Manu', age: 29 },
      { id: 'kjkl', name: 'Stephanie', age: 26 }
    ],
<<<<<<< HEAD
    otherState: 'some other value'
  });
    return (
      <div className="App">
       <h1>Hi, i'm a React app</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        />
       <Person 
        name={personsState.persons[0].name} 
        age={personsStatee.persons[0].age}
        />
       <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>
        My Hobbies: Racing
        </Person>
       <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        />
      </div>
    );
    
    /**Voilà pourquoi JSX est si important car sans JSX, on farait ceci pour avoir le même resultat */
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,  'Does this work now ?'));
=======
    otherState: 'some other value',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex=this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //Alternative using Object.assign
    //const person = Object.assign({}, this.state.persons[personIndex]
      
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();//MAKE A COPY
    const persons = [...this.state.persons];//Spread Operator ES6 Features
    persons.splice(personIndex, 1);// EDIT THIS TO NEW ONE
    this.setState({ persons: persons });// UPDATE THE NEW ARRAY
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

   // let classes =['red', 'bold'].join(' '); // i will get "red bold"
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');//classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');//classes = ['red', 'bold']
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={() => this.togglePersonHandler()}>Switch Name</button>
        {persons}

        {/* <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.inputChangeHandler} currentName={this.state.username} />
        <UserOutput userName ={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max"/> */}
      </div>
    )
>>>>>>> 7a84e66481b6c8fdbb04ae33f49987ea0ca3b585
  }


<<<<<<< HEAD
export default App;



  switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Cedric';
    this.setState( {
      persons: [
      { name: 'Cedric', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
    })
  }
=======
>>>>>>> 7a84e66481b6c8fdbb04ae33f49987ea0ca3b585
