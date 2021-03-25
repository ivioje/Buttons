import React, { Component } from 'react';
import Counter from './Counter.js';

class Counters extends Component {
  render () {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
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
