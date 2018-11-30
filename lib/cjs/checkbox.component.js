'use strict';

exports.__esModule = true;
exports.default = undefined;

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
        id = _props.id;


    var clsNames = (0, _classnames2.default)('oc-checkbox', className, {
      checked: checked,
      disabled: disabled,
      focused: this.state.focused
    });

    return _react2.default.createElement(
      'div',
      { className: clsNames, id: id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25Gb2N1cyIsImUiLCJzZXRTdGF0ZSIsImZvY3VzZWQiLCJwcm9wcyIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwidGFiSW5kZXgiLCJpbnB1dFJlZiIsInN0YXRlIiwicmVuZGVyIiwiY2xzTmFtZXMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBOztBQUtBOzs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7QUE0Qm5CLHNCQUFjO0FBQUE7O0FBQUEsaURBQ1osK0JBRFk7O0FBQUEsVUFLZEMsT0FMYyxHQUtKLFVBQUNDLENBQUQsRUFBTztBQUNmLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLElBQVgsRUFBZCxFQUFpQyxZQUFNO0FBQ3JDLGNBQUtDLEtBQUwsQ0FBV0osT0FBWCxDQUFtQkMsQ0FBbkI7QUFDRCxPQUZEO0FBR0QsS0FUYTs7QUFBQSxVQVdkSSxNQVhjLEdBV0wsVUFBQ0osQ0FBRCxFQUFPO0FBQ2QsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsS0FBWCxFQUFkLEVBQWtDLFlBQU07QUFDdEMsY0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCSixDQUFsQjtBQUNELE9BRkQ7QUFHRCxLQWZhOztBQUFBLFVBaUJkSyxRQWpCYyxHQWlCSCxVQUFDTCxDQUFELEVBQU87QUFBQSxVQUNSTSxRQURRLEdBQ0ssTUFBS0gsS0FEVixDQUNSRyxRQURROztBQUVoQixVQUFJLENBQUNBLFFBQUwsRUFBZSxNQUFLSCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JMLENBQXBCO0FBQ2hCLEtBcEJhOztBQUFBLFVBc0JkTyxjQXRCYyxHQXNCRyxVQUFDQyxTQUFELEVBQWU7QUFBQSx3QkFHMUIsTUFBS0wsS0FIcUI7QUFBQSxVQUU1Qk0sT0FGNEIsZUFFNUJBLE9BRjRCO0FBQUEsVUFFbkJILFFBRm1CLGVBRW5CQSxRQUZtQjtBQUFBLFVBRVRJLEVBRlMsZUFFVEEsRUFGUztBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBRUVDLFFBRkYsZUFFRUEsUUFGRjs7O0FBSzlCLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVksTUFBS1QsS0FBTCxDQUFXTyxFQUF2QixjQURGO0FBRUUscUJBQVdGO0FBRmI7QUFJRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxnQkFBTUUsRUFGUjtBQUdFLGNBQU9BLEVBQVAsY0FIRjtBQUlFLG1CQUFTRCxPQUpYO0FBS0Usb0JBQVVILFFBTFo7QUFNRSxvQkFBVSxNQUFLRCxRQU5qQjtBQU9FLGtCQUFRLE1BQUtELE1BUGY7QUFRRSxtQkFBUyxNQUFLTCxPQVJoQjtBQVNFLGVBQUssTUFBS0ksS0FBTCxDQUFXVSxRQVRsQjtBQVVFLG9CQUFVRDtBQVZaLFVBSkY7QUFnQkUsc0NBQUMsZUFBRCxJQUFTLFdBQVUsT0FBbkIsR0FoQkY7QUFpQkdEO0FBakJILE9BREY7QUFvQkQsS0EvQ2E7O0FBRVosVUFBS0csS0FBTCxHQUFhLEVBQUVaLFNBQVMsS0FBWCxFQUFiO0FBRlk7QUFHYjs7cUJBK0NEYSxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS1osS0FIRjtBQUFBLFFBRUxNLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlILFFBRkosVUFFSUEsUUFGSjtBQUFBLFFBRWNFLFNBRmQsVUFFY0EsU0FGZDtBQUFBLFFBRXlCRSxFQUZ6QixVQUV5QkEsRUFGekI7OztBQUtQLFFBQU1NLFdBQVcsMEJBQVcsYUFBWCxFQUEwQlIsU0FBMUIsRUFBcUM7QUFDcERDLHNCQURvRDtBQUVwREgsd0JBRm9EO0FBR3BESixlQUFTLEtBQUtZLEtBQUwsQ0FBV1o7QUFIZ0MsS0FBckMsQ0FBakI7O0FBTUEsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXYyxRQUFoQixFQUEwQixJQUFJTixFQUE5QjtBQUNHLFdBQUtILGNBQUwsQ0FBb0IsTUFBcEI7QUFESCxLQURGO0FBS0QsRzs7O0VBOUZtQ1UsZ0JBQU1DLGEsVUFjbkNDLFksR0FBZTtBQUNwQlYsV0FBUyxLQURXO0FBRXBCRCxhQUFXLElBRlM7QUFHcEJGLFlBQVUsS0FIVTtBQUlwQkksTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCWixXQUFTLG1CQUFNLENBQ2QsQ0FQbUI7QUFRcEJLLFVBQVEsa0JBQU0sQ0FDYixDQVRtQjtBQVVwQlMsWUFBVSxJQVZVO0FBV3BCRCxZQUFVO0FBWFUsQztrQkFkSGQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xuLy8gQXBwXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRSZWY6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBmb2N1c2VkOiBmYWxzZSB9O1xuICB9XG5cbiAgb25Gb2N1cyA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZGlzYWJsZWQpIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gIH07XG5cbiAgcmVuZGVyQ2hlY2tib3ggPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGlkLCBsYWJlbCwgdGFiSW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2Ake3RoaXMucHJvcHMuaWR9LWNoZWNrYm94YH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgaWQ9e2Ake2lkfS1jaGVja2JveGB9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XG4gICAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZhQ2hlY2sgZm9jdXNhYmxlPVwiZmFsc2VcIiAvPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPik7XG4gIH07XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgaWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbHNOYW1lcyA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgY2xhc3NOYW1lLCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBmb2N1c2VkOiB0aGlzLnN0YXRlLmZvY3VzZWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc05hbWVzfSBpZD17aWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19