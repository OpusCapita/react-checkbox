var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
// App
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
      if (!_this.props.disabled) _this.props.onChange(e);
      e.preventDefault();
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) _this.triggerClick();
      _this.props.onKeyDown(e);
    }, _this.triggerClick = function () {
      _this.checkbox.click();
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? React.createElement(
        'div',
        { className: className },
        React.createElement(FaCheck, null)
      ) : React.createElement(
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
        React.createElement(FaCheck, null)
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


    var clsNames = classNames('oc-checkbox', className, {
      checked: checked,
      disabled: disabled
    });

    return React.createElement(
      'div',
      { className: clsNames, id: id },
      this.renderCheckbox('icon'),
      React.createElement(
        'span',
        null,
        label
      ),
      React.createElement('input', {
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
}(React.PureComponent), _class.defaultProps = {
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
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwidHJpZ2dlckNsaWNrIiwiY2hlY2tib3giLCJjbGljayIsInJlbmRlckNoZWNrYm94IiwiY2xhc3NOYW1lIiwiaW5wdXRSZWYiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJyZW5kZXIiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsImNsc05hbWVzIiwiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQTtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7Z0tBK0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCLE1BQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDMUJBLFFBQUVJLGNBQUY7QUFDRCxLLFFBTURDLFMsR0FBWSxVQUFDTCxDQUFELEVBQU87QUFDakIsVUFBSUEsRUFBRU0sT0FBRixLQUFjLEVBQWQsSUFBb0IsQ0FBQyxNQUFLTCxLQUFMLENBQVdDLFFBQXBDLEVBQThDLE1BQUtLLFlBQUw7QUFDOUMsWUFBS04sS0FBTCxDQUFXSSxTQUFYLENBQXFCTCxDQUFyQjtBQUNELEssUUFLRE8sWSxHQUFlLFlBQU07QUFDbkIsWUFBS0MsUUFBTCxDQUFjQyxLQUFkO0FBQ0QsSyxRQUdEQyxjLEdBQWlCO0FBQUEsYUFDZixNQUFLVCxLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXUyxTQUFoQjtBQUNFLDRCQUFDLE9BQUQ7QUFERixPQURGLEdBSUU7QUFBQTtBQUFBO0FBQ0UscUJBQVdBLFNBRGI7QUFFRSxnQkFBSyxHQUZQO0FBR0UsbUJBQVMsTUFBS0osWUFIaEI7QUFJRSxxQkFBVyxNQUFLRixTQUpsQjtBQUtFLGVBQUssTUFBS0osS0FBTCxDQUFXVyxRQUxsQjtBQU1FLG1CQUFTLE1BQUtYLEtBQUwsQ0FBV1ksT0FOdEI7QUFPRSxrQkFBUSxNQUFLWixLQUFMLENBQVdhLE1BUHJCO0FBUUUsb0JBQVUsTUFBS2IsS0FBTCxDQUFXYztBQVJ2QjtBQVVFLDRCQUFDLE9BQUQ7QUFWRixPQUxhO0FBQUEsSzs7O0FBakJqQjs7Ozs7O0FBU0E7Ozs7O3FCQTRCQUMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUdILEtBQUtmLEtBSEY7QUFBQSxRQUVMZ0IsT0FGSyxVQUVMQSxPQUZLO0FBQUEsUUFFSWYsUUFGSixVQUVJQSxRQUZKO0FBQUEsUUFFY1MsU0FGZCxVQUVjQSxTQUZkO0FBQUEsUUFFeUJPLEVBRnpCLFVBRXlCQSxFQUZ6QjtBQUFBLFFBRTZCQyxLQUY3QixVQUU2QkEsS0FGN0I7OztBQUtQLFFBQU1DLFdBQVd4QixXQUFXLGFBQVgsRUFBMEJlLFNBQTFCLEVBQXFDO0FBQ3BETSxzQkFEb0Q7QUFFcERmO0FBRm9ELEtBQXJDLENBQWpCOztBQUtBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV2tCLFFBQWhCLEVBQTBCLElBQUlGLEVBQTlCO0FBQ0csV0FBS1IsY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU9TO0FBQVAsT0FGRjtBQUdFO0FBQ0UsY0FBSyxVQURQO0FBRUUsY0FBTUQsRUFGUjtBQUdFLGlCQUFTRCxPQUhYO0FBSUUsa0JBQVVmLFFBSlo7QUFLRSxrQkFBVSxLQUFLSCxPQUxqQjtBQU1FLGFBQUssYUFBQ3NCLEVBQUQsRUFBUTtBQUNYLGlCQUFLYixRQUFMLEdBQWdCYSxFQUFoQjtBQUNEO0FBUkg7QUFIRixLQURGO0FBZ0JELEc7OztFQW5HbUMzQixNQUFNNEIsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCTixXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQlQsWUFBVSxLQUhVO0FBSXBCZ0IsTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCZCxhQUFXLHFCQUFNLENBQ2hCLENBUG1CO0FBUXBCUSxXQUFTLG1CQUFNLENBQ2QsQ0FUbUI7QUFVcEJDLFVBQVEsa0JBQU0sQ0FDYixDQVhtQjtBQVlwQkYsWUFBVSxJQVpVO0FBYXBCRyxZQUFVO0FBYlUsQztTQWZIakIsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuLy8gQXBwXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiAnMCcsXG4gIH07XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBzcGFjZSBrZXkgcHJlc3MgKGtleUNvZGUgPT09IDMyKVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkgdGhpcy50cmlnZ2VyQ2xpY2soKTtcbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfTtcblxuICAvKipcbiAgICogVHJpZ2dlcnMgY2xpY2sgZXZlbnQgb24gY2hlY2tib3ggaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgdHJpZ2dlckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuY2hlY2tib3guY2xpY2soKTtcbiAgfTtcblxuXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcbiAgICB0aGlzLnByb3BzLmRpc2FibGVkID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudHJpZ2dlckNsaWNrfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICByZWY9e3RoaXMucHJvcHMuaW5wdXRSZWZ9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMucHJvcHMub25Gb2N1c31cbiAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQmx1cn1cbiAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2E+XG4gICk7XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgaWQsIGxhYmVsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xzTmFtZXMgPSBjbGFzc05hbWVzKCdvYy1jaGVja2JveCcsIGNsYXNzTmFtZSwge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNOYW1lc30gaWQ9e2lkfT5cbiAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tib3goJ2ljb24nKX1cbiAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==