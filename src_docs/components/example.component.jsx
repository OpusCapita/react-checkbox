import React from 'react';
import Checkbox from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      unnamed: false,
      unchecked: false,
      disabled: true,
    };
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Checkbox
          checked={this.state.checked}
          onChange={() => {this.setState({ checked: !this.state.checked })}}
          label="Checked"
        />
        <Checkbox
          checked={this.state.unnamed}
          onChange={() => {this.setState({ unnamed: !this.state.unnamed })}}
        />
        <Checkbox
          checked={this.state.unchecked}
          onChange={() => {this.setState({ unchecked: !this.state.unchecked })}}
          label="Unchecked"
        />
        <Checkbox
          checked={this.state.disabled}
          disabled
          onChange={() => {this.setState({ disabled: !this.state.disabled })}}
          label="Disabled"
        />
      </div>
    );
  }
}
