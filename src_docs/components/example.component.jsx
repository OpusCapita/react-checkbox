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
    this.setState({ [e.target.value]: e.target.checked });
  };

  getCheckboxes = () => {
    const checkboxes = ['Checked', 'Unnamed', 'Unchecked', 'Disabled', 'Disabled unchecked'];
    return checkboxes.map(box => ({
      id: `${box.toLowerCase()}-checkbox`,
      value: box.toLowerCase(),
      name: 'boxes',
      label: box,
      disabled: box.includes('Disabled'),
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
              name={checkbox.name}
              value={checkbox.value}
              label={checkbox.label}
              checked={this.state[checkbox.value]}
              key={checkbox.id}
              disabled={checkbox.disabled}
            />
          ))}
      </div>
    );
  }
}
