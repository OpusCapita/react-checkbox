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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uQ2xpY2siLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsIm9uS2V5RG93biIsImlucHV0UmVmIiwicmVuZGVyIiwiY2hlY2tlZCIsImlkIiwibGFiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQSxPQUFPLDJCQUFQOztJQUVxQkMsUTs7Ozs7Ozs7Ozs7O2dLQXNCbkJDLE8sR0FBVSxVQUFDQyxDQUFELEVBQU87QUFDZixVQUFJLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxRQUFoQixFQUEwQjtBQUN4QixjQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JILENBQXBCO0FBQ0Q7QUFDREEsUUFBRUksY0FBRjtBQUNELEssUUFFREMsYyxHQUFpQjtBQUFBLGFBQ2YsTUFBS0osS0FBTCxDQUFXQyxRQUFYLEdBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0ksU0FBaEI7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFNBQWQsRUFBeUIsTUFBSyxHQUE5QixFQUFrQyxTQUFTLE1BQUtQLE9BQWhELEVBQXlELFdBQVcsTUFBS0UsS0FBTCxDQUFXTSxTQUEvRSxFQUEwRixLQUFLLE1BQUtOLEtBQUwsQ0FBV08sUUFBMUc7QUFDRSw0QkFBQyxPQUFEO0FBREYsT0FMYTtBQUFBLEs7OztxQkFVakJDLE0scUJBQVM7QUFDUCxRQUFNSCxZQUFZVixXQUFXLGFBQVgsRUFBMEIsS0FBS0ssS0FBTCxDQUFXSyxTQUFyQyxFQUFnRCxFQUFFSSxTQUFTLEtBQUtULEtBQUwsQ0FBV1MsT0FBdEIsRUFBK0JSLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUFwRCxFQUFoRCxDQUFsQjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV0ksU0FBaEIsRUFBMkIsSUFBSSxLQUFLTCxLQUFMLENBQVdVLEVBQTFDO0FBQ0csV0FBS04sY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU8sYUFBS0osS0FBTCxDQUFXVztBQUFsQjtBQUZGLEtBREY7QUFNRCxHOzs7RUEvQ21DbEIsTUFBTW1CLGEsVUFZbkNDLFksR0FBZTtBQUNwQkosV0FBUyxLQURXO0FBRXBCSixhQUFXLElBRlM7QUFHcEJKLFlBQVUsS0FIVTtBQUlwQlMsTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCTCxhQUFXLElBTlM7QUFPcEJDLFlBQVU7QUFQVSxDO1NBWkhWLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xyXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBsYWJlbDogbnVsbCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuICAgIGlucHV0UmVmOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcclxuICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgP1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8RmFDaGVjayAvPlxyXG4gICAgICA8L2Rpdj4gOlxyXG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IG9uS2V5RG93bj17dGhpcy5wcm9wcy5vbktleURvd259IHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn0gPlxyXG4gICAgICAgIDxGYUNoZWNrIC8+XHJcbiAgICAgIDwvYT5cclxuICApXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxyXG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=