'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable jsx-a11y/anchor-is-valid */

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_temp = _class = function (_React$PureComponent) {
  _inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this));

    _this.onFocus = function (e) {
      _this.setState({ focused: true }, function () {
        _this.props.onFocus(e);
      });
    };

    _this.onBlur = function (e) {
      _this.setState({ focused: false }, function () {
        _this.props.onBlur(e);
      });
    };

    _this.onChange = function (e) {
      var disabled = _this.props.disabled;

      if (!disabled) _this.props.onChange(e);
    };

    _this.renderCheckbox = function (className) {
      var _this$props = _this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          id = _this$props.id,
          label = _this$props.label,
          tabIndex = _this$props.tabIndex,
          name = _this$props.name,
          value = _this$props.value;


      return _react2.default.createElement(
        'label',
        {
          htmlFor: id + '-checkbox',
          className: className
        },
        _react2.default.createElement('input', {
          type: 'checkbox',
          name: name,
          value: value,
          id: id + '-checkbox',
          checked: checked,
          disabled: disabled,
          onChange: _this.onChange,
          onBlur: _this.onBlur,
          onFocus: _this.onFocus,
          ref: _this.props.inputRef,
          tabIndex: tabIndex
        }),
        _react2.default.createElement(_check2.default, { focusable: 'false' }),
        label
      );
    };

    _this.state = { focused: false };
    return _this;
  }

  Checkbox.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        disabled = _props.disabled,
        className = _props.className,
        id = _props.id,
        label = _props.label,
        tabIndex = _props.tabIndex,
        onBlur = _props.onBlur,
        onFocus = _props.onFocus,
        onChange = _props.onChange,
        inputRef = _props.inputRef,
        rest = _objectWithoutProperties(_props, ['checked', 'disabled', 'className', 'id', 'label', 'tabIndex', 'onBlur', 'onFocus', 'onChange', 'inputRef']);

    var clsNames = (0, _classnames2.default)('oc-checkbox', className, {
      checked: checked,
      disabled: disabled,
      focused: this.state.focused
    });

    return _react2.default.createElement(
      'div',
      _extends({ className: clsNames, id: id }, rest),
      this.renderCheckbox('icon')
    );
  };

  return Checkbox;
}(_react2.default.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  inputRef: null,
  tabIndex: null,
  name: '',
  value: ''
}, _temp);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25Gb2N1cyIsImUiLCJzZXRTdGF0ZSIsImZvY3VzZWQiLCJwcm9wcyIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwidGFiSW5kZXgiLCJuYW1lIiwidmFsdWUiLCJpbnB1dFJlZiIsInN0YXRlIiwicmVuZGVyIiwicmVzdCIsImNsc05hbWVzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBOztBQUtBOzs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQWdDbkIsc0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQUtkQyxPQUxjLEdBS0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsSUFBWCxFQUFkLEVBQWlDLFlBQU07QUFDckMsY0FBS0MsS0FBTCxDQUFXSixPQUFYLENBQW1CQyxDQUFuQjtBQUNELE9BRkQ7QUFHRCxLQVRhOztBQUFBLFVBV2RJLE1BWGMsR0FXTCxVQUFDSixDQUFELEVBQU87QUFDZCxZQUFLQyxRQUFMLENBQWMsRUFBRUMsU0FBUyxLQUFYLEVBQWQsRUFBa0MsWUFBTTtBQUN0QyxjQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JKLENBQWxCO0FBQ0QsT0FGRDtBQUdELEtBZmE7O0FBQUEsVUFpQmRLLFFBakJjLEdBaUJILFVBQUNMLENBQUQsRUFBTztBQUFBLFVBQ1JNLFFBRFEsR0FDSyxNQUFLSCxLQURWLENBQ1JHLFFBRFE7O0FBRWhCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlLE1BQUtILEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkwsQ0FBcEI7QUFDaEIsS0FwQmE7O0FBQUEsVUFzQmRPLGNBdEJjLEdBc0JHLFVBQUNDLFNBQUQsRUFBZTtBQUFBLHdCQUcxQixNQUFLTCxLQUhxQjtBQUFBLFVBRTVCTSxPQUY0QixlQUU1QkEsT0FGNEI7QUFBQSxVQUVuQkgsUUFGbUIsZUFFbkJBLFFBRm1CO0FBQUEsVUFFVEksRUFGUyxlQUVUQSxFQUZTO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFFRUMsUUFGRixlQUVFQSxRQUZGO0FBQUEsVUFFWUMsSUFGWixlQUVZQSxJQUZaO0FBQUEsVUFFa0JDLEtBRmxCLGVBRWtCQSxLQUZsQjs7O0FBSzlCLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVlKLEVBQVosY0FERjtBQUVFLHFCQUFXRjtBQUZiO0FBSUU7QUFDRSxnQkFBSyxVQURQO0FBRUUsZ0JBQU1LLElBRlI7QUFHRSxpQkFBT0MsS0FIVDtBQUlFLGNBQU9KLEVBQVAsY0FKRjtBQUtFLG1CQUFTRCxPQUxYO0FBTUUsb0JBQVVILFFBTlo7QUFPRSxvQkFBVSxNQUFLRCxRQVBqQjtBQVFFLGtCQUFRLE1BQUtELE1BUmY7QUFTRSxtQkFBUyxNQUFLTCxPQVRoQjtBQVVFLGVBQUssTUFBS0ksS0FBTCxDQUFXWSxRQVZsQjtBQVdFLG9CQUFVSDtBQVhaLFVBSkY7QUFpQkUsc0NBQUMsZUFBRCxJQUFTLFdBQVUsT0FBbkIsR0FqQkY7QUFrQkdEO0FBbEJILE9BREY7QUFxQkQsS0FoRGE7O0FBRVosVUFBS0ssS0FBTCxHQUFhLEVBQUVkLFNBQVMsS0FBWCxFQUFiO0FBRlk7QUFHYjs7cUJBZ0REZSxNLHFCQUFTO0FBQUEsaUJBSUgsS0FBS2QsS0FKRjtBQUFBLFFBRUxNLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlILFFBRkosVUFFSUEsUUFGSjtBQUFBLFFBRWNFLFNBRmQsVUFFY0EsU0FGZDtBQUFBLFFBRXlCRSxFQUZ6QixVQUV5QkEsRUFGekI7QUFBQSxRQUU2QkMsS0FGN0IsVUFFNkJBLEtBRjdCO0FBQUEsUUFFb0NDLFFBRnBDLFVBRW9DQSxRQUZwQztBQUFBLFFBRThDUixNQUY5QyxVQUU4Q0EsTUFGOUM7QUFBQSxRQUVzREwsT0FGdEQsVUFFc0RBLE9BRnREO0FBQUEsUUFFK0RNLFFBRi9ELFVBRStEQSxRQUYvRDtBQUFBLFFBR0xVLFFBSEssVUFHTEEsUUFISztBQUFBLFFBR1FHLElBSFI7O0FBTVAsUUFBTUMsV0FBVywwQkFBVyxhQUFYLEVBQTBCWCxTQUExQixFQUFxQztBQUNwREMsc0JBRG9EO0FBRXBESCx3QkFGb0Q7QUFHcERKLGVBQVMsS0FBS2MsS0FBTCxDQUFXZDtBQUhnQyxLQUFyQyxDQUFqQjs7QUFNQSxXQUNFO0FBQUE7QUFBQSxpQkFBSyxXQUFXaUIsUUFBaEIsRUFBMEIsSUFBSVQsRUFBOUIsSUFBc0NRLElBQXRDO0FBQ0csV0FBS1gsY0FBTCxDQUFvQixNQUFwQjtBQURILEtBREY7QUFLRCxHOzs7RUFwR21DYSxnQkFBTUMsYSxVQWdCbkNDLFksR0FBZTtBQUNwQmIsV0FBUyxLQURXO0FBRXBCRCxhQUFXLElBRlM7QUFHcEJGLFlBQVUsS0FIVTtBQUlwQkksTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCWixXQUFTLG1CQUFNLENBQ2QsQ0FQbUI7QUFRcEJLLFVBQVEsa0JBQU0sQ0FDYixDQVRtQjtBQVVwQlcsWUFBVSxJQVZVO0FBV3BCSCxZQUFVLElBWFU7QUFZcEJDLFFBQU0sRUFaYztBQWFwQkMsU0FBTztBQWJhLEM7a0JBaEJIaEIsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuLy8gQXBwXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaWQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgb25Gb2N1czogKCkgPT4ge1xuICAgIH0sXG4gICAgb25CbHVyOiAoKSA9PiB7XG4gICAgfSxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgICB0YWJJbmRleDogbnVsbCxcbiAgICBuYW1lOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBmb2N1c2VkOiBmYWxzZSB9O1xuICB9XG5cbiAgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZGlzYWJsZWQpIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gIH07XG5cbiAgcmVuZGVyQ2hlY2tib3ggPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGlkLCBsYWJlbCwgdGFiSW5kZXgsIG5hbWUsIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtgJHtpZH0tY2hlY2tib3hgfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBpZD17YCR7aWR9LWNoZWNrYm94YH1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cbiAgICAgICAgICByZWY9e3RoaXMucHJvcHMuaW5wdXRSZWZ9XG4gICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgICAvPlxuICAgICAgICA8RmFDaGVjayBmb2N1c2FibGU9XCJmYWxzZVwiIC8+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+KTtcbiAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBpZCwgbGFiZWwsIHRhYkluZGV4LCBvbkJsdXIsIG9uRm9jdXMsIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRSZWYsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsc05hbWVzID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCBjbGFzc05hbWUsIHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGZvY3VzZWQ6IHRoaXMuc3RhdGUuZm9jdXNlZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzTmFtZXN9IGlkPXtpZH0gey4uLnJlc3R9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19