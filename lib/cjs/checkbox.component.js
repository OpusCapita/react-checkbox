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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25Gb2N1cyIsImUiLCJzZXRTdGF0ZSIsImZvY3VzZWQiLCJwcm9wcyIsIm9uQmx1ciIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwidGFiSW5kZXgiLCJpbnB1dFJlZiIsInN0YXRlIiwicmVuZGVyIiwiY2xzTmFtZXMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O21CQUFBOztBQUtBOzs7QUFKQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7QUE0Qm5CLHNCQUFjO0FBQUE7O0FBQUEsaURBQ1osK0JBRFk7O0FBQUEsVUFLZEMsT0FMYyxHQUtKLFVBQUNDLENBQUQsRUFBTztBQUNmLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLElBQVgsRUFBZCxFQUFpQyxZQUFNO0FBQ3JDLGNBQUtDLEtBQUwsQ0FBV0osT0FBWCxDQUFtQkMsQ0FBbkI7QUFDRCxPQUZEO0FBR0QsS0FUYTs7QUFBQSxVQVdkSSxNQVhjLEdBV0wsVUFBQ0osQ0FBRCxFQUFPO0FBQ2QsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsS0FBWCxFQUFkLEVBQWtDLFlBQU07QUFDdEMsY0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCSixDQUFsQjtBQUNELE9BRkQ7QUFHRCxLQWZhOztBQUFBLFVBaUJkSyxRQWpCYyxHQWlCSCxVQUFDTCxDQUFELEVBQU87QUFBQSxVQUNSTSxRQURRLEdBQ0ssTUFBS0gsS0FEVixDQUNSRyxRQURROztBQUVoQixVQUFJLENBQUNBLFFBQUwsRUFBZSxNQUFLSCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JMLENBQXBCO0FBQ2hCLEtBcEJhOztBQUFBLFVBc0JkTyxjQXRCYyxHQXNCRyxVQUFDQyxTQUFELEVBQWU7QUFBQSx3QkFHMUIsTUFBS0wsS0FIcUI7QUFBQSxVQUU1Qk0sT0FGNEIsZUFFNUJBLE9BRjRCO0FBQUEsVUFFbkJILFFBRm1CLGVBRW5CQSxRQUZtQjtBQUFBLFVBRVRJLEVBRlMsZUFFVEEsRUFGUztBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBRUVDLFFBRkYsZUFFRUEsUUFGRjs7O0FBSzlCLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVksTUFBS1QsS0FBTCxDQUFXTyxFQUF2QixjQURGO0FBRUUscUJBQVdGO0FBRmI7QUFJRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxnQkFBTUUsRUFGUjtBQUdFLGNBQU9BLEVBQVAsY0FIRjtBQUlFLG1CQUFTRCxPQUpYO0FBS0Usb0JBQVVILFFBTFo7QUFNRSxvQkFBVSxNQUFLRCxRQU5qQjtBQU9FLGtCQUFRLE1BQUtELE1BUGY7QUFRRSxtQkFBUyxNQUFLTCxPQVJoQjtBQVNFLGVBQUssTUFBS0ksS0FBTCxDQUFXVSxRQVRsQjtBQVVFLG9CQUFVRDtBQVZaLFVBSkY7QUFnQkUsc0NBQUMsZUFBRCxJQUFTLFdBQVUsT0FBbkIsR0FoQkY7QUFpQkdEO0FBakJILE9BREY7QUFvQkQsS0EvQ2E7O0FBRVosVUFBS0csS0FBTCxHQUFhLEVBQUVaLFNBQVMsS0FBWCxFQUFiO0FBRlk7QUFHYjs7cUJBK0NEYSxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS1osS0FIRjtBQUFBLFFBRUxNLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlILFFBRkosVUFFSUEsUUFGSjtBQUFBLFFBRWNFLFNBRmQsVUFFY0EsU0FGZDtBQUFBLFFBRXlCRSxFQUZ6QixVQUV5QkEsRUFGekI7OztBQUtQLFFBQU1NLFdBQVcsMEJBQVcsYUFBWCxFQUEwQlIsU0FBMUIsRUFBcUM7QUFDcERDLHNCQURvRDtBQUVwREgsd0JBRm9EO0FBR3BESixlQUFTLEtBQUtZLEtBQUwsQ0FBV1o7QUFIZ0MsS0FBckMsQ0FBakI7O0FBTUEsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXYyxRQUFoQixFQUEwQixJQUFJTixFQUE5QjtBQUNHLFdBQUtILGNBQUwsQ0FBb0IsTUFBcEI7QUFESCxLQURGO0FBS0QsRzs7O0VBOUZtQ1UsZ0JBQU1DLGEsVUFjbkNDLFksR0FBZTtBQUNwQlYsV0FBUyxLQURXO0FBRXBCRCxhQUFXLElBRlM7QUFHcEJGLFlBQVUsS0FIVTtBQUlwQkksTUFBSSxJQUpnQjtBQUtwQkMsU0FBTyxJQUxhO0FBTXBCWixXQUFTLG1CQUFNLENBQ2QsQ0FQbUI7QUFRcEJLLFVBQVEsa0JBQU0sQ0FDYixDQVRtQjtBQVVwQlMsWUFBVSxJQVZVO0FBV3BCRCxZQUFVO0FBWFUsQztrQkFkSGQsUSIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGYUNoZWNrIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGVjayc7XHJcbi8vIEFwcFxyXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpZDogbnVsbCxcclxuICAgIGxhYmVsOiBudWxsLFxyXG4gICAgb25Gb2N1czogKCkgPT4ge1xyXG4gICAgfSxcclxuICAgIG9uQmx1cjogKCkgPT4ge1xyXG4gICAgfSxcclxuICAgIGlucHV0UmVmOiBudWxsLFxyXG4gICAgdGFiSW5kZXg6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9jdXNlZDogZmFsc2UgfTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvbkJsdXIgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQ6IGZhbHNlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCFkaXNhYmxlZCkgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuICB9O1xyXG5cclxuICByZW5kZXJDaGVja2JveCA9IChjbGFzc05hbWUpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGlkLCBsYWJlbCwgdGFiSW5kZXgsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGFiZWxcclxuICAgICAgICBodG1sRm9yPXtgJHt0aGlzLnByb3BzLmlkfS1jaGVja2JveGB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBuYW1lPXtpZH1cclxuICAgICAgICAgIGlkPXtgJHtpZH0tY2hlY2tib3hgfVxyXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn1cclxuICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGYUNoZWNrIGZvY3VzYWJsZT1cImZhbHNlXCIgLz5cclxuICAgICAgICB7bGFiZWx9XHJcbiAgICAgIDwvbGFiZWw+KTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGVja2VkLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBpZCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNsc05hbWVzID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCBjbGFzc05hbWUsIHtcclxuICAgICAgY2hlY2tlZCxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGZvY3VzZWQ6IHRoaXMuc3RhdGUuZm9jdXNlZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNOYW1lc30gaWQ9e2lkfT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==