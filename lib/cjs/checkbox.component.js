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
      e.preventDefault();
      if (!_this.props.disabled) _this.props.onChange(e);
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) _this.triggerClick();
      _this.props.onKeyDown(e);
    }, _this.triggerClick = function (e) {
      e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsImtleUNvZGUiLCJ0cmlnZ2VyQ2xpY2siLCJjaGVja2JveCIsImNsaWNrIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ0YWJJbmRleCIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiY2xzTmFtZXMiLCJlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBQUE7O0FBS0E7OztBQUpBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7OztnS0ErQm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2ZBLFFBQUVDLGNBQUY7QUFDQSxVQUFJLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxRQUFoQixFQUEwQixNQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JKLENBQXBCO0FBQzNCLEssUUFNREssUyxHQUFZLFVBQUNMLENBQUQsRUFBTztBQUNqQixVQUFJQSxFQUFFTSxPQUFGLEtBQWMsRUFBZCxJQUFvQixDQUFDLE1BQUtKLEtBQUwsQ0FBV0MsUUFBcEMsRUFBOEMsTUFBS0ksWUFBTDtBQUM5QyxZQUFLTCxLQUFMLENBQVdHLFNBQVgsQ0FBcUJMLENBQXJCO0FBQ0QsSyxRQUtETyxZLEdBQWUsVUFBQ1AsQ0FBRCxFQUFPO0FBQ3BCQSxRQUFFQyxjQUFGO0FBQ0EsWUFBS08sUUFBTCxDQUFjQyxLQUFkO0FBQ0QsSyxRQUdEQyxjLEdBQWlCO0FBQUEsYUFDZixNQUFLUixLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXUSxTQUFoQjtBQUNFLHNDQUFDLGVBQUQ7QUFERixPQURGLEdBSUU7QUFBQTtBQUFBO0FBQ0UscUJBQVdBLFNBRGI7QUFFRSxnQkFBSyxHQUZQO0FBR0UsbUJBQVMsTUFBS0osWUFIaEI7QUFJRSxxQkFBVyxNQUFLRixTQUpsQjtBQUtFLGVBQUssTUFBS0gsS0FBTCxDQUFXVSxRQUxsQjtBQU1FLG1CQUFTLE1BQUtWLEtBQUwsQ0FBV1csT0FOdEI7QUFPRSxrQkFBUSxNQUFLWCxLQUFMLENBQVdZLE1BUHJCO0FBUUUsb0JBQVUsTUFBS1osS0FBTCxDQUFXYTtBQVJ2QjtBQVVFLHNDQUFDLGVBQUQ7QUFWRixPQUxhO0FBQUEsSzs7O0FBbEJqQjs7Ozs7O0FBU0E7Ozs7O3FCQTZCQUMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUdILEtBQUtkLEtBSEY7QUFBQSxRQUVMZSxPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJZCxRQUZKLFVBRUlBLFFBRko7QUFBQSxRQUVjUSxTQUZkLFVBRWNBLFNBRmQ7QUFBQSxRQUV5Qk8sRUFGekIsVUFFeUJBLEVBRnpCO0FBQUEsUUFFNkJDLEtBRjdCLFVBRTZCQSxLQUY3Qjs7O0FBS1AsUUFBTUMsV0FBVywwQkFBVyxhQUFYLEVBQTBCVCxTQUExQixFQUFxQztBQUNwRE0sc0JBRG9EO0FBRXBEZDtBQUZvRCxLQUFyQyxDQUFqQjs7QUFLQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdpQixRQUFoQixFQUEwQixJQUFJRixFQUE5QjtBQUNHLFdBQUtSLGNBQUwsQ0FBb0IsTUFBcEIsQ0FESDtBQUVFO0FBQUE7QUFBQTtBQUFPUztBQUFQLE9BRkY7QUFHRTtBQUNFLGNBQUssVUFEUDtBQUVFLGNBQU1ELEVBRlI7QUFHRSxpQkFBU0QsT0FIWDtBQUlFLGtCQUFVZCxRQUpaO0FBS0Usa0JBQVUsS0FBS0osT0FMakI7QUFNRSxhQUFLLGFBQUNzQixFQUFELEVBQVE7QUFDWCxpQkFBS2IsUUFBTCxHQUFnQmEsRUFBaEI7QUFDRDtBQVJIO0FBSEYsS0FERjtBQWdCRCxHOzs7RUFwR21DQyxnQkFBTUMsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCUCxXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQlIsWUFBVSxLQUhVO0FBSXBCZSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJkLGFBQVcscUJBQU0sQ0FDaEIsQ0FQbUI7QUFRcEJRLFdBQVMsbUJBQU0sQ0FDZCxDQVRtQjtBQVVwQkMsVUFBUSxrQkFBTSxDQUNiLENBWG1CO0FBWXBCRixZQUFVLElBWlU7QUFhcEJHLFlBQVU7QUFiVSxDO2tCQWZIakIsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuLy8gQXBwXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiAnMCcsXG4gIH07XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBzcGFjZSBrZXkgcHJlc3MgKGtleUNvZGUgPT09IDMyKVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkgdGhpcy50cmlnZ2VyQ2xpY2soKTtcbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfTtcblxuICAvKipcbiAgICogVHJpZ2dlcnMgY2xpY2sgZXZlbnQgb24gY2hlY2tib3ggaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgdHJpZ2dlckNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGVja2JveC5jbGljaygpO1xuICB9O1xuXG5cbiAgcmVuZGVyQ2hlY2tib3ggPSBjbGFzc05hbWUgPT4gKFxuICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgP1xuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2Rpdj4gOlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgb25DbGljaz17dGhpcy50cmlnZ2VyQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XG4gICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5wcm9wcy5vbkZvY3VzfVxuICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cbiAgICAgID5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvYT5cbiAgKTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBpZCwgbGFiZWwsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbHNOYW1lcyA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgY2xhc3NOYW1lLCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc05hbWVzfSBpZD17aWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3ggPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19