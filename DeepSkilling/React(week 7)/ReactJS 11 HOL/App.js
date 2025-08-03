import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    // Binding methods for 'this'
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  // Multiple method call in one click
  handleIncrementClick = () => {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticEvent(e) {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Event Examples App</h1>
        
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        
        <hr />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        
        <hr />

        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
