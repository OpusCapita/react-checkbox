var _class, _temp;

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
        id = _props.id;


    var clsNames = classNames('oc-checkbox', className, {
      checked: checked,
      disabled: disabled,
      focused: this.state.focused
    });

    return React.createElement(
      'div',
      { className: clsNames, id: id },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uRm9jdXMiLCJlIiwic2V0U3RhdGUiLCJmb2N1c2VkIiwicHJvcHMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsInRhYkluZGV4IiwiaW5wdXRSZWYiLCJzdGF0ZSIsInJlbmRlciIsImNsc05hbWVzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCO0FBQ0E7QUFDQSxPQUFPLDJCQUFQOztJQUVxQkMsUTs7O0FBNEJuQixzQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBS2RDLE9BTGMsR0FLSixVQUFDQyxDQUFELEVBQU87QUFDZixZQUFLQyxRQUFMLENBQWMsRUFBRUMsU0FBUyxJQUFYLEVBQWQsRUFBaUMsWUFBTTtBQUNyQyxjQUFLQyxLQUFMLENBQVdKLE9BQVgsQ0FBbUJDLENBQW5CO0FBQ0QsT0FGRDtBQUdELEtBVGE7O0FBQUEsVUFXZEksTUFYYyxHQVdMLFVBQUNKLENBQUQsRUFBTztBQUNkLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLEtBQVgsRUFBZCxFQUFrQyxZQUFNO0FBQ3RDLGNBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkosQ0FBbEI7QUFDRCxPQUZEO0FBR0QsS0FmYTs7QUFBQSxVQWlCZEssUUFqQmMsR0FpQkgsVUFBQ0wsQ0FBRCxFQUFPO0FBQUEsVUFDUk0sUUFEUSxHQUNLLE1BQUtILEtBRFYsQ0FDUkcsUUFEUTs7QUFFaEIsVUFBSSxDQUFDQSxRQUFMLEVBQWUsTUFBS0gsS0FBTCxDQUFXRSxRQUFYLENBQW9CTCxDQUFwQjtBQUNoQixLQXBCYTs7QUFBQSxVQXNCZE8sY0F0QmMsR0FzQkcsVUFBQ0MsU0FBRCxFQUFlO0FBQUEsd0JBRzFCLE1BQUtMLEtBSHFCO0FBQUEsVUFFNUJNLE9BRjRCLGVBRTVCQSxPQUY0QjtBQUFBLFVBRW5CSCxRQUZtQixlQUVuQkEsUUFGbUI7QUFBQSxVQUVUSSxFQUZTLGVBRVRBLEVBRlM7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUVFQyxRQUZGLGVBRUVBLFFBRkY7OztBQUs5QixhQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFZLE1BQUtULEtBQUwsQ0FBV08sRUFBdkIsY0FERjtBQUVFLHFCQUFXRjtBQUZiO0FBSUU7QUFDRSxnQkFBSyxVQURQO0FBRUUsZ0JBQU1FLEVBRlI7QUFHRSxjQUFPQSxFQUFQLGNBSEY7QUFJRSxtQkFBU0QsT0FKWDtBQUtFLG9CQUFVSCxRQUxaO0FBTUUsb0JBQVUsTUFBS0QsUUFOakI7QUFPRSxrQkFBUSxNQUFLRCxNQVBmO0FBUUUsbUJBQVMsTUFBS0wsT0FSaEI7QUFTRSxlQUFLLE1BQUtJLEtBQUwsQ0FBV1UsUUFUbEI7QUFVRSxvQkFBVUQ7QUFWWixVQUpGO0FBZ0JFLDRCQUFDLE9BQUQsSUFBUyxXQUFVLE9BQW5CLEdBaEJGO0FBaUJHRDtBQWpCSCxPQURGO0FBb0JELEtBL0NhOztBQUVaLFVBQUtHLEtBQUwsR0FBYSxFQUFFWixTQUFTLEtBQVgsRUFBYjtBQUZZO0FBR2I7O3FCQStDRGEsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtaLEtBSEY7QUFBQSxRQUVMTSxPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJSCxRQUZKLFVBRUlBLFFBRko7QUFBQSxRQUVjRSxTQUZkLFVBRWNBLFNBRmQ7QUFBQSxRQUV5QkUsRUFGekIsVUFFeUJBLEVBRnpCOzs7QUFLUCxRQUFNTSxXQUFXcEIsV0FBVyxhQUFYLEVBQTBCWSxTQUExQixFQUFxQztBQUNwREMsc0JBRG9EO0FBRXBESCx3QkFGb0Q7QUFHcERKLGVBQVMsS0FBS1ksS0FBTCxDQUFXWjtBQUhnQyxLQUFyQyxDQUFqQjs7QUFNQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdjLFFBQWhCLEVBQTBCLElBQUlOLEVBQTlCO0FBQ0csV0FBS0gsY0FBTCxDQUFvQixNQUFwQjtBQURILEtBREY7QUFLRCxHOzs7RUE5Rm1DYixNQUFNdUIsYSxVQWNuQ0MsWSxHQUFlO0FBQ3BCVCxXQUFTLEtBRFc7QUFFcEJELGFBQVcsSUFGUztBQUdwQkYsWUFBVSxLQUhVO0FBSXBCSSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJaLFdBQVMsbUJBQU0sQ0FDZCxDQVBtQjtBQVFwQkssVUFBUSxrQkFBTSxDQUNiLENBVG1CO0FBVXBCUyxZQUFVLElBVlU7QUFXcEJELFlBQVU7QUFYVSxDO1NBZEhkLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbi8vIEFwcFxuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBvbkZvY3VzOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0UmVmOiBudWxsLFxuICAgIHRhYkluZGV4OiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZm9jdXNlZDogZmFsc2UgfTtcbiAgfVxuXG4gIG9uRm9jdXMgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWRpc2FibGVkKSB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICB9O1xuXG4gIHJlbmRlckNoZWNrYm94ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBpZCwgbGFiZWwsIHRhYkluZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtgJHt0aGlzLnByb3BzLmlkfS1jaGVja2JveGB9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e2lkfVxuICAgICAgICAgIGlkPXtgJHtpZH0tY2hlY2tib3hgfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxuICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbnB1dFJlZn1cbiAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XG4gICAgICAgIC8+XG4gICAgICAgIDxGYUNoZWNrIGZvY3VzYWJsZT1cImZhbHNlXCIgLz5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD4pO1xuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBjbGFzc05hbWUsIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xzTmFtZXMgPSBjbGFzc05hbWVzKCdvYy1jaGVja2JveCcsIGNsYXNzTmFtZSwge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9jdXNlZDogdGhpcy5zdGF0ZS5mb2N1c2VkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHNOYW1lc30gaWQ9e2lkfT5cbiAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tib3goJ2ljb24nKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==