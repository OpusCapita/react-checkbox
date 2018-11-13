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
      e.preventDefault();
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 32 && !_this.props.disabled) {
        _this.props.onChange(e);
      }
      _this.props.onKeyDown(e);
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_check2.default, null)
      ) : _react2.default.createElement(
        'a',
        {
          className: className,
          href: '#',
          onClick: _this.onClick,
          onKeyDown: _this.onKeyDown,
          ref: _this.props.inputRef,
          onFocus: _this.props.onFocus,
          onBlur: _this.props.onBlur,
          tabIndex: _this.props.tabIndex
        },
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
  label: null,
  onKeyDown: function onKeyDown() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  inputRef: null,
  tabIndex: '0'
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5RG93biIsImtleUNvZGUiLCJyZW5kZXJDaGVja2JveCIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwib25Gb2N1cyIsIm9uQmx1ciIsInRhYkluZGV4IiwicmVuZGVyIiwiY2hlY2tlZCIsImlkIiwibGFiZWwiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O29CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Z0tBNEJuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNEQSxRQUFFSSxjQUFGO0FBQ0QsSyxRQUVEQyxTLEdBQVksVUFBQ0wsQ0FBRCxFQUFPO0FBQ2pCLFVBQUlBLEVBQUVNLE9BQUYsS0FBYyxFQUFkLElBQW9CLENBQUMsTUFBS0wsS0FBTCxDQUFXQyxRQUFwQyxFQUE4QztBQUM1QyxjQUFLRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JILENBQXBCO0FBQ0Q7QUFDRCxZQUFLQyxLQUFMLENBQVdJLFNBQVgsQ0FBcUJMLENBQXJCO0FBQ0QsSyxRQUVETyxjLEdBQWlCO0FBQUEsYUFDZixNQUFLTixLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXTSxTQUFoQjtBQUNFLHNDQUFDLGVBQUQ7QUFERixPQURGLEdBSUU7QUFBQTtBQUFBO0FBQ0UscUJBQVdBLFNBRGI7QUFFRSxnQkFBSyxHQUZQO0FBR0UsbUJBQVMsTUFBS1QsT0FIaEI7QUFJRSxxQkFBVyxNQUFLTSxTQUpsQjtBQUtFLGVBQUssTUFBS0osS0FBTCxDQUFXUSxRQUxsQjtBQU1FLG1CQUFTLE1BQUtSLEtBQUwsQ0FBV1MsT0FOdEI7QUFPRSxrQkFBUSxNQUFLVCxLQUFMLENBQVdVLE1BUHJCO0FBUUUsb0JBQVUsTUFBS1YsS0FBTCxDQUFXVztBQVJ2QjtBQVVFLHNDQUFDLGVBQUQ7QUFWRixPQUxhO0FBQUEsSzs7O3FCQW1CakJDLE0scUJBQVM7QUFDUCxRQUFNTCxZQUFZLDBCQUFXLGFBQVgsRUFBMEIsS0FBS1AsS0FBTCxDQUFXTyxTQUFyQyxFQUFnRCxFQUFFTSxTQUFTLEtBQUtiLEtBQUwsQ0FBV2EsT0FBdEIsRUFBK0JaLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUFwRCxFQUFoRCxDQUFsQjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBV00sU0FBaEIsRUFBMkIsSUFBSSxLQUFLUCxLQUFMLENBQVdjLEVBQTFDO0FBQ0csV0FBS1IsY0FBTCxDQUFvQixNQUFwQixDQURIO0FBRUU7QUFBQTtBQUFBO0FBQU8sYUFBS04sS0FBTCxDQUFXZTtBQUFsQjtBQUZGLEtBREY7QUFNRCxHOzs7RUFyRW1DQyxnQkFBTUMsYSxVQWVuQ0MsWSxHQUFlO0FBQ3BCTCxXQUFTLEtBRFc7QUFFcEJOLGFBQVcsSUFGUztBQUdwQk4sWUFBVSxLQUhVO0FBSXBCYSxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJYLGFBQVcscUJBQU0sQ0FBRSxDQU5DO0FBT3BCSyxXQUFTLG1CQUFNLENBQUUsQ0FQRztBQVFwQkMsVUFBUSxrQkFBTSxDQUFFLENBUkk7QUFTcEJGLFlBQVUsSUFUVTtBQVVwQkcsWUFBVTtBQVZVLEM7a0JBZkhkLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbmltcG9ydCAnLi9jaGVja2JveC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGlkOiBudWxsLFxuICAgIGxhYmVsOiBudWxsLFxuICAgIG9uS2V5RG93bjogKCkgPT4ge30sXG4gICAgb25Gb2N1czogKCkgPT4ge30sXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgICBpbnB1dFJlZjogbnVsbCxcbiAgICB0YWJJbmRleDogJzAnLFxuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDMyICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcbiAgICB0aGlzLnByb3BzLmRpc2FibGVkID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLnByb3BzLm9uRm9jdXN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxuICAgICAgPlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9hPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ29jLWNoZWNrYm94JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHsgY2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICB7dGhpcy5yZW5kZXJDaGVja2JveCgnaWNvbicpfVxuICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=