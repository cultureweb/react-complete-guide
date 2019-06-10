import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


 
 const app = props =>{}
 const [ personState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
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
  }


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