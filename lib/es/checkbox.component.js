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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJyZW5kZXIiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7Z0tBa0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNGLEssUUFFREksYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS0gsS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0csU0FBaEI7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFNBQWQsRUFBeUIsTUFBSyxHQUE5QixFQUFrQyxTQUFTLE1BQUtOLE9BQWhEO0FBQ0UsNEJBQUMsT0FBRDtBQURGLE9BTGE7QUFBQSxLOzs7cUJBVWpCTyxNLHFCQUFTO0FBQ1AsUUFBTUQsWUFBWVQsV0FBVyxhQUFYLEVBQTBCLEtBQUtLLEtBQUwsQ0FBV0ksU0FBckMsRUFBZ0QsRUFBRUUsU0FBUyxLQUFLTixLQUFMLENBQVdNLE9BQXRCLEVBQStCTCxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBcEQsRUFBaEQsQ0FBbEI7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdHLFNBQWhCLEVBQTJCLElBQUksS0FBS0osS0FBTCxDQUFXTyxFQUExQztBQUNHLFdBQUtKLGNBQUwsQ0FBb0IsTUFBcEIsQ0FESDtBQUVFO0FBQUE7QUFBQTtBQUFPLGFBQUtILEtBQUwsQ0FBV1E7QUFBbEI7QUFGRixLQURGO0FBTUQsRzs7O0VBMUNtQ2YsTUFBTWdCLGEsVUFVbkNDLFksR0FBZTtBQUNwQkosV0FBUyxLQURXO0FBRXBCRixhQUFXLElBRlM7QUFHcEJILFlBQVUsS0FIVTtBQUlwQk0sTUFBSSxJQUpnQjtBQUtwQkMsU0FBTztBQUxhLEM7U0FWSFgsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcbiAgICB0aGlzLnByb3BzLmRpc2FibGVkID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2E+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgeyBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==