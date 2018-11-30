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
    onFocus: () => {
    },
    onBlur: () => {
    },
    inputRef: null,
    tabIndex: null,
  };

  constructor() {
    super();
    this.state = { focused: false };
  }

  onFocus = (e) => {
    this.setState({ focused: true }, () => {
      this.props.onFocus(e);
    });
  };

  onBlur = (e) => {
    this.setState({ focused: false }, () => {
      this.props.onBlur(e);
    });
  };

  onChange = (e) => {
    const { disabled } = this.props;
    if (!disabled) this.props.onChange(e);
  };

  renderCheckbox = (className) => {
    const {
      checked, disabled, id, label, tabIndex,
    } = this.props;

    return (
      <label
        htmlFor={`${this.props.id}-checkbox`}
        className={className}
      >
        <input
          type="checkbox"
          name={id}
          id={`${id}-checkbox`}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          ref={this.props.inputRef}
          tabIndex={tabIndex}
        />
        <FaCheck focusable="false" />
        {label}
      </label>);
  };


  render() {
    const {
      checked, disabled, className, id, label, tabIndex, onBlur, onFocus, onChange,
      inputRef, ...rest
    } = this.props;

    const clsNames = classNames('oc-checkbox', className, {
      checked,
      disabled,
      focused: this.state.focused,
    });

    return (
      <div className={clsNames} id={id} {...rest}>
        {this.renderCheckbox('icon')}
      </div>
    );
  }
}
