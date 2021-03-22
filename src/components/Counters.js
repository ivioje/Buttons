import React, { Component } from 'react';
import Counter from './Counter.js';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render () {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
           counter={counter}
          >
            <h2>counter #{counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
