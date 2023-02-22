import React from 'react';
import { Controls } from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 4,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncFnc = () => {
    // console.log('OnClick+');
    // console.log(this);
    // console.log(event.target);
    // this.setState({ value: 10 }); //or object, or func
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecFnc = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncFnc}
          onDecrement={this.handleDecFnc}
        />
      </div>
    );
  }
}

export default Counter;

///////////////////////////////////////////////\/
// import { Component } from 'react';

// export class Feedback extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   //   IncFnc = () => this.setState({ value: this.state.value + 1 }); //DONT DO THIS
//   IncFnc = () =>
//     this.setState((prevState, props) => {
//       //   console.log('props in setState:', props);
//       //   console.log('prevState in setState:', prevState);

//       return { value: prevState.value + props.step };
//     });
//   // console.log('ON');
//   // console.log(this.props);
//   // console.log(event);

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.IncFnc}>
//           Increment by {step}
//         </button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }
