var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
import './checkbox.component.scss';

var Checkbox = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.onClick = function (e) {
      if (!_this.props.disabled) {
        _this.props.onChange(e);
      }
      e.preventDefault();
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) {
        _this.props.onChange(e);
      }
      _this.props.onKeyDown(e);
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? React.createElement(
        'div',
        { className: className },
        React.createElement(FaCheck, null)
      ) : React.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick, onKeyDown: _this.onKeyDown, ref: _this.props.inputRef },
        React.createElement(FaCheck, null)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var className = classNames('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return React.createElement(
      'div',
      { className: className, id: this.props.id },
      this.renderCheckbox('icon'),
      React.createElement(
        'span',
        null,
        this.props.label
      )
    );
  };

  return Checkbox;
}(React.PureComponent), _class.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onKeyDown: PropTypes.func,
  inputRef: PropTypes.func
}, _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  onKeyDown: function onKeyDown() {},
  inputRef: null
}, _temp2);
export { Checkbox as default };