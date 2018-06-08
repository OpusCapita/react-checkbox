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
      e.preventDefault();
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) {
        _this.props.onChange(e);
      }
      _this.props.onKeyDown(e);
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? React.createElement(
        'div',
        { className: className },
        React.createElement(FaCheck, null)
      ) : React.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick, onKeyDown: _this.onKeyDown, ref: _this.props.inputRef },
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
  onKeyDown: function onKeyDown() {},
  inputRef: null
}, _temp2);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCO0FBQ0EsT0FBTywyQkFBUDs7SUFFcUJDLFE7Ozs7Ozs7Ozs7OztnS0FzQm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0RBLFFBQUVJLGNBQUY7QUFDRCxLLFFBRURDLFMsR0FBWSxVQUFDTCxDQUFELEVBQU87QUFDakIsVUFBSUEsRUFBRU0sT0FBRixLQUFjLEVBQWQsSUFBb0IsQ0FBQyxNQUFLTCxLQUFMLENBQVdDLFFBQXBDLEVBQThDO0FBQzVDLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNELFlBQUtDLEtBQUwsQ0FBV0ksU0FBWCxDQUFxQkwsQ0FBckI7QUFDRCxLLFFBRURPLGMsR0FBaUI7QUFBQSxhQUNmLE1BQUtOLEtBQUwsQ0FBV0MsUUFBWCxHQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdNLFNBQWhCO0FBQ0UsNEJBQUMsT0FBRDtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUEsVUFBRyxXQUFXQSxTQUFkLEVBQXlCLE1BQUssR0FBOUIsRUFBa0MsU0FBUyxNQUFLVCxPQUFoRCxFQUF5RCxXQUFXLE1BQUtNLFNBQXpFLEVBQW9GLEtBQUssTUFBS0osS0FBTCxDQUFXUSxRQUFwRztBQUNFLDRCQUFDLE9BQUQ7QUFERixPQUxhO0FBQUEsSzs7O3FCQVVqQkMsTSxxQkFBUztBQUNQLFFBQU1GLFlBQVlaLFdBQVcsYUFBWCxFQUEwQixLQUFLSyxLQUFMLENBQVdPLFNBQXJDLEVBQWdELEVBQUVHLFNBQVMsS0FBS1YsS0FBTCxDQUFXVSxPQUF0QixFQUErQlQsVUFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQXBELEVBQWhELENBQWxCO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXTSxTQUFoQixFQUEyQixJQUFJLEtBQUtQLEtBQUwsQ0FBV1csRUFBMUM7QUFDRyxXQUFLTCxjQUFMLENBQW9CLE1BQXBCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFBTyxhQUFLTixLQUFMLENBQVdZO0FBQWxCO0FBRkYsS0FERjtBQU1ELEc7OztFQXREbUNuQixNQUFNb0IsYSxVQVluQ0MsWSxHQUFlO0FBQ3BCSixXQUFTLEtBRFc7QUFFcEJILGFBQVcsSUFGUztBQUdwQk4sWUFBVSxLQUhVO0FBSXBCVSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJSLGFBQVcscUJBQU0sQ0FBRSxDQU5DO0FBT3BCSSxZQUFVO0FBUFUsQztTQVpIWCxRIiwiZmlsZSI6ImNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25LZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMiAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gIH1cblxuICByZW5kZXJDaGVja2JveCA9IGNsYXNzTmFtZSA9PiAoXG4gICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPEZhQ2hlY2sgLz5cbiAgICAgIDwvZGl2PiA6XG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IG9uS2V5RG93bj17dGhpcy5vbktleURvd259IHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn0gPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=