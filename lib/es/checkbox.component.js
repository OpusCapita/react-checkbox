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
          tabIndex = _this$props.tabIndex;


      return React.createElement(
        'label',
        {
          htmlFor: _this.props.id + '-checkbox',
          className: className
        },
        React.createElement('input', {
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
  tabIndex: null
}, _temp);
export { Checkbox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uRm9jdXMiLCJlIiwic2V0U3RhdGUiLCJmb2N1c2VkIiwicHJvcHMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsInRhYkluZGV4IiwiaW5wdXRSZWYiLCJzdGF0ZSIsInJlbmRlciIsInJlc3QiLCJjbHNOYW1lcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQiwwQkFBcEI7QUFDQTtBQUNBLE9BQU8sMkJBQVA7O0lBRXFCQyxROzs7QUE0Qm5CLHNCQUFjO0FBQUE7O0FBQUEsaURBQ1osK0JBRFk7O0FBQUEsVUFLZEMsT0FMYyxHQUtKLFVBQUNDLENBQUQsRUFBTztBQUNmLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLElBQVgsRUFBZCxFQUFpQyxZQUFNO0FBQ3JDLGNBQUtDLEtBQUwsQ0FBV0osT0FBWCxDQUFtQkMsQ0FBbkI7QUFDRCxPQUZEO0FBR0QsS0FUYTs7QUFBQSxVQVdkSSxNQVhjLEdBV0wsVUFBQ0osQ0FBRCxFQUFPO0FBQ2QsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsS0FBWCxFQUFkLEVBQWtDLFlBQU07QUFDdEMsY0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCSixDQUFsQjtBQUNELE9BRkQ7QUFHRCxLQWZhOztBQUFBLFVBaUJkSyxRQWpCYyxHQWlCSCxVQUFDTCxDQUFELEVBQU87QUFBQSxVQUNSTSxRQURRLEdBQ0ssTUFBS0gsS0FEVixDQUNSRyxRQURROztBQUVoQixVQUFJLENBQUNBLFFBQUwsRUFBZSxNQUFLSCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JMLENBQXBCO0FBQ2hCLEtBcEJhOztBQUFBLFVBc0JkTyxjQXRCYyxHQXNCRyxVQUFDQyxTQUFELEVBQWU7QUFBQSx3QkFHMUIsTUFBS0wsS0FIcUI7QUFBQSxVQUU1Qk0sT0FGNEIsZUFFNUJBLE9BRjRCO0FBQUEsVUFFbkJILFFBRm1CLGVBRW5CQSxRQUZtQjtBQUFBLFVBRVRJLEVBRlMsZUFFVEEsRUFGUztBQUFBLFVBRUxDLEtBRkssZUFFTEEsS0FGSztBQUFBLFVBRUVDLFFBRkYsZUFFRUEsUUFGRjs7O0FBSzlCLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQVksTUFBS1QsS0FBTCxDQUFXTyxFQUF2QixjQURGO0FBRUUscUJBQVdGO0FBRmI7QUFJRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxnQkFBTUUsRUFGUjtBQUdFLGNBQU9BLEVBQVAsY0FIRjtBQUlFLG1CQUFTRCxPQUpYO0FBS0Usb0JBQVVILFFBTFo7QUFNRSxvQkFBVSxNQUFLRCxRQU5qQjtBQU9FLGtCQUFRLE1BQUtELE1BUGY7QUFRRSxtQkFBUyxNQUFLTCxPQVJoQjtBQVNFLGVBQUssTUFBS0ksS0FBTCxDQUFXVSxRQVRsQjtBQVVFLG9CQUFVRDtBQVZaLFVBSkY7QUFnQkUsNEJBQUMsT0FBRCxJQUFTLFdBQVUsT0FBbkIsR0FoQkY7QUFpQkdEO0FBakJILE9BREY7QUFvQkQsS0EvQ2E7O0FBRVosVUFBS0csS0FBTCxHQUFhLEVBQUVaLFNBQVMsS0FBWCxFQUFiO0FBRlk7QUFHYjs7cUJBK0NEYSxNLHFCQUFTO0FBQUEsaUJBSUgsS0FBS1osS0FKRjtBQUFBLFFBRUxNLE9BRkssVUFFTEEsT0FGSztBQUFBLFFBRUlILFFBRkosVUFFSUEsUUFGSjtBQUFBLFFBRWNFLFNBRmQsVUFFY0EsU0FGZDtBQUFBLFFBRXlCRSxFQUZ6QixVQUV5QkEsRUFGekI7QUFBQSxRQUU2QkMsS0FGN0IsVUFFNkJBLEtBRjdCO0FBQUEsUUFFb0NDLFFBRnBDLFVBRW9DQSxRQUZwQztBQUFBLFFBRThDUixNQUY5QyxVQUU4Q0EsTUFGOUM7QUFBQSxRQUVzREwsT0FGdEQsVUFFc0RBLE9BRnREO0FBQUEsUUFFK0RNLFFBRi9ELFVBRStEQSxRQUYvRDtBQUFBLFFBR0xRLFFBSEssVUFHTEEsUUFISztBQUFBLFFBR1FHLElBSFI7O0FBTVAsUUFBTUMsV0FBV3JCLFdBQVcsYUFBWCxFQUEwQlksU0FBMUIsRUFBcUM7QUFDcERDLHNCQURvRDtBQUVwREgsd0JBRm9EO0FBR3BESixlQUFTLEtBQUtZLEtBQUwsQ0FBV1o7QUFIZ0MsS0FBckMsQ0FBakI7O0FBTUEsV0FDRTtBQUFBO0FBQUEsaUJBQUssV0FBV2UsUUFBaEIsRUFBMEIsSUFBSVAsRUFBOUIsSUFBc0NNLElBQXRDO0FBQ0csV0FBS1QsY0FBTCxDQUFvQixNQUFwQjtBQURILEtBREY7QUFLRCxHOzs7RUEvRm1DYixNQUFNd0IsYSxVQWNuQ0MsWSxHQUFlO0FBQ3BCVixXQUFTLEtBRFc7QUFFcEJELGFBQVcsSUFGUztBQUdwQkYsWUFBVSxLQUhVO0FBSXBCSSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJaLFdBQVMsbUJBQU0sQ0FDZCxDQVBtQjtBQVFwQkssVUFBUSxrQkFBTSxDQUNiLENBVG1CO0FBVXBCUyxZQUFVLElBVlU7QUFXcEJELFlBQVU7QUFYVSxDO1NBZEhkLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbi8vIEFwcFxuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9jdXNlZDogZmFsc2UgfTtcbiAgfVxuXG4gIG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRpc2FibGVkKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICB9O1xuXG4gIHJlbmRlckNoZWNrYm94ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBpZCwgbGFiZWwsIHRhYkluZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtgJHt0aGlzLnByb3BzLmlkfS1jaGVja2JveGB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgIGlkPXtgJHtpZH0tY2hlY2tib3hgfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn1cbiAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNoZWNrIGZvY3VzYWJsZT1cImZhbHNlXCIgLz5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD4pO1xuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBjbGFzc05hbWUsIGlkLCBsYWJlbCwgdGFiSW5kZXgsIG9uQmx1ciwgb25Gb2N1cywgb25DaGFuZ2UsXG4gICAgICBpbnB1dFJlZiwgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xzTmFtZXMgPSBjbGFzc05hbWVzKCdvYy1jaGVja2JveCcsIGNsYXNzTmFtZSwge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9jdXNlZDogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNOYW1lc30gaWQ9e2lkfSB7Li4ucmVzdH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=