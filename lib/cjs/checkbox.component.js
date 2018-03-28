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
    }, _this.renderCheckbox = function (className) {
      return _this.props.disabled ? _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(_check2.default, null)
      ) : _react2.default.createElement(
        'a',
        { className: className, href: '#', onClick: _this.onClick, onKeyDown: _this.props.onKeyDown, ref: _this.props.inputRef },
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
  onKeyDown: null,
  inputRef: null
}, _temp2);
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja2JveC5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DbGljayIsImUiLCJwcm9wcyIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckNoZWNrYm94IiwiY2xhc3NOYW1lIiwib25LZXlEb3duIiwiaW5wdXRSZWYiLCJyZW5kZXIiLCJjaGVja2VkIiwiaWQiLCJsYWJlbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O29CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Z0tBc0JuQkMsTyxHQUFVLFVBQUNDLENBQUQsRUFBTztBQUNmLFVBQUksQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLGNBQUtELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQkgsQ0FBcEI7QUFDRDtBQUNEQSxRQUFFSSxjQUFGO0FBQ0QsSyxRQUVEQyxjLEdBQWlCO0FBQUEsYUFDZixNQUFLSixLQUFMLENBQVdDLFFBQVgsR0FDRTtBQUFBO0FBQUEsVUFBSyxXQUFXSSxTQUFoQjtBQUNFO0FBREYsT0FERixHQUlFO0FBQUE7QUFBQSxVQUFHLFdBQVdBLFNBQWQsRUFBeUIsTUFBSyxHQUE5QixFQUFrQyxTQUFTLE1BQUtQLE9BQWhELEVBQXlELFdBQVcsTUFBS0UsS0FBTCxDQUFXTSxTQUEvRSxFQUEwRixLQUFLLE1BQUtOLEtBQUwsQ0FBV08sUUFBMUc7QUFDRTtBQURGLE9BTGE7QUFBQSxLOzs7cUJBVWpCQyxNLHFCQUFTO0FBQ1AsUUFBTUgsWUFBWSwwQkFBVyxhQUFYLEVBQTBCLEtBQUtMLEtBQUwsQ0FBV0ssU0FBckMsRUFBZ0QsRUFBRUksU0FBUyxLQUFLVCxLQUFMLENBQVdTLE9BQXRCLEVBQStCUixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFBcEQsRUFBaEQsQ0FBbEI7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVdJLFNBQWhCLEVBQTJCLElBQUksS0FBS0wsS0FBTCxDQUFXVSxFQUExQztBQUNHLFdBQUtOLGNBQUwsQ0FBb0IsTUFBcEIsQ0FESDtBQUVFO0FBQUE7QUFBQTtBQUFPLGFBQUtKLEtBQUwsQ0FBV1c7QUFBbEI7QUFGRixLQURGO0FBTUQsRzs7O0VBL0NtQyxnQkFBTUMsYSxVQVluQ0MsWSxHQUFlO0FBQ3BCSixXQUFTLEtBRFc7QUFFcEJKLGFBQVcsSUFGUztBQUdwQkosWUFBVSxLQUhVO0FBSXBCUyxNQUFJLElBSmdCO0FBS3BCQyxTQUFPLElBTGE7QUFNcEJMLGFBQVcsSUFOUztBQU9wQkMsWUFBVTtBQVBVLEM7a0JBWkhWLFEiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZhQ2hlY2sgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZWNrJztcbmltcG9ydCAnLi9jaGVja2JveC5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBpZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgaW5wdXRSZWY6IG51bGwsXG4gIH1cblxuICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94ID0gY2xhc3NOYW1lID0+IChcbiAgICB0aGlzLnByb3BzLmRpc2FibGVkID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8RmFDaGVjayAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja30gb25LZXlEb3duPXt0aGlzLnByb3BzLm9uS2V5RG93bn0gcmVmPXt0aGlzLnByb3BzLmlucHV0UmVmfSA+XG4gICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICA8L2E+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnb2MtY2hlY2tib3gnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgeyBjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgIHt0aGlzLnJlbmRlckNoZWNrYm94KCdpY29uJyl9XG4gICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==