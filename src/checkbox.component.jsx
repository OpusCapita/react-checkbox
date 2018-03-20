import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
import { Checkbox as C } from 'react-bootstrap';
import './checkbox.component.scss';

export default class Checkbox extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
  }

  static defaultProps = {
    checked: false,
    className: null,
    disabled: false,
    label: null,
  }

  onClick = (e) => {
    if (!this.props.disabled) {
      this.props.onChange(e);
    }
  }

  render() {
    const className = classNames('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return (
      <div className={className}>
        <a href="#" onClick={this.onClick}>
          <FaCheck />
        </a>
        <span>{this.props.label}</span>
      </div>
    );
  }
}
