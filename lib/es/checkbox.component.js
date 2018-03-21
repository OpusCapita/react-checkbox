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
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? React.createElement(
        'div',
        { className: className },
        React.createElement(FaCheck, null)
      ) : React.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick },
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
}(React.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null
}, _temp2);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7Z0tBa0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNGLEssUUFFREksYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS0gsS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0csU0FBaEI7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFNBQWQsRUFBeUIsTUFBSyxHQUE5QixFQUFrQyxTQUFTLE1BQUtOLE9BQWhEO0FBQ0UsNEJBQUMsT0FBRDtBQURGLE9BTGE7QUFBQSxLOzs7cUJBVWpCTyxNLHFCQUFTO0FBQ1AsUUFBTUQsWUFBWVQsV0FBVyxhQUFYLEVBQTBCLEtBQUtLLEtBQUwsQ0FBV0ksU0FBckMsRUFBZ0QsRUFBRUUsU0FBUyxLQUFLTixLQUFMLENBQVdNLE9BQXRCLEVBQStCTCxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBcEQsRUFBaEQsQ0FBbEI7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdHLFNBQWhCLEVBQTJCLElBQUksS0FBS0osS0FBTCxDQUFXTyxFQUExQztBQUNHLFdBQUtKLGNBQUwsQ0FBb0IsTUFBcEIsQ0FESDtBQUVFO0FBQUE7QUFBQTtBQUFPLGFBQUtILEtBQUwsQ0FBV1E7QUFBbEI7QUFGRixLQURGO0FBTUQsRzs7O0VBMUNtQ2YsTUFBTWdCLGEsVUFVbkNDLFksR0FBZTtBQUNwQkosV0FBUyxLQURXO0FBRXBCRixhQUFXLElBRlM7QUFHcEJILFlBQVUsS0FIVTtBQUlwQk0sTUFBSSxJQUpnQjtBQUtwQkMsU0FBTztBQUxhLEM7U0FWSFgsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XHJcbmltcG9ydCAnLi9jaGVja2JveC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGlkOiBudWxsLFxyXG4gICAgbGFiZWw6IG51bGwsXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2hlY2tib3ggPSBjbGFzc05hbWUgPT4gKFxyXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgIDxGYUNoZWNrIC8+XHJcbiAgICAgIDwvZGl2PiA6XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XHJcbiAgICAgICAgPEZhQ2hlY2sgLz5cclxuICAgICAgPC9hPlxyXG4gIClcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgeyBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XHJcbiAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMubGFiZWx9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==