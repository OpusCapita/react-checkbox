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
      event: false,
    };
  }

  onCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  getCheckboxes = () => {
    const checkboxes = ['Checked', 'Unnamed', 'Unchecked', 'Disabled'];
    return checkboxes.map(box => ({
      id: box.toLowerCase(),
      label: box,
      disabled: box === 'Disabled',
    }));
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.getCheckboxes()
          .map(checkbox => (
            <Checkbox
              onChange={this.onCheckboxChange}
              id={checkbox.id}
              label={checkbox.label}
              checked={this.state[checkbox.id]}
              key={checkbox.id}
              disabled={checkbox.disabled}
            />
          ))}
      </div>
    );
  }
}
