"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _routes = require("../routes");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/test2/DaIco/components/layout.js";


// <Icon
// 	className="trigger"
// 	type={
// 		this.state.collapsed
// 			? "menu-unfold"
// 			: "menu-fold"
// 	}
// 	onClick={this.toggle}
// />

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var TabPane = _antd.Tabs.TabPane;

var Environment = function (_React$Component) {
	(0, _inherits3.default)(Environment, _React$Component);

	function Environment() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Environment);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Environment.__proto__ || (0, _getPrototypeOf2.default)(Environment)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			collapsed: false
		}, _this.toggle = function () {
			_this.setState({
				collapsed: !_this.state.collapsed
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Environment, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement("link", {
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.min.css",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}))), _react2.default.createElement(Sider, {
				style: {
					overflow: "auto",
					height: "100vh"
				},
				trigger: null,
				collapsible: true,
				collapsed: this.state.collapsed,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement("div", { className: "logo", __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}), _react2.default.createElement(_antd.Menu, {
				theme: "dark",
				mode: "inline",
				defaultSelectedKeys: ["1"],
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_antd.Menu.Item, { key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_antd.Icon, { type: "ordered-list", __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}), _react2.default.createElement(_routes.Link, { route: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, "List of DaIcos"))), _react2.default.createElement(_antd.Menu.Item, { key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_antd.Icon, { type: "check", __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}), _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, "Proposals")))), _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement(_antd.PageHeader, {
				title: "A DaIco",
				extra: [_react2.default.createElement(_routes.Link, { route: "/new", __source: {
						fileName: _jsxFileName,
						lineNumber: 73
					}
				}, _react2.default.createElement("a", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 74
					}
				}, _react2.default.createElement(_antd.Button, {
					float: "right",
					type: "primary",
					icon: "plus-circle",
					style: {
						align: "right"
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 75
					}
				}, "Create new DaIco")))],
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement("div", { className: "wrap", __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement("div", {
				className: "content padding",
				style: {
					width: "127vh",
					color: "grey"
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, "is an alternative fund raising model to ICOs. It provides consumer protection to shareholders by allowing them influence decisions on how their investment are used and the power to enforce a refund if neccesary."))), _react2.default.createElement(Content, {
				style: {
					margin: "24px 16px",
					padding: 24,
					background: "#fff",
					minHeight: 280
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, this.props.children)));
		}
	}]);

	return Environment;
}(_react2.default.Component);

exports.default = Environment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlBhZ2VIZWFkZXIiLCJMYXlvdXQiLCJNZW51IiwiSWNvbiIsIkJ1dHRvbiIsIlRhYnMiLCJMaW5rIiwiUm91dGVyIiwiSGVhZCIsIkhlYWRlciIsIlNpZGVyIiwiQ29udGVudCIsIlRhYlBhbmUiLCJFbnZpcm9ubWVudCIsInN0YXRlIiwiY29sbGFwc2VkIiwidG9nZ2xlIiwic2V0U3RhdGUiLCJvdmVyZmxvdyIsImhlaWdodCIsImFsaWduIiwid2lkdGgiLCJjb2xvciIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVksQUFBUSxBQUFNLEFBQU0sQUFBUTs7QUFDakQsQUFBUyxBQUFNLEFBQWM7O0FBRTdCLEFBQU87Ozs7Ozs7OztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFUSxBLFNBQTJCLEEsYSxBQUEzQjtJQUFRLEEsUSxBQUFtQixhLEFBQW5CO0lBQU8sQSxVQUFZLEEsYUFBWixBOztBQUN2QixJQUFNLFVBQVUsV0FBaEIsQUFBcUI7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7b04sQUFDTDtjQUFRLEFBQ0ksQTtBQURKLEFBQ1AsV0FHRCxBLFNBQVMsWUFBTSxBQUNkO1NBQUEsQUFBSztlQUNPLENBQUMsTUFBQSxBQUFLLE1BRGxCLEFBQWMsQUFDVSxBQUV4QjtBQUhjLEFBQ2I7QTs7Ozs7MkJBSU8sQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBO1NBQ0MsQUFDSyxBQUNKO1VBRkQsQUFFTTs7ZUFGTjtpQkFISCxBQUNDLEFBQ0MsQUFDQyxBQU1GO0FBTkU7QUFDQyx5QkFLRixjQUFEOztlQUNRLEFBQ0ksQUFDVjthQUhGLEFBQ1EsQUFFRSxBQUVUO0FBSk8sQUFDTjthQUZGLEFBS1UsQUFDVDtpQkFORCxBQU9DO2VBQVcsS0FBQSxBQUFLLE1BUGpCLEFBT3VCOztlQVB2QjtpQkFBQSxBQVNDO0FBVEQ7QUFDQyw2Q0FRSyxXQUFMLEFBQWU7ZUFBZjtpQkFURCxBQVNDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDO1dBQUQsQUFDTyxBQUNOO1VBRkQsQUFFTSxBQUNMO3lCQUFxQixDQUh0QixBQUdzQixBQUFDOztlQUh2QjtpQkFBQSxBQUtDO0FBTEQ7QUFDQyxzQkFJQyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDRCQUFLLE1BQU4sQUFBVztlQUFYO2lCQURELEFBQ0MsQUFDQTtBQURBO3VCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BUkgsQUFLQyxBQUVDLEFBQ0MsQUFJRixxQ0FBQyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDRCQUFLLE1BQU4sQUFBVztlQUFYO2lCQURELEFBQ0MsQUFDQTtBQURBO3VCQUNBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BakNKLEFBU0MsQUFVQyxBQVlDLEFBRUMsQUFJSCxpQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7V0FBRCxBQUNPLEFBQ047V0FBTyxpQkFDTixBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNDO0FBREQ7S0FBQSxrQkFDQyxjQUFBOztnQkFBQTtrQkFBQSxBQUNDO0FBREQ7QUFBQSx1QkFDQyxBQUFDO1lBQUQsQUFDTyxBQUNOO1dBRkQsQUFFTSxBQUNMO1dBSEQsQUFHTSxBQUNMOzthQUpELEFBSVEsQUFDQztBQURELEFBQ047O2dCQUxGO2tCQUFBO0FBQUE7QUFDQyxPQU5MLEFBRVEsQUFDTixBQUNDLEFBQ0M7O2VBTEo7aUJBQUEsQUFtQkM7QUFuQkQ7QUFDQyxzQkFrQkEsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBO2VBQUEsQUFDVyxBQUNWOztZQUFPLEFBQ0MsQUFDUDtZQUpGLEFBRVEsQUFFQztBQUZELEFBQ047O2VBSEY7aUJBQUE7QUFBQTtBQUNDLE1BdEJKLEFBQ0MsQUFtQkMsQUFDQyxBQWdCRiwwT0FBQyxjQUFEOzthQUNRLEFBQ0UsQUFDUjtjQUZNLEFBRUcsQUFDVDtpQkFITSxBQUdNLEFBQ1o7Z0JBTEYsQUFDUSxBQUlLO0FBSkwsQUFDTjs7ZUFGRjtpQkFBQSxBQVFFO0FBUkY7QUFDQyxXQU9DLEFBQUssTUFuRlYsQUFDQyxBQXFDQyxBQXFDQyxBQVFhLEFBS2hCOzs7OztFQXBHd0IsZ0JBQU0sQSxBQXVHaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL0NvbnNlbnN1czIwMTkvdGVzdDIvRGFJY28ifQ==