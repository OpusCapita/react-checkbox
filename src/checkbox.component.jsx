/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
import './checkbox.component.scss';

export default class Checkbox extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    onKeyDown: PropTypes.func,
    inputRef: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    className: null,
    disabled: false,
    id: null,
    label: null,
    onKeyDown: null,
    inputRef: null,
  }

  onClick = (e) => {
    if (!this.props.disabled) {
      this.props.onChange(e);
    }
    e.preventDefault();
  }

  renderCheckbox = className => (
    this.props.disabled ?
      <div className={className}>
        <FaCheck />
      </div> :
      <a className={className} href="#" onClick={this.onClick} onKeyDown={this.props.onKeyDown} ref={this.props.inputRef} >
        <FaCheck />
      </a>
  )

  render() {
    const className = classNames('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return (
      <div className={className} id={this.props.id}>
        {this.renderCheckbox('icon')}
        <span>{this.props.label}</span>
      </div>
    );
  }
}
