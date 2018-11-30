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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkZhQ2hlY2siLCJDaGVja2JveCIsIm9uRm9jdXMiLCJlIiwic2V0U3RhdGUiLCJmb2N1c2VkIiwicHJvcHMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwicmVuZGVyQ2hlY2tib3giLCJjbGFzc05hbWUiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsInRhYkluZGV4IiwiaW5wdXRSZWYiLCJzdGF0ZSIsInJlbmRlciIsImNsc05hbWVzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMEJBQXBCO0FBQ0E7QUFDQSxPQUFPLDJCQUFQOztJQUVxQkMsUTs7O0FBNEJuQixzQkFBYztBQUFBOztBQUFBLGlEQUNaLCtCQURZOztBQUFBLFVBS2RDLE9BTGMsR0FLSixVQUFDQyxDQUFELEVBQU87QUFDZixZQUFLQyxRQUFMLENBQWMsRUFBRUMsU0FBUyxJQUFYLEVBQWQsRUFBaUMsWUFBTTtBQUNyQyxjQUFLQyxLQUFMLENBQVdKLE9BQVgsQ0FBbUJDLENBQW5CO0FBQ0QsT0FGRDtBQUdELEtBVGE7O0FBQUEsVUFXZEksTUFYYyxHQVdMLFVBQUNKLENBQUQsRUFBTztBQUNkLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxTQUFTLEtBQVgsRUFBZCxFQUFrQyxZQUFNO0FBQ3RDLGNBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkosQ0FBbEI7QUFDRCxPQUZEO0FBR0QsS0FmYTs7QUFBQSxVQWlCZEssUUFqQmMsR0FpQkgsVUFBQ0wsQ0FBRCxFQUFPO0FBQUEsVUFDUk0sUUFEUSxHQUNLLE1BQUtILEtBRFYsQ0FDUkcsUUFEUTs7QUFFaEIsVUFBSSxDQUFDQSxRQUFMLEVBQWUsTUFBS0gsS0FBTCxDQUFXRSxRQUFYLENBQW9CTCxDQUFwQjtBQUNoQixLQXBCYTs7QUFBQSxVQXNCZE8sY0F0QmMsR0FzQkcsVUFBQ0MsU0FBRCxFQUFlO0FBQUEsd0JBRzFCLE1BQUtMLEtBSHFCO0FBQUEsVUFFNUJNLE9BRjRCLGVBRTVCQSxPQUY0QjtBQUFBLFVBRW5CSCxRQUZtQixlQUVuQkEsUUFGbUI7QUFBQSxVQUVUSSxFQUZTLGVBRVRBLEVBRlM7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUVFQyxRQUZGLGVBRUVBLFFBRkY7OztBQUs5QixhQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFZLE1BQUtULEtBQUwsQ0FBV08sRUFBdkIsY0FERjtBQUVFLHFCQUFXRjtBQUZiO0FBSUU7QUFDRSxnQkFBSyxVQURQO0FBRUUsZ0JBQU1FLEVBRlI7QUFHRSxjQUFPQSxFQUFQLGNBSEY7QUFJRSxtQkFBU0QsT0FKWDtBQUtFLG9CQUFVSCxRQUxaO0FBTUUsb0JBQVUsTUFBS0QsUUFOakI7QUFPRSxrQkFBUSxNQUFLRCxNQVBmO0FBUUUsbUJBQVMsTUFBS0wsT0FSaEI7QUFTRSxlQUFLLE1BQUtJLEtBQUwsQ0FBV1UsUUFUbEI7QUFVRSxvQkFBVUQ7QUFWWixVQUpGO0FBZ0JFLDRCQUFDLE9BQUQsSUFBUyxXQUFVLE9BQW5CLEdBaEJGO0FBaUJHRDtBQWpCSCxPQURGO0FBb0JELEtBL0NhOztBQUVaLFVBQUtHLEtBQUwsR0FBYSxFQUFFWixTQUFTLEtBQVgsRUFBYjtBQUZZO0FBR2I7O3FCQStDRGEsTSxxQkFBUztBQUFBLGlCQUdILEtBQUtaLEtBSEY7QUFBQSxRQUVMTSxPQUZLLFVBRUxBLE9BRks7QUFBQSxRQUVJSCxRQUZKLFVBRUlBLFFBRko7QUFBQSxRQUVjRSxTQUZkLFVBRWNBLFNBRmQ7QUFBQSxRQUV5QkUsRUFGekIsVUFFeUJBLEVBRnpCOzs7QUFLUCxRQUFNTSxXQUFXcEIsV0FBVyxhQUFYLEVBQTBCWSxTQUExQixFQUFxQztBQUNwREMsc0JBRG9EO0FBRXBESCx3QkFGb0Q7QUFHcERKLGVBQVMsS0FBS1ksS0FBTCxDQUFXWjtBQUhnQyxLQUFyQyxDQUFqQjs7QUFNQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdjLFFBQWhCLEVBQTBCLElBQUlOLEVBQTlCO0FBQ0csV0FBS0gsY0FBTCxDQUFvQixNQUFwQjtBQURILEtBREY7QUFLRCxHOzs7RUE5Rm1DYixNQUFNdUIsYSxVQWNuQ0MsWSxHQUFlO0FBQ3BCVCxXQUFTLEtBRFc7QUFFcEJELGFBQVcsSUFGUztBQUdwQkYsWUFBVSxLQUhVO0FBSXBCSSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJaLFdBQVMsbUJBQU0sQ0FDZCxDQVBtQjtBQVFwQkssVUFBUSxrQkFBTSxDQUNiLENBVG1CO0FBVXBCUyxZQUFVLElBVlU7QUFXcEJELFlBQVU7QUFYVSxDO1NBZEhkLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xyXG4vLyBBcHBcclxuaW1wb3J0ICcuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBsYWJlbDogbnVsbCxcclxuICAgIG9uRm9jdXM6ICgpID0+IHtcclxuICAgIH0sXHJcbiAgICBvbkJsdXI6ICgpID0+IHtcclxuICAgIH0sXHJcbiAgICBpbnB1dFJlZjogbnVsbCxcclxuICAgIHRhYkluZGV4OiBudWxsLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGZvY3VzZWQ6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25CbHVyID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghZGlzYWJsZWQpIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyQ2hlY2tib3ggPSAoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNoZWNrZWQsIGRpc2FibGVkLCBpZCwgbGFiZWwsIHRhYkluZGV4LFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxhYmVsXHJcbiAgICAgICAgaHRtbEZvcj17YCR7dGhpcy5wcm9wcy5pZH0tY2hlY2tib3hgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgbmFtZT17aWR9XHJcbiAgICAgICAgICBpZD17YCR7aWR9LWNoZWNrYm94YH1cclxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICByZWY9e3RoaXMucHJvcHMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXh9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RmFDaGVjayBmb2N1c2FibGU9XCJmYWxzZVwiIC8+XHJcbiAgICAgICAge2xhYmVsfVxyXG4gICAgICA8L2xhYmVsPik7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2hlY2tlZCwgZGlzYWJsZWQsIGNsYXNzTmFtZSwgaWQsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBjbHNOYW1lcyA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgY2xhc3NOYW1lLCB7XHJcbiAgICAgIGNoZWNrZWQsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICBmb2N1c2VkOiB0aGlzLnN0YXRlLmZvY3VzZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzTmFtZXN9IGlkPXtpZH0+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tib3goJ2ljb24nKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=