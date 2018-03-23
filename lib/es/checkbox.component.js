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
        { className: className, href: '#', onClick: _this.onClick, onKeyDown: _this.props.onKeyDown, ref: _this.props.inputRef },
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
  label: null,
  onKeyDown: null,
  inputRef: null
}, _temp2);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJvbktleURvd24iLCJpbnB1dFJlZiIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCO0FBQ0EsT0FBTywyQkFBUDs7SUFFcUJDLFE7Ozs7Ozs7Ozs7OztnS0FzQm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0YsSyxRQUVESSxjLEdBQWlCO0FBQUEsYUFDZixNQUFLSCxLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRyxTQUFoQjtBQUNFLDRCQUFDLE9BQUQ7QUFERixPQURGLEdBSUU7QUFBQTtBQUFBLFVBQUcsV0FBV0EsU0FBZCxFQUF5QixNQUFLLEdBQTlCLEVBQWtDLFNBQVMsTUFBS04sT0FBaEQsRUFBeUQsV0FBVyxNQUFLRSxLQUFMLENBQVdLLFNBQS9FLEVBQTBGLEtBQUssTUFBS0wsS0FBTCxDQUFXTSxRQUExRztBQUNFLDRCQUFDLE9BQUQ7QUFERixPQUxhO0FBQUEsSzs7O3FCQVVqQkMsTSxxQkFBUztBQUNQLFFBQU1ILFlBQVlULFdBQVcsYUFBWCxFQUEwQixLQUFLSyxLQUFMLENBQVdJLFNBQXJDLEVBQWdELEVBQUVJLFNBQVMsS0FBS1IsS0FBTCxDQUFXUSxPQUF0QixFQUErQlAsVUFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQXBELEVBQWhELENBQWxCO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXRyxTQUFoQixFQUEyQixJQUFJLEtBQUtKLEtBQUwsQ0FBV1MsRUFBMUM7QUFDRyxXQUFLTixjQUFMLENBQW9CLE1BQXBCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFBTyxhQUFLSCxLQUFMLENBQVdVO0FBQWxCO0FBRkYsS0FERjtBQU1ELEc7OztFQTlDbUNqQixNQUFNa0IsYSxVQVluQ0MsWSxHQUFlO0FBQ3BCSixXQUFTLEtBRFc7QUFFcEJKLGFBQVcsSUFGUztBQUdwQkgsWUFBVSxLQUhVO0FBSXBCUSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJMLGFBQVcsSUFOUztBQU9wQkMsWUFBVTtBQVBVLEM7U0FaSFQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uS2V5RG93bjogbnVsbCxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvZGl2PiA6XG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IG9uS2V5RG93bj17dGhpcy5wcm9wcy5vbktleURvd259IHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn0gPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=