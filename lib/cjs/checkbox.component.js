'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2; /* eslint-disable jsx-a11y/anchor-is-valid */


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
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_check2.default, null)
      ) : _react2.default.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick },
        _react2.default.createElement(_check2.default, null)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var className = (0, _classnames2.default)('oc-checkbox', this.props.className, { checked: this.props.checked, disabled: this.props.disabled });
    return _react2.default.createElement(
      'div',
      { className: className, id: this.props.id },
      this.renderCheckbox('icon'),
      _react2.default.createElement(
        'span',
        null,
        this.props.label
      )
    );
  };

  return Checkbox;
}(_react2.default.PureComponent), _class.defaultProps = {
  checked: false,
  className: null,
  disabled: false,
  id: null,
  label: null
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsInJlbmRlciIsImNoZWNrZWQiLCJpZCIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7b0JBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7OztnS0FrQm5CQyxPLEdBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2YsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsY0FBS0QsS0FBTCxDQUFXRSxRQUFYLENBQW9CSCxDQUFwQjtBQUNEO0FBQ0YsSyxRQUVESSxjLEdBQWlCO0FBQUEsYUFDZixNQUFLSCxLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXRyxTQUFoQjtBQUNFO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFNBQWQsRUFBeUIsTUFBSyxHQUE5QixFQUFrQyxTQUFTLE1BQUtOLE9BQWhEO0FBQ0U7QUFERixPQUxhO0FBQUEsSzs7O3FCQVVqQk8sTSxxQkFBUztBQUNQLFFBQU1ELFlBQVksMEJBQVcsYUFBWCxFQUEwQixLQUFLSixLQUFMLENBQVdJLFNBQXJDLEVBQWdELEVBQUVFLFNBQVMsS0FBS04sS0FBTCxDQUFXTSxPQUF0QixFQUErQkwsVUFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQXBELEVBQWhELENBQWxCO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXRyxTQUFoQixFQUEyQixJQUFJLEtBQUtKLEtBQUwsQ0FBV08sRUFBMUM7QUFDRyxXQUFLSixjQUFMLENBQW9CLE1BQXBCLENBREg7QUFFRTtBQUFBO0FBQUE7QUFBTyxhQUFLSCxLQUFMLENBQVdRO0FBQWxCO0FBRkYsS0FERjtBQU1ELEc7OztFQTFDbUMsZ0JBQU1DLGEsVUFVbkNDLFksR0FBZTtBQUNwQkosV0FBUyxLQURXO0FBRXBCRixhQUFXLElBRlM7QUFHcEJILFlBQVUsS0FIVTtBQUlwQk0sTUFBSSxJQUpnQjtBQUtwQkMsU0FBTztBQUxhLEM7a0JBVkhYLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRmFDaGVjayBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hlY2snO1xyXG5pbXBvcnQgJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBpZDogbnVsbCxcclxuICAgIGxhYmVsOiBudWxsLFxyXG4gIH1cclxuXHJcbiAgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcclxuICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgP1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8RmFDaGVjayAvPlxyXG4gICAgICA8L2Rpdj4gOlxyXG4gICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxGYUNoZWNrIC8+XHJcbiAgICAgIDwvYT5cclxuICApXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cclxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxyXG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=