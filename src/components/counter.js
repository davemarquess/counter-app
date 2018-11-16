import React from 'react';

const Counter = (props) => {
  const { handleIncrement, handleDecrement, count, handleReset } = props;
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.props.count}</p>
//         <button onClick={this.props.handleIncrement}>+1</button>
//         <button onClick={this.props.handleDecrement}>-1</button>
//         <button onClick={this.props.handleReset}>Reset</button>
//       </div>
//     )
//   }
// }

export default Counter;