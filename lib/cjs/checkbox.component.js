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
}(_react2.default.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  onKeyDown: function onKeyDown() {},
  inputRef: null
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwicmVuZGVyIiwiY2hlY2tlZCIsImlkIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztvQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7O2dLQXNCbkJDLE8sR0FBVSxVQUFDQyxDQUFELEVBQU87QUFDZixVQUFJLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxRQUFoQixFQUEwQjtBQUN4QixjQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JILENBQXBCO0FBQ0Q7QUFDREEsUUFBRUksY0FBRjtBQUNELEssUUFFREMsUyxHQUFZLFVBQUNMLENBQUQsRUFBTztBQUNqQixVQUFJQSxFQUFFTSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDLE1BQUtMLEtBQUwsQ0FBV0MsUUFBcEMsRUFBOEM7QUFDNUMsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0QsWUFBS0MsS0FBTCxDQUFXSSxTQUFYLENBQXFCTCxDQUFyQjtBQUNELEssUUFFRE8sYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS04sS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV00sU0FBaEI7QUFDRTtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUEsVUFBRyxXQUFXQSxTQUFkLEVBQXlCLE1BQUssR0FBOUIsRUFBa0MsU0FBUyxNQUFLVCxPQUFoRCxFQUF5RCxXQUFXLE1BQUtNLFNBQXpFLEVBQW9GLEtBQUssTUFBS0osS0FBTCxDQUFXUSxRQUFwRztBQUNFO0FBREYsT0FMYTtBQUFBLEs7OztxQkFVakJDLE0scUJBQVM7QUFDUCxRQUFNRixZQUFZLDBCQUFXLGFBQVgsRUFBMEIsS0FBS1AsS0FBTCxDQUFXTyxTQUFyQyxFQUFnRCxFQUFFRyxTQUFTLEtBQUtWLEtBQUwsQ0FBV1UsT0FBdEIsRUFBK0JULFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUFwRCxFQUFoRCxDQUFsQjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV00sU0FBaEIsRUFBMkIsSUFBSSxLQUFLUCxLQUFMLENBQVdXLEVBQTFDO0FBQ0csV0FBS0wsY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU8sYUFBS04sS0FBTCxDQUFXWTtBQUFsQjtBQUZGLEtBREY7QUFNRCxHOzs7RUF0RG1DLGdCQUFNQyxhLFVBWW5DQyxZLEdBQWU7QUFDcEJKLFdBQVMsS0FEVztBQUVwQkgsYUFBVyxJQUZTO0FBR3BCTixZQUFVLEtBSFU7QUFJcEJVLE1BQUksSUFKZ0I7QUFLcEJDLFNBQU8sSUFMYTtBQU1wQlIsYUFBVyxxQkFBTSxDQUFFLENBTkM7QUFPcEJJLFlBQVU7QUFQVSxDO2tCQVpIWCxRIiwiZmlsZSI6ImNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gIH1cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvZGl2PiA6XG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn0gPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=