/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
// App
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
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    inputRef: PropTypes.func,
    tabIndex: PropTypes.string,
  };

  static defaultProps = {
    checked: false,
    className: null,
    disabled: false,
    id: null,
    label: null,
    onKeyDown: () => {
    },
    onFocus: () => {
    },
    onBlur: () => {
    },
    inputRef: null,
    tabIndex: '0',
  };

  onClick = (e) => {
    e.preventDefault();
    if (!this.props.disabled) this.props.onChange(e);
  };

  /**
   * Handles space key press (keyCode === 32)
   * @param e
   */
  onKeyDown = (e) => {
    if (e.keyCode === 32 && !this.props.disabled) this.triggerClick();
    this.props.onKeyDown(e);
  };

  /**
   * Triggers click event on checkbox input element
   */
  triggerClick = (e) => {
    e.preventDefault();
    this.checkbox.click();
  };


  renderCheckbox = className => (
    this.props.disabled ?
      <div className={className}>
        <FaCheck />
      </div> :
      <a
        className={className}
        href="#"
        onClick={this.triggerClick}
        onKeyDown={this.onKeyDown}
        ref={this.props.inputRef}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        tabIndex={this.props.tabIndex}
      >
        <FaCheck />
      </a>
  );


  render() {
    const {
      checked, disabled, className, id, label,
    } = this.props;

    const clsNames = classNames('oc-checkbox', className, {
      checked,
      disabled,
    });

    return (
      <div className={clsNames} id={id}>
        {this.renderCheckbox('icon')}
        <span>{label}</span>
        <input
          type="checkbox"
          name={id}
          checked={checked}
          disabled={disabled}
          onChange={this.onClick}
          ref={(el) => {
            this.checkbox = el;
          }}
        />
      </div>
    );
  }
}
