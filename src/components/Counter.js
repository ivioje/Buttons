import React, { Component } from 'react';

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  render () {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className='btn btn-primary m-2 btn-sm'
        >
          Decrement
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
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
