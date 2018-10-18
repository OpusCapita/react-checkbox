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
        {
          className: className,
          href: '#',
          onClick: _this.onClick,
          onKeyDown: _this.onKeyDown,
          ref: _this.props.inputRef,
          onFocus: _this.props.onFocus,
          onBlur: _this.props.onBlur,
          tabIndex: _this.props.tabIndex
        },
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
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  inputRef: null,
  tabIndex: 0
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwib25Gb2N1cyIsIm9uQmx1ciIsInRhYkluZGV4IiwicmVuZGVyIiwiY2hlY2tlZCIsImlkIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztvQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7O2dLQTRCbkJDLE8sR0FBVSxVQUFDQyxDQUFELEVBQU87QUFDZixVQUFJLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxRQUFoQixFQUEwQjtBQUN4QixjQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JILENBQXBCO0FBQ0Q7QUFDREEsUUFBRUksY0FBRjtBQUNELEssUUFFREMsUyxHQUFZLFVBQUNMLENBQUQsRUFBTztBQUNqQixVQUFJQSxFQUFFTSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDLE1BQUtMLEtBQUwsQ0FBV0MsUUFBcEMsRUFBOEM7QUFDNUMsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0QsWUFBS0MsS0FBTCxDQUFXSSxTQUFYLENBQXFCTCxDQUFyQjtBQUNELEssUUFFRE8sYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS04sS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV00sU0FBaEI7QUFDRTtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUE7QUFDRSxxQkFBV0EsU0FEYjtBQUVFLGdCQUFLLEdBRlA7QUFHRSxtQkFBUyxNQUFLVCxPQUhoQjtBQUlFLHFCQUFXLE1BQUtNLFNBSmxCO0FBS0UsZUFBSyxNQUFLSixLQUFMLENBQVdRLFFBTGxCO0FBTUUsbUJBQVMsTUFBS1IsS0FBTCxDQUFXUyxPQU50QjtBQU9FLGtCQUFRLE1BQUtULEtBQUwsQ0FBV1UsTUFQckI7QUFRRSxvQkFBVSxNQUFLVixLQUFMLENBQVdXO0FBUnZCO0FBVUU7QUFWRixPQUxhO0FBQUEsSzs7O3FCQW1CakJDLE0scUJBQVM7QUFDUCxRQUFNTCxZQUFZLDBCQUFXLGFBQVgsRUFBMEIsS0FBS1AsS0FBTCxDQUFXTyxTQUFyQyxFQUFnRCxFQUFFTSxTQUFTLEtBQUtiLEtBQUwsQ0FBV2EsT0FBdEIsRUFBK0JaLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUFwRCxFQUFoRCxDQUFsQjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV00sU0FBaEIsRUFBMkIsSUFBSSxLQUFLUCxLQUFMLENBQVdjLEVBQTFDO0FBQ0csV0FBS1IsY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU8sYUFBS04sS0FBTCxDQUFXZTtBQUFsQjtBQUZGLEtBREY7QUFNRCxHOzs7RUFyRW1DLGdCQUFNQyxhLFVBZW5DQyxZLEdBQWU7QUFDcEJKLFdBQVMsS0FEVztBQUVwQk4sYUFBVyxJQUZTO0FBR3BCTixZQUFVLEtBSFU7QUFJcEJhLE1BQUksSUFKZ0I7QUFLcEJDLFNBQU8sSUFMYTtBQU1wQlgsYUFBVyxxQkFBTSxDQUFFLENBTkM7QUFPcEJLLFdBQVMsbUJBQU0sQ0FBRSxDQVBHO0FBUXBCQyxVQUFRLGtCQUFNLENBQUUsQ0FSSTtBQVNwQkYsWUFBVSxJQVRVO0FBVXBCRyxZQUFVO0FBVlUsQztrQkFmSGQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7fSxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiAwLFxuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDMyICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcbiAgICB0aGlzLnByb3BzLmRpc2FibGVkID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLnByb3BzLm9uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=