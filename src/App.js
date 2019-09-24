import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0,
    error: null
  }

  decrementWithSafety = () => {
    if(this.state.counter >= 1){
      this.setState({
        counter: this.state.counter -1 
      })
    }else{
      this.setState({
        error: 'Cant decrement the counter below 0'
      })
    }
  }

  render(){
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        {this.state.error ? <h2 data-test="error-message">{this.state.error}</h2> : null}
        <button 
          data-test="increment-button" 
          onClick={() => this.setState({counter: this.state.counter + 1, error: null})}
          >
            Increment
        </button>
        <button 
          data-test="decrement-button" 
          onClick={this.decrementWithSafety}
          >
            Decrement
        </button>
      </div>
    );
  }
 
}

export default App;
