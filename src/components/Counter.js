import React, { Component } from 'react';

class Counter extends Component {
  render () {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-primary m-2 btn-sm'
        >
          Decrement
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'zero' : value;
  };

  getBadgeClasses () {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
