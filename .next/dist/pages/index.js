"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _getERC20Details = require("../ethereum/getERC20Details");

var _getERC20Details2 = _interopRequireDefault(_getERC20Details);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _antd = require("antd");

var _getDaIcoDetails = require("../ethereum/getDaIcoDetails");

var _getDaIcoDetails2 = _interopRequireDefault(_getDaIcoDetails);

var _routes = require("../routes");

var _columnA = require("./columnA");

var _columnA2 = _interopRequireDefault(_columnA);

var _columnB = require("./columnB");

var _columnB2 = _interopRequireDefault(_columnB);

var _columnC = require("./columnC");

var _columnC2 = _interopRequireDefault(_columnC);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/DaIco/pages/index.js?entry";
//import daIco from "../ethereum/DaIco";


var TabPane = _antd.Tabs.TabPane;

var DacIcoDisplay = function (_React$Component) {
	(0, _inherits3.default)(DacIcoDisplay, _React$Component);

	function DacIcoDisplay() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, DacIcoDisplay);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DacIcoDisplay.__proto__ || (0, _getPrototypeOf2.default)(DacIcoDisplay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			dataA: [],
			dataB: [],
			dataC: []
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(DacIcoDisplay, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log("details are " + this.props.erc20Details[0]);
								this.setState({
									dataA: this.props.A,
									dataB: this.props.B,
									dataC: this.props.C
								});

							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "renderDaIco",
		value: function renderDaIco() {
			return this.props.DaIcos.map(function (address) {
				return _react2.default.createElement(Card, {
					title: address,
					extra: _react2.default.createElement("a", { href: "#", __source: {
							fileName: _jsxFileName,
							lineNumber: 120
						}
					}, "More"),
					style: { width: 600 },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 118
					}
				}, _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 123
					}
				}, address));
			});
		}
	}, {
		key: "callback",
		value: function callback(key) {
			console.log(key);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, _react2.default.createElement(_antd.Tabs, { defaultActiveKey: "1", onChange: this.callback, __source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement(TabPane, { tab: "Active DaIcos", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnB2.default,
				dataSource: this.state.dataA,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			})), _react2.default.createElement(TabPane, { tab: "Pending DaIcos", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnA2.default,
				dataSource: this.state.dataA,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			})), _react2.default.createElement(TabPane, { tab: "Deployed ERC20 Tokens", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnC2.default,
				dataSource: this.state.dataC,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var listOfDaicos, listOfERC20s, A, B, C, daIco, erc20, erc20Details, summary, currentballot, i, _tapRate, approvalRating, statusNumber, _balance, date, icostart, date2, icoEnd, status;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _factory2.default.methods.getDeployedDAICOs().call();

							case 2:
								listOfDaicos = _context2.sent;
								_context2.next = 5;
								return _factory2.default.methods.getdeployedERC20s().call();

							case 5:
								listOfERC20s = _context2.sent;
								A = [];
								B = [];
								C = [];
								daIco = void 0;
								erc20 = void 0;
								erc20Details = void 0;
								summary = void 0;
								currentballot = void 0;
								i = 0;

							case 15:
								if (!(i < listOfERC20s.length)) {
									_context2.next = 23;
									break;
								}

								erc20 = (0, _getERC20Details2.default)(listOfERC20s[i]);
								_context2.next = 19;
								return erc20.methods.getSummary().call();

							case 19:
								erc20Details = _context2.sent;

							case 20:
								i++;
								_context2.next = 15;
								break;

							case 23:
								i = 0;

							case 24:
								if (!(i < listOfDaicos.length)) {
									_context2.next = 56;
									break;
								}

								daIco = (0, _getDaIcoDetails2.default)(listOfDaicos[i]);
								_context2.next = 28;
								return daIco.methods.getSummary().call();

							case 28:
								summary = _context2.sent;
								_context2.next = 31;
								return daIco.methods.tapRate().call();

							case 31:
								_tapRate = _context2.sent;
								_context2.next = 34;
								return daIco.methods.approvalRating().call();

							case 34:
								approvalRating = _context2.sent;
								_context2.next = 37;
								return daIco.methods.getCurrentBallot().call();

							case 37:
								currentballot = _context2.sent;
								_context2.next = 40;
								return daIco.methods.status().call();

							case 40:
								statusNumber = _context2.sent;
								_context2.next = 43;
								return daIco.methods.getRaisUpAndBalance().call();

							case 43:
								_balance = _context2.sent;
								date = new Date(summary[6] * 1000);
								icostart = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
								date2 = new Date(summary[7] * 1000);
								icoEnd = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear();
								status = void 0;

								if (statusNumber == 1) {
									status = "pre-Ico";
								} else if (statusNumber == 2) {
									status = "Ico";
								} else if (statusNumber == 3) {
									status = "post-Ico";
								}
								console.log("details are " + erc20Details[0]);

								C.push({
									tokenName: erc20Details[0],
									tokenSymbol: erc20Details[1],
									initSupply: erc20Details[2],
									allocation: erc20Details[3],
									manager: erc20Details[5],
									contractAddress: erc20Details[4]
								});

								A.push({
									address: listOfDaicos[i],
									name: summary[0],
									symbol: summary[1],
									balance: _balance[0],
									raiseUp: _balance[1],
									minimumContribution: summary[2],
									maximumContribution: summary[3],
									softCap: summary[4],
									hardCap: summary[5],
									icoStartDate: icostart,
									icoEndDate: icoEnd,
									status: status,
									tapRate: _tapRate + "ETH every " + summary[8] + " days",
									rating: approvalRating + " out of 5"
								});

							case 53:
								i++;
								_context2.next = 24;
								break;

							case 56:
								return _context2.abrupt("return", { A: A, B: B, C: C, listOfDaicos: listOfDaicos, erc20Details: erc20Details });

							case 57:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps() {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return DacIcoDisplay;
}(_react2.default.Component);

exports.default = DacIcoDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkVSQzIwIiwiSGVhZCIsIkxheW91dCIsIlRhYmxlIiwiRGl2aWRlciIsIkJ1dHRvbiIsIlRhZyIsIlRhYnMiLCJEYUljbyIsIkxpbmsiLCJjb2x1bW5zQiIsImNvbHVtbnNBIiwiY29sdW1uc0MiLCJ3ZWIzIiwiVGFiUGFuZSIsIkRhY0ljb0Rpc3BsYXkiLCJzdGF0ZSIsImRhdGFBIiwiZGF0YUIiLCJkYXRhQyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImVyYzIwRGV0YWlscyIsInNldFN0YXRlIiwiQSIsIkIiLCJDIiwiRGFJY29zIiwibWFwIiwiYWRkcmVzcyIsIndpZHRoIiwia2V5IiwiY2FsbGJhY2siLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWREQUlDT3MiLCJjYWxsIiwibGlzdE9mRGFpY29zIiwiZ2V0ZGVwbG95ZWRFUkMyMHMiLCJsaXN0T2ZFUkMyMHMiLCJkYUljbyIsImVyYzIwIiwic3VtbWFyeSIsImN1cnJlbnRiYWxsb3QiLCJpIiwibGVuZ3RoIiwiZ2V0U3VtbWFyeSIsInRhcFJhdGUiLCJfdGFwUmF0ZSIsImFwcHJvdmFsUmF0aW5nIiwiZ2V0Q3VycmVudEJhbGxvdCIsInN0YXR1cyIsInN0YXR1c051bWJlciIsImdldFJhaXNVcEFuZEJhbGFuY2UiLCJfYmFsYW5jZSIsImRhdGUiLCJEYXRlIiwiaWNvc3RhcnQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImRhdGUyIiwiaWNvRW5kIiwicHVzaCIsInRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwiaW5pdFN1cHBseSIsImFsbG9jYXRpb24iLCJtYW5hZ2VyIiwiY29udHJhY3RBZGRyZXNzIiwibmFtZSIsInN5bWJvbCIsImJhbGFuY2UiLCJyYWlzZVVwIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm1heGltdW1Db250cmlidXRpb24iLCJzb2Z0Q2FwIiwiaGFyZENhcCIsImljb1N0YXJ0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QUVBLElBQUksZ0JBQUosQUFBb0IsR0FBRyxBQUM3QjtrQkFBQSxBQUFTLEFBQ1Q7QUFDRDtnQkFBQSxBQUFRLElBQUksaUJBQWlCLGFBQTdCLEFBQTZCLEFBQWEsQUFFMUM7O1VBQUEsQUFBRTtvQkFDVSxhQURMLEFBQ0ssQUFBYSxBQUN4QjtzQkFBYSxhQUZQLEFBRU8sQUFBYSxBQUMxQjtxQkFBWSxhQUhOLEFBR00sQUFBYSxBQUN6QjtxQkFBWSxhQUpOLEFBSU0sQUFBYSxBQUN6QjtrQkFBUyxhQUxILEFBS0csQUFBYSxBQUN0QjswQkFBaUIsYUFObEIsQUFBTyxBQU1XLEFBQWEsQUFHL0I7QUFUTyxBQUNOOztVQVFELEFBQUU7a0JBQ1EsYUFESCxBQUNHLEFBQWEsQUFDdEI7ZUFBTSxRQUZBLEFBRUEsQUFBUSxBQUNkO2lCQUFRLFFBSEYsQUFHRSxBQUFRLEFBQ2hCO2tCQUFTLFNBSkgsQUFJRyxBQUFTLEFBQ2xCO2tCQUFTLFNBTEgsQUFLRyxBQUFTLEFBQ2xCOzhCQUFxQixRQU5mLEFBTWUsQUFBUSxBQUM3Qjs4QkFBcUIsUUFQZixBQU9lLEFBQVEsQUFDN0I7a0JBQVMsUUFSSCxBQVFHLEFBQVEsQUFDakI7a0JBQVMsUUFUSCxBQVNHLEFBQVEsQUFDakI7dUJBVk0sQUFVUSxBQUNkO3FCQVhNLEFBV00sQUFDWjtpQkFaTSxBQVlFLEFBQ1I7a0JBQVMsV0FBQSxBQUFXLGVBQWUsUUFBMUIsQUFBMEIsQUFBUSxLQWJyQyxBQWEwQyxBQUNoRDtpQkFBUSxpQkFkVCxBQUFPLEFBY21CO0FBZG5CLEFBQ047O1lBN0N1QztBOzs7OzswQ0E2RGxDLEVBQUUsR0FBRixHQUFLLEdBQUwsR0FBUSxHQUFSLEdBQVcsY0FBWCxjQUF5QixjQUF6QixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEZtQixnQkFBTSxBLEFBZ0psQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9Db25zZW5zdXMyMDE5L0RhSWNvIn0=