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
          tabIndex = _this$props.tabIndex;


      return _react2.default.createElement(
        'label',
        {
          htmlFor: _this.props.id + '-checkbox',
          className: className
        },
        _react2.default.createElement('input', {
          type: 'checkbox',
          name: id,
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
  tabIndex: null
}, _temp);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25Gb2N1cyIsImUiLCJzZXRTdGF0ZSIsImZvY3VzZWQiLCJwcm9wcyIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwidGFiSW5kZXgiLCJpbnB1dFJlZiIsInN0YXRlIiwicmVuZGVyIiwicmVzdCIsImNsc05hbWVzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBOztBQUtBOzs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQTRCbkIsc0JBQWM7QUFBQTs7QUFBQSxpREFDWiwrQkFEWTs7QUFBQSxVQUtkQyxPQUxjLEdBS0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsSUFBWCxFQUFkLEVBQWlDLFlBQU07QUFDckMsY0FBS0MsS0FBTCxDQUFXSixPQUFYLENBQW1CQyxDQUFuQjtBQUNELE9BRkQ7QUFHRCxLQVRhOztBQUFBLFVBV2RJLE1BWGMsR0FXTCxVQUFDSixDQUFELEVBQU87QUFDZCxZQUFLQyxRQUFMLENBQWMsRUFBRUMsU0FBUyxLQUFYLEVBQWQsRUFBa0MsWUFBTTtBQUN0QyxjQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JKLENBQWxCO0FBQ0QsT0FGRDtBQUdELEtBZmE7O0FBQUEsVUFpQmRLLFFBakJjLEdBaUJILFVBQUNMLENBQUQsRUFBTztBQUFBLFVBQ1JNLFFBRFEsR0FDSyxNQUFLSCxLQURWLENBQ1JHLFFBRFE7O0FBRWhCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlLE1BQUtILEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkwsQ0FBcEI7QUFDaEIsS0FwQmE7O0FBQUEsVUFzQmRPLGNBdEJjLEdBc0JHLFVBQUNDLFNBQUQsRUFBZTtBQUFBLHdCQUcxQixNQUFLTCxLQUhxQjtBQUFBLFVBRTVCTSxPQUY0QixlQUU1QkEsT0FGNEI7QUFBQSxVQUVuQkgsUUFGbUIsZUFFbkJBLFFBRm1CO0FBQUEsVUFFVEksRUFGUyxlQUVUQSxFQUZTO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFFRUMsUUFGRixlQUVFQSxRQUZGOzs7QUFLOUIsYUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBWSxNQUFLVCxLQUFMLENBQVdPLEVBQXZCLGNBREY7QUFFRSxxQkFBV0Y7QUFGYjtBQUlFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLGdCQUFNRSxFQUZSO0FBR0UsY0FBT0EsRUFBUCxjQUhGO0FBSUUsbUJBQVNELE9BSlg7QUFLRSxvQkFBVUgsUUFMWjtBQU1FLG9CQUFVLE1BQUtELFFBTmpCO0FBT0Usa0JBQVEsTUFBS0QsTUFQZjtBQVFFLG1CQUFTLE1BQUtMLE9BUmhCO0FBU0UsZUFBSyxNQUFLSSxLQUFMLENBQVdVLFFBVGxCO0FBVUUsb0JBQVVEO0FBVlosVUFKRjtBQWdCRSxzQ0FBQyxlQUFELElBQVMsV0FBVSxPQUFuQixHQWhCRjtBQWlCR0Q7QUFqQkgsT0FERjtBQW9CRCxLQS9DYTs7QUFFWixVQUFLRyxLQUFMLEdBQWEsRUFBRVosU0FBUyxLQUFYLEVBQWI7QUFGWTtBQUdiOztxQkErQ0RhLE0scUJBQVM7QUFBQSxpQkFJSCxLQUFLWixLQUpGO0FBQUEsUUFFTE0sT0FGSyxVQUVMQSxPQUZLO0FBQUEsUUFFSUgsUUFGSixVQUVJQSxRQUZKO0FBQUEsUUFFY0UsU0FGZCxVQUVjQSxTQUZkO0FBQUEsUUFFeUJFLEVBRnpCLFVBRXlCQSxFQUZ6QjtBQUFBLFFBRTZCQyxLQUY3QixVQUU2QkEsS0FGN0I7QUFBQSxRQUVvQ0MsUUFGcEMsVUFFb0NBLFFBRnBDO0FBQUEsUUFFOENSLE1BRjlDLFVBRThDQSxNQUY5QztBQUFBLFFBRXNETCxPQUZ0RCxVQUVzREEsT0FGdEQ7QUFBQSxRQUUrRE0sUUFGL0QsVUFFK0RBLFFBRi9EO0FBQUEsUUFHTFEsUUFISyxVQUdMQSxRQUhLO0FBQUEsUUFHUUcsSUFIUjs7QUFNUCxRQUFNQyxXQUFXLDBCQUFXLGFBQVgsRUFBMEJULFNBQTFCLEVBQXFDO0FBQ3BEQyxzQkFEb0Q7QUFFcERILHdCQUZvRDtBQUdwREosZUFBUyxLQUFLWSxLQUFMLENBQVdaO0FBSGdDLEtBQXJDLENBQWpCOztBQU1BLFdBQ0U7QUFBQTtBQUFBLGlCQUFLLFdBQVdlLFFBQWhCLEVBQTBCLElBQUlQLEVBQTlCLElBQXNDTSxJQUF0QztBQUNHLFdBQUtULGNBQUwsQ0FBb0IsTUFBcEI7QUFESCxLQURGO0FBS0QsRzs7O0VBL0ZtQ1csZ0JBQU1DLGEsVUFjbkNDLFksR0FBZTtBQUNwQlgsV0FBUyxLQURXO0FBRXBCRCxhQUFXLElBRlM7QUFHcEJGLFlBQVUsS0FIVTtBQUlwQkksTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCWixXQUFTLG1CQUFNLENBQ2QsQ0FQbUI7QUFRcEJLLFVBQVEsa0JBQU0sQ0FDYixDQVRtQjtBQVVwQlMsWUFBVSxJQVZVO0FBV3BCRCxZQUFVO0FBWFUsQztrQkFkSGQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuLy8gQXBwXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRSZWY6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBmb2N1c2VkOiBmYWxzZSB9O1xuICB9XG5cbiAgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZGlzYWJsZWQpIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gIH07XG5cbiAgcmVuZGVyQ2hlY2tib3ggPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGlkLCBsYWJlbCwgdGFiSW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2Ake3RoaXMucHJvcHMuaWR9LWNoZWNrYm94YH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgaWQ9e2Ake2lkfS1jaGVja2JveGB9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZhQ2hlY2sgZm9jdXNhYmxlPVwiZmFsc2VcIiAvPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPik7XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgaWQsIGxhYmVsLCB0YWJJbmRleCwgb25CbHVyLCBvbkZvY3VzLCBvbkNoYW5nZSxcbiAgICAgIGlucHV0UmVmLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbHNOYW1lcyA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgY2xhc3NOYW1lLCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBmb2N1c2VkOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc05hbWVzfSBpZD17aWR9IHsuLi5yZXN0fT5cbiAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tib3goJ2ljb24nKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==