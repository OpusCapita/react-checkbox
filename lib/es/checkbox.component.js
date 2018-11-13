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
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  inputRef: null,
  tabIndex: '0'
}, _temp2);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJvbktleURvd24iLCJrZXlDb2RlIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ0YWJJbmRleCIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCO0FBQ0EsT0FBTywyQkFBUDs7SUFFcUJDLFE7Ozs7Ozs7Ozs7OztnS0E0Qm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0RBLFFBQUVJLGNBQUY7QUFDRCxLLFFBRURDLFMsR0FBWSxVQUFDTCxDQUFELEVBQU87QUFDakIsVUFBSUEsRUFBRU0sT0FBRixLQUFjLEVBQWQsSUFBb0IsQ0FBQyxNQUFLTCxLQUFMLENBQVdDLFFBQXBDLEVBQThDO0FBQzVDLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNELFlBQUtDLEtBQUwsQ0FBV0ksU0FBWCxDQUFxQkwsQ0FBckI7QUFDRCxLLFFBRURPLGMsR0FBaUI7QUFBQSxhQUNmLE1BQUtOLEtBQUwsQ0FBV0MsUUFBWCxHQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdNLFNBQWhCO0FBQ0UsNEJBQUMsT0FBRDtBQURGLE9BREYsR0FJRTtBQUFBO0FBQUE7QUFDRSxxQkFBV0EsU0FEYjtBQUVFLGdCQUFLLEdBRlA7QUFHRSxtQkFBUyxNQUFLVCxPQUhoQjtBQUlFLHFCQUFXLE1BQUtNLFNBSmxCO0FBS0UsZUFBSyxNQUFLSixLQUFMLENBQVdRLFFBTGxCO0FBTUUsbUJBQVMsTUFBS1IsS0FBTCxDQUFXUyxPQU50QjtBQU9FLGtCQUFRLE1BQUtULEtBQUwsQ0FBV1UsTUFQckI7QUFRRSxvQkFBVSxNQUFLVixLQUFMLENBQVdXO0FBUnZCO0FBVUUsNEJBQUMsT0FBRDtBQVZGLE9BTGE7QUFBQSxLOzs7cUJBbUJqQkMsTSxxQkFBUztBQUNQLFFBQU1MLFlBQVlaLFdBQVcsYUFBWCxFQUEwQixLQUFLSyxLQUFMLENBQVdPLFNBQXJDLEVBQWdELEVBQUVNLFNBQVMsS0FBS2IsS0FBTCxDQUFXYSxPQUF0QixFQUErQlosVUFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQXBELEVBQWhELENBQWxCO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXTSxTQUFoQixFQUEyQixJQUFJLEtBQUtQLEtBQUwsQ0FBV2MsRUFBMUM7QUFDRyxXQUFLUixjQUFMLENBQW9CLE1BQXBCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFBTyxhQUFLTixLQUFMLENBQVdlO0FBQWxCO0FBRkYsS0FERjtBQU1ELEc7OztFQXJFbUN0QixNQUFNdUIsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCSixXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQk4sWUFBVSxLQUhVO0FBSXBCYSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJYLGFBQVcscUJBQU0sQ0FBRSxDQU5DO0FBT3BCSyxXQUFTLG1CQUFNLENBQUUsQ0FQRztBQVFwQkMsVUFBUSxrQkFBTSxDQUFFLENBUkk7QUFTcEJGLFlBQVUsSUFUVTtBQVVwQkcsWUFBVTtBQVZVLEM7U0FmSGQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7fSxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiAnMCcsXG4gIH1cblxuICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICB9XG5cbiAgcmVuZGVyQ2hlY2tib3ggPSBjbGFzc05hbWUgPT4gKFxuICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgP1xuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2Rpdj4gOlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICByZWY9e3RoaXMucHJvcHMuaW5wdXRSZWZ9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMucHJvcHMub25Gb2N1c31cbiAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQmx1cn1cbiAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2E+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgeyBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==