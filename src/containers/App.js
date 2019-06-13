import React, {
  Component
} from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    username: 'superman',
    persons: [{
        id: 'gfts',
        name: 'Max',
        age: 28
      },
      {
        id: 'aszr',
        name: 'Manu',
        age: 29
      },
      {
        id: 'kjkl',
        name: 'Stephanie',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');

  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [{
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
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

    this.setState({
      persons: persons
    });
  }
  inputChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();//MAKE A COPY
    const persons = [...this.state.persons]; //Spread Operator ES6 Features
    persons.splice(personIndex, 1); // EDIT THIS TO NEW ONE
    this.setState({
      persons: persons
    }); // UPDATE THE NEW ARRAY
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    console.log('[App.js] render');

    let persons = null;


    if (this.state.showPersons) {
      persons = < Persons
      persons = {
        this.state.persons
      }
      clicked = {
        this.deletePersonHandler
      }
      changed = {
        this.nameChangedHandler
      }
      />;

    }

    return ( <
      div className = {
        classes.App
      } >
      <
      Cockpit title = {
        this.props.appTitle
      }
      showPersons = {
        this.state.showPersons
      }
      persons = {
        this.state.persons
      }
      clicked = {
        this.togglePersonHandler
      }
      /> {
        persons
      }

      <
      /div>

    )
  }
}
export default App;