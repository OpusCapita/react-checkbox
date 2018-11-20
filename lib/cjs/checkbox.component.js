'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2; /* eslint-disable jsx-a11y/anchor-is-valid */

// App


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
      if (!_this.props.disabled) _this.props.onChange(e);
      e.preventDefault();
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) _this.triggerClick();
      _this.props.onKeyDown(e);
    }, _this.triggerClick = function () {
      _this.checkbox.click();
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
          onClick: _this.triggerClick,
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

  /**
   * Handles space key press (keyCode === 32)
   * @param e
   */


  /**
   * Triggers click event on checkbox input element
   */


  Checkbox.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        className = _props.className,
        id = _props.id,
        label = _props.label;


    var clsNames = (0, _classnames2.default)('oc-checkbox', className, {
      checked: checked,
      disabled: disabled
    });

    return _react2.default.createElement(
      'div',
      { className: clsNames, id: id },
      this.renderCheckbox('icon'),
      _react2.default.createElement(
        'span',
        null,
        label
      ),
      _react2.default.createElement('input', {
        type: 'checkbox',
        name: id,
        checked: checked,
        disabled: disabled,
        onChange: this.onClick,
        ref: function ref(el) {
          _this2.checkbox = el;
        }
      })
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
  tabIndex: '0'
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJ0cmlnZ2VyQ2xpY2siLCJjaGVja2JveCIsImNsaWNrIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ0YWJJbmRleCIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiY2xzTmFtZXMiLCJlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBQUE7O0FBS0E7OztBQUpBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7OztnS0ErQm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEIsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUMxQkEsUUFBRUksY0FBRjtBQUNELEssUUFNREMsUyxHQUFZLFVBQUNMLENBQUQsRUFBTztBQUNqQixVQUFJQSxFQUFFTSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDLE1BQUtMLEtBQUwsQ0FBV0MsUUFBcEMsRUFBOEMsTUFBS0ssWUFBTDtBQUM5QyxZQUFLTixLQUFMLENBQVdJLFNBQVgsQ0FBcUJMLENBQXJCO0FBQ0QsSyxRQUtETyxZLEdBQWUsWUFBTTtBQUNuQixZQUFLQyxRQUFMLENBQWNDLEtBQWQ7QUFDRCxLLFFBR0RDLGMsR0FBaUI7QUFBQSxhQUNmLE1BQUtULEtBQUwsQ0FBV0MsUUFBWCxHQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdTLFNBQWhCO0FBQ0Usc0NBQUMsZUFBRDtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUE7QUFDRSxxQkFBV0EsU0FEYjtBQUVFLGdCQUFLLEdBRlA7QUFHRSxtQkFBUyxNQUFLSixZQUhoQjtBQUlFLHFCQUFXLE1BQUtGLFNBSmxCO0FBS0UsZUFBSyxNQUFLSixLQUFMLENBQVdXLFFBTGxCO0FBTUUsbUJBQVMsTUFBS1gsS0FBTCxDQUFXWSxPQU50QjtBQU9FLGtCQUFRLE1BQUtaLEtBQUwsQ0FBV2EsTUFQckI7QUFRRSxvQkFBVSxNQUFLYixLQUFMLENBQVdjO0FBUnZCO0FBVUUsc0NBQUMsZUFBRDtBQVZGLE9BTGE7QUFBQSxLOzs7QUFqQmpCOzs7Ozs7QUFTQTs7Ozs7cUJBNEJBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBR0gsS0FBS2YsS0FIRjtBQUFBLFFBRUxnQixPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJZixRQUZKLFVBRUlBLFFBRko7QUFBQSxRQUVjUyxTQUZkLFVBRWNBLFNBRmQ7QUFBQSxRQUV5Qk8sRUFGekIsVUFFeUJBLEVBRnpCO0FBQUEsUUFFNkJDLEtBRjdCLFVBRTZCQSxLQUY3Qjs7O0FBS1AsUUFBTUMsV0FBVywwQkFBVyxhQUFYLEVBQTBCVCxTQUExQixFQUFxQztBQUNwRE0sc0JBRG9EO0FBRXBEZjtBQUZvRCxLQUFyQyxDQUFqQjs7QUFLQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdrQixRQUFoQixFQUEwQixJQUFJRixFQUE5QjtBQUNHLFdBQUtSLGNBQUwsQ0FBb0IsTUFBcEIsQ0FESDtBQUVFO0FBQUE7QUFBQTtBQUFPUztBQUFQLE9BRkY7QUFHRTtBQUNFLGNBQUssVUFEUDtBQUVFLGNBQU1ELEVBRlI7QUFHRSxpQkFBU0QsT0FIWDtBQUlFLGtCQUFVZixRQUpaO0FBS0Usa0JBQVUsS0FBS0gsT0FMakI7QUFNRSxhQUFLLGFBQUNzQixFQUFELEVBQVE7QUFDWCxpQkFBS2IsUUFBTCxHQUFnQmEsRUFBaEI7QUFDRDtBQVJIO0FBSEYsS0FERjtBQWdCRCxHOzs7RUFuR21DQyxnQkFBTUMsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCUCxXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQlQsWUFBVSxLQUhVO0FBSXBCZ0IsTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCZCxhQUFXLHFCQUFNLENBQ2hCLENBUG1CO0FBUXBCUSxXQUFTLG1CQUFNLENBQ2QsQ0FUbUI7QUFVcEJDLFVBQVEsa0JBQU0sQ0FDYixDQVhtQjtBQVlwQkYsWUFBVSxJQVpVO0FBYXBCRyxZQUFVO0FBYlUsQztrQkFmSGpCLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbi8vIEFwcFxuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uS2V5RG93bjogKCkgPT4ge1xuICAgIH0sXG4gICAgb25Gb2N1czogKCkgPT4ge1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgfSxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgICB0YWJJbmRleDogJzAnLFxuICB9O1xuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc3BhY2Uga2V5IHByZXNzIChrZXlDb2RlID09PSAzMilcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHRoaXMudHJpZ2dlckNsaWNrKCk7XG4gICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGNsaWNrIGV2ZW50IG9uIGNoZWNrYm94IGlucHV0IGVsZW1lbnRcbiAgICovXG4gIHRyaWdnZXJDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrYm94LmNsaWNrKCk7XG4gIH07XG5cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvZGl2PiA6XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJDbGlja31cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLnByb3BzLm9uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApO1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBjbGFzc05hbWUsIGlkLCBsYWJlbCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsc05hbWVzID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCBjbGFzc05hbWUsIHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzTmFtZXN9IGlkPXtpZH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGlja31cbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveCA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=