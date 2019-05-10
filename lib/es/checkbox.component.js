var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FaCheck from 'react-icons/lib/fa/check';
// App
import './checkbox.component.scss';

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


      return React.createElement(
        'label',
        {
          htmlFor: id + '-checkbox',
          className: className
        },
        React.createElement('input', {
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
        React.createElement(FaCheck, { focusable: 'false' }),
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

    var clsNames = classNames('oc-checkbox', className, {
      checked: checked,
      disabled: disabled,
      focused: this.state.focused
    });

    return React.createElement(
      'div',
      _extends({ className: clsNames, id: id }, rest),
      this.renderCheckbox('icon')
    );
  };

  return Checkbox;
}(React.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  inputRef: null,
  tabIndex: null,
  name: null,
  value: null
}, _temp);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uRm9jdXMiLCJlIiwic2V0U3RhdGUiLCJmb2N1c2VkIiwicHJvcHMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsInRhYkluZGV4IiwibmFtZSIsInZhbHVlIiwiaW5wdXRSZWYiLCJzdGF0ZSIsInJlbmRlciIsInJlc3QiLCJjbHNOYW1lcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQTtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7QUFnQ25CLHNCQUFjO0FBQUE7O0FBQUEsaURBQ1osK0JBRFk7O0FBQUEsVUFLZEMsT0FMYyxHQUtKLFVBQUNDLENBQUQsRUFBTztBQUNmLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLElBQVgsRUFBZCxFQUFpQyxZQUFNO0FBQ3JDLGNBQUtDLEtBQUwsQ0FBV0osT0FBWCxDQUFtQkMsQ0FBbkI7QUFDRCxPQUZEO0FBR0QsS0FUYTs7QUFBQSxVQVdkSSxNQVhjLEdBV0wsVUFBQ0osQ0FBRCxFQUFPO0FBQ2QsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsS0FBWCxFQUFkLEVBQWtDLFlBQU07QUFDdEMsY0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCSixDQUFsQjtBQUNELE9BRkQ7QUFHRCxLQWZhOztBQUFBLFVBaUJkSyxRQWpCYyxHQWlCSCxVQUFDTCxDQUFELEVBQU87QUFBQSxVQUNSTSxRQURRLEdBQ0ssTUFBS0gsS0FEVixDQUNSRyxRQURROztBQUVoQixVQUFJLENBQUNBLFFBQUwsRUFBZSxNQUFLSCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JMLENBQXBCO0FBQ2hCLEtBcEJhOztBQUFBLFVBc0JkTyxjQXRCYyxHQXNCRyxVQUFDQyxTQUFELEVBQWU7QUFBQSx3QkFHMUIsTUFBS0wsS0FIcUI7QUFBQSxVQUU1Qk0sT0FGNEIsZUFFNUJBLE9BRjRCO0FBQUEsVUFFbkJILFFBRm1CLGVBRW5CQSxRQUZtQjtBQUFBLFVBRVRJLEVBRlMsZUFFVEEsRUFGUztBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBRUVDLFFBRkYsZUFFRUEsUUFGRjtBQUFBLFVBRVlDLElBRlosZUFFWUEsSUFGWjtBQUFBLFVBRWtCQyxLQUZsQixlQUVrQkEsS0FGbEI7OztBQUs5QixhQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFZSixFQUFaLGNBREY7QUFFRSxxQkFBV0Y7QUFGYjtBQUlFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLGdCQUFNSyxJQUZSO0FBR0UsaUJBQU9DLEtBSFQ7QUFJRSxjQUFPSixFQUFQLGNBSkY7QUFLRSxtQkFBU0QsT0FMWDtBQU1FLG9CQUFVSCxRQU5aO0FBT0Usb0JBQVUsTUFBS0QsUUFQakI7QUFRRSxrQkFBUSxNQUFLRCxNQVJmO0FBU0UsbUJBQVMsTUFBS0wsT0FUaEI7QUFVRSxlQUFLLE1BQUtJLEtBQUwsQ0FBV1ksUUFWbEI7QUFXRSxvQkFBVUg7QUFYWixVQUpGO0FBaUJFLDRCQUFDLE9BQUQsSUFBUyxXQUFVLE9BQW5CLEdBakJGO0FBa0JHRDtBQWxCSCxPQURGO0FBcUJELEtBaERhOztBQUVaLFVBQUtLLEtBQUwsR0FBYSxFQUFFZCxTQUFTLEtBQVgsRUFBYjtBQUZZO0FBR2I7O3FCQWdERGUsTSxxQkFBUztBQUFBLGlCQUlILEtBQUtkLEtBSkY7QUFBQSxRQUVMTSxPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJSCxRQUZKLFVBRUlBLFFBRko7QUFBQSxRQUVjRSxTQUZkLFVBRWNBLFNBRmQ7QUFBQSxRQUV5QkUsRUFGekIsVUFFeUJBLEVBRnpCO0FBQUEsUUFFNkJDLEtBRjdCLFVBRTZCQSxLQUY3QjtBQUFBLFFBRW9DQyxRQUZwQyxVQUVvQ0EsUUFGcEM7QUFBQSxRQUU4Q1IsTUFGOUMsVUFFOENBLE1BRjlDO0FBQUEsUUFFc0RMLE9BRnRELFVBRXNEQSxPQUZ0RDtBQUFBLFFBRStETSxRQUYvRCxVQUUrREEsUUFGL0Q7QUFBQSxRQUdMVSxRQUhLLFVBR0xBLFFBSEs7QUFBQSxRQUdRRyxJQUhSOztBQU1QLFFBQU1DLFdBQVd2QixXQUFXLGFBQVgsRUFBMEJZLFNBQTFCLEVBQXFDO0FBQ3BEQyxzQkFEb0Q7QUFFcERILHdCQUZvRDtBQUdwREosZUFBUyxLQUFLYyxLQUFMLENBQVdkO0FBSGdDLEtBQXJDLENBQWpCOztBQU1BLFdBQ0U7QUFBQTtBQUFBLGlCQUFLLFdBQVdpQixRQUFoQixFQUEwQixJQUFJVCxFQUE5QixJQUFzQ1EsSUFBdEM7QUFDRyxXQUFLWCxjQUFMLENBQW9CLE1BQXBCO0FBREgsS0FERjtBQUtELEc7OztFQXBHbUNiLE1BQU0wQixhLFVBZ0JuQ0MsWSxHQUFlO0FBQ3BCWixXQUFTLEtBRFc7QUFFcEJELGFBQVcsSUFGUztBQUdwQkYsWUFBVSxLQUhVO0FBSXBCSSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJaLFdBQVMsbUJBQU0sQ0FDZCxDQVBtQjtBQVFwQkssVUFBUSxrQkFBTSxDQUNiLENBVG1CO0FBVXBCVyxZQUFVLElBVlU7QUFXcEJILFlBQVUsSUFYVTtBQVlwQkMsUUFBTSxJQVpjO0FBYXBCQyxTQUFPO0FBYmEsQztTQWhCSGhCLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbi8vIEFwcFxuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uRm9jdXM6ICgpID0+IHtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRSZWY6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bGwsXG4gICAgbmFtZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZvY3VzZWQ6IGZhbHNlIH07XG4gIH1cblxuICBvbkZvY3VzID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25CbHVyID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZDogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFkaXNhYmxlZCkgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgfTtcblxuICByZW5kZXJDaGVja2JveCA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLCBkaXNhYmxlZCwgaWQsIGxhYmVsLCB0YWJJbmRleCwgbmFtZSwgdmFsdWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2Ake2lkfS1jaGVja2JveGB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGlkPXtgJHtpZH0tY2hlY2tib3hgfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn1cbiAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNoZWNrIGZvY3VzYWJsZT1cImZhbHNlXCIgLz5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD4pO1xuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBjbGFzc05hbWUsIGlkLCBsYWJlbCwgdGFiSW5kZXgsIG9uQmx1ciwgb25Gb2N1cywgb25DaGFuZ2UsXG4gICAgICBpbnB1dFJlZiwgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xzTmFtZXMgPSBjbGFzc05hbWVzKCdvYy1jaGVja2JveCcsIGNsYXNzTmFtZSwge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9jdXNlZDogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNOYW1lc30gaWQ9e2lkfSB7Li4ucmVzdH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=