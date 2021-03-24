import React, { Component } from 'react';
import Counter from './Counter.js';

class Counters extends Component {
  render() {

    return (
      <div>
        <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
  
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          >
            <h2>counter #{counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  };
  }

export default Counters;
