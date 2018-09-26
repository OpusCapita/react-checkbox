'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2; /* eslint-disable jsx-a11y/anchor-is-valid */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _check = require('react-icons/lib/fa/check');

var _check2 = _interopRequireDefault(_check);

require('./checkbox.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _this.props.disabled ? _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_check2.default, null)
      ) : _react2.default.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick, onKeyDown: _this.onKeyDown, ref: _this.props.inputRef },
        _react2.default.createElement(_check2.default, null)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var className = (0, _classnames2.default)('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return _react2.default.createElement(
      'div',
      { className: className, id: this.props.id },
      this.renderCheckbox('icon'),
      _react2.default.createElement(
        'span',
        null,
        this.props.label
      )
    );
  };

  return Checkbox;
}(_react2.default.PureComponent), _class.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string]),
  onKeyDown: _propTypes2.default.func,
  inputRef: _propTypes2.default.func
}, _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  onKeyDown: function onKeyDown() {},
  inputRef: null
}, _temp2);
exports.default = Checkbox;