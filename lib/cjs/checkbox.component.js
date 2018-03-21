'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _check = require('react-icons/lib/fa/check');

var _check2 = _interopRequireDefault(_check);

var _reactBootstrap = require('react-bootstrap');

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
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_check2.default, null)
      ) : _react2.default.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick },
        _react2.default.createElement(_check2.default, null)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var className = (0, _classnames2.default)('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return _react2.default.createElement(
      'div',
      { className: className },
      this.renderCheckbox('icon'),
      _react2.default.createElement(
        'span',
        null,
        this.props.label
      )
    );
  };

  return Checkbox;
}(_react2.default.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  label: null
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsInJlbmRlciIsImNoZWNrZWQiLCJsYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Z0tBZ0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNGLEssUUFFREksYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS0gsS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0csU0FBaEI7QUFDRTtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUEsVUFBRyxXQUFXQSxTQUFkLEVBQXlCLE1BQUssR0FBOUIsRUFBa0MsU0FBUyxNQUFLTixPQUFoRDtBQUNFO0FBREYsT0FMYTtBQUFBLEs7OztxQkFVakJPLE0scUJBQVM7QUFDUCxRQUFNRCxZQUFZLDBCQUFXLGFBQVgsRUFBMEIsS0FBS0osS0FBTCxDQUFXSSxTQUFyQyxFQUFnRCxFQUFFRSxTQUFTLEtBQUtOLEtBQUwsQ0FBV00sT0FBdEIsRUFBK0JMLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUFwRCxFQUFoRCxDQUFsQjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV0csU0FBaEI7QUFDRyxXQUFLRCxjQUFMLENBQW9CLE1BQXBCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFBTyxhQUFLSCxLQUFMLENBQVdPO0FBQWxCO0FBRkYsS0FERjtBQU1ELEc7OztFQXhDbUMsZ0JBQU1DLGEsVUFTbkNDLFksR0FBZTtBQUNwQkgsV0FBUyxLQURXO0FBRXBCRixhQUFXLElBRlM7QUFHcEJILFlBQVUsS0FIVTtBQUlwQk0sU0FBTztBQUphLEM7a0JBVEhWLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5pbXBvcnQgeyBDaGVja2JveCBhcyBDIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnLi9jaGVja2JveC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBsYWJlbDogbnVsbCxcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/IFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2Rpdj4gOlxuICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvYT5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCdvYy1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7IGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCwgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=