import React from 'react';
import { DropdownContainer } from './Dropdown.styled';

export class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <DropdownContainer>
        <div>DROPDOWN</div>
        {/* onMouseOver={this.toggle} - hover */}
        <button onClick={this.toggle}>
          {this.state.visible ? 'Close' : 'Open'}
        </button>
        {this.state.visible && <div>Dropdown menu</div>}
      </DropdownContainer>
    );
  }
}
