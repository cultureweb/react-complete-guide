import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'ced', age: 42 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: personState.otherState
    });
  }
  return (
    <div className="App">
      <h1>Hi, i'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}


export default App;