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
      e.preventDefault();
      if (!_this.props.disabled) _this.props.onChange(e);
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) _this.triggerClick();
      _this.props.onKeyDown(e);
    }, _this.triggerClick = function (e) {
      e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJrZXlDb2RlIiwidHJpZ2dlckNsaWNrIiwiY2hlY2tib3giLCJjbGljayIsInJlbmRlckNoZWNrYm94IiwiY2xhc3NOYW1lIiwiaW5wdXRSZWYiLCJvbkZvY3VzIiwib25CbHVyIiwidGFiSW5kZXgiLCJyZW5kZXIiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsImNsc05hbWVzIiwiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQTtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7Z0tBK0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEIsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSixDQUFwQjtBQUMzQixLLFFBTURLLFMsR0FBWSxVQUFDTCxDQUFELEVBQU87QUFDakIsVUFBSUEsRUFBRU0sT0FBRixLQUFjLEVBQWQsSUFBb0IsQ0FBQyxNQUFLSixLQUFMLENBQVdDLFFBQXBDLEVBQThDLE1BQUtJLFlBQUw7QUFDOUMsWUFBS0wsS0FBTCxDQUFXRyxTQUFYLENBQXFCTCxDQUFyQjtBQUNELEssUUFLRE8sWSxHQUFlLFVBQUNQLENBQUQsRUFBTztBQUNwQkEsUUFBRUMsY0FBRjtBQUNBLFlBQUtPLFFBQUwsQ0FBY0MsS0FBZDtBQUNELEssUUFHREMsYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS1IsS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV1EsU0FBaEI7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQTtBQUNFLHFCQUFXQSxTQURiO0FBRUUsZ0JBQUssR0FGUDtBQUdFLG1CQUFTLE1BQUtKLFlBSGhCO0FBSUUscUJBQVcsTUFBS0YsU0FKbEI7QUFLRSxlQUFLLE1BQUtILEtBQUwsQ0FBV1UsUUFMbEI7QUFNRSxtQkFBUyxNQUFLVixLQUFMLENBQVdXLE9BTnRCO0FBT0Usa0JBQVEsTUFBS1gsS0FBTCxDQUFXWSxNQVByQjtBQVFFLG9CQUFVLE1BQUtaLEtBQUwsQ0FBV2E7QUFSdkI7QUFVRSw0QkFBQyxPQUFEO0FBVkYsT0FMYTtBQUFBLEs7OztBQWxCakI7Ozs7OztBQVNBOzs7OztxQkE2QkFDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFHSCxLQUFLZCxLQUhGO0FBQUEsUUFFTGUsT0FGSyxVQUVMQSxPQUZLO0FBQUEsUUFFSWQsUUFGSixVQUVJQSxRQUZKO0FBQUEsUUFFY1EsU0FGZCxVQUVjQSxTQUZkO0FBQUEsUUFFeUJPLEVBRnpCLFVBRXlCQSxFQUZ6QjtBQUFBLFFBRTZCQyxLQUY3QixVQUU2QkEsS0FGN0I7OztBQUtQLFFBQU1DLFdBQVd4QixXQUFXLGFBQVgsRUFBMEJlLFNBQTFCLEVBQXFDO0FBQ3BETSxzQkFEb0Q7QUFFcERkO0FBRm9ELEtBQXJDLENBQWpCOztBQUtBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV2lCLFFBQWhCLEVBQTBCLElBQUlGLEVBQTlCO0FBQ0csV0FBS1IsY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU9TO0FBQVAsT0FGRjtBQUdFO0FBQ0UsY0FBSyxVQURQO0FBRUUsY0FBTUQsRUFGUjtBQUdFLGlCQUFTRCxPQUhYO0FBSUUsa0JBQVVkLFFBSlo7QUFLRSxrQkFBVSxLQUFLSixPQUxqQjtBQU1FLGFBQUssYUFBQ3NCLEVBQUQsRUFBUTtBQUNYLGlCQUFLYixRQUFMLEdBQWdCYSxFQUFoQjtBQUNEO0FBUkg7QUFIRixLQURGO0FBZ0JELEc7OztFQXBHbUMzQixNQUFNNEIsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCTixXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQlIsWUFBVSxLQUhVO0FBSXBCZSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJkLGFBQVcscUJBQU0sQ0FDaEIsQ0FQbUI7QUFRcEJRLFdBQVMsbUJBQU0sQ0FDZCxDQVRtQjtBQVVwQkMsVUFBUSxrQkFBTSxDQUNiLENBWG1CO0FBWXBCRixZQUFVLElBWlU7QUFhcEJHLFlBQVU7QUFiVSxDO1NBZkhqQixRIiwiZmlsZSI6ImNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG4vLyBBcHBcbmltcG9ydCAnLi9jaGVja2JveC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBvbktleURvd246ICgpID0+IHtcbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRSZWY6IG51bGwsXG4gICAgdGFiSW5kZXg6ICcwJyxcbiAgfTtcblxuICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNwYWNlIGtleSBwcmVzcyAoa2V5Q29kZSA9PT0gMzIpXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDMyICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB0aGlzLnRyaWdnZXJDbGljaygpO1xuICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBjbGljayBldmVudCBvbiBjaGVja2JveCBpbnB1dCBlbGVtZW50XG4gICAqL1xuICB0cmlnZ2VyQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoZWNrYm94LmNsaWNrKCk7XG4gIH07XG5cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvZGl2PiA6XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJDbGlja31cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLnByb3BzLm9uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApO1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBjbGFzc05hbWUsIGlkLCBsYWJlbCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsc05hbWVzID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCBjbGFzc05hbWUsIHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzTmFtZXN9IGlkPXtpZH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGlja31cbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveCA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=