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

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/test2/DaIco/pages/index.js?entry";
//import daIco from "../ethereum/DaIco";


var TabPane = _antd.Tabs.TabPane;

var DacIcoDisplay = function (_React$Component) {
	(0, _inherits3.default)(DacIcoDisplay, _React$Component);

	function DacIcoDisplay() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, DacIcoDisplay);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DacIcoDisplay.__proto__ || (0, _getPrototypeOf2.default)(DacIcoDisplay)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			dataA: [],
			dataB: [],
			dataC: []
		}, _this.endIco = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _web2.default.eth.getAccounts();

						case 2:
							accounts = _context.sent;

							_this.props.daIco.methods.voteForTapChange("2").send({
								from: accounts[0]
							});

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(DacIcoDisplay, [{
		key: "componentDidMount",
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								console.log("details are " + this.props.erc20Details[0]);
								this.setState({
									dataA: this.props.A,
									dataB: this.props.B,
									dataC: this.props.C
								});

							case 2:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function componentDidMount() {
				return _ref3.apply(this, arguments);
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
							lineNumber: 146
						}
					}, "More"),
					style: { width: 600 },
					__source: {
						fileName: _jsxFileName,
						lineNumber: 144
					}
				}, _react2.default.createElement("p", {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 149
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
					lineNumber: 161
				}
			}, _react2.default.createElement(_antd.Tabs, { defaultActiveKey: "1", onChange: this.callback, __source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement(TabPane, { tab: "Active DaIcos", key: "1", __source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnA2.default,
				dataSource: this.state.dataA,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			})), _react2.default.createElement(TabPane, { tab: "Pending DaIcos", key: "2", __source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnB2.default,
				dataSource: this.state.dataB,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			})), _react2.default.createElement(TabPane, { tab: "Deployed ERC20 Tokens", key: "3", __source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, _react2.default.createElement(_antd.Table, {
				columns: _columnC2.default,
				dataSource: this.state.dataC,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var listOfDaicos, listOfERC20s, A, B, C, daIco, erc20, erc20Details, summary, currentballot, i, _tapRate, approvalRating, statusNumber, _balance, date, icostart, date2, icoEnd, status, newStatus, newStatus2;

				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _factory2.default.methods.getDeployedDAICOs().call();

							case 2:
								listOfDaicos = _context3.sent;
								_context3.next = 5;
								return _factory2.default.methods.getdeployedERC20s().call();

							case 5:
								listOfERC20s = _context3.sent;
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
									_context3.next = 24;
									break;
								}

								erc20 = (0, _getERC20Details2.default)(listOfERC20s[i]);
								_context3.next = 19;
								return erc20.methods.getSummary().call();

							case 19:
								erc20Details = _context3.sent;

								C.push({
									tokenName: erc20Details[0],
									tokenSymbol: erc20Details[1],
									initSupply: erc20Details[2],
									allocation: erc20Details[3],
									manager: erc20Details[5],
									contractAddress: erc20Details[4]
								});

							case 21:
								i++;
								_context3.next = 15;
								break;

							case 24:
								i = 0;

							case 25:
								if (!(i < listOfDaicos.length)) {
									_context3.next = 55;
									break;
								}

								daIco = (0, _getDaIcoDetails2.default)(listOfDaicos[i]);
								_context3.next = 29;
								return daIco.methods.getSummary().call();

							case 29:
								summary = _context3.sent;
								_context3.next = 32;
								return daIco.methods.tapRate().call();

							case 32:
								_tapRate = _context3.sent;
								_context3.next = 35;
								return daIco.methods.approvalRating().call();

							case 35:
								approvalRating = _context3.sent;
								_context3.next = 38;
								return daIco.methods.getCurrentBallot().call();

							case 38:
								currentballot = _context3.sent;
								_context3.next = 41;
								return daIco.methods.status().call();

							case 41:
								statusNumber = _context3.sent;
								_context3.next = 44;
								return daIco.methods.getRaisUpAndBalance().call();

							case 44:
								_balance = _context3.sent;
								date = new Date(summary[6] * 1000);
								icostart = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
								date2 = new Date(summary[7] * 1000);
								icoEnd = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear();
								status = void 0;

								if (statusNumber > 1) {
									newStatus = "Fund Raising Complete";

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
										status: newStatus,
										tapRate: _tapRate + "ETH every " + summary[8] + " days",
										rating: approvalRating + " out of 5"
									});
								} else if (statusNumber < 2) {
									newStatus2 = void 0;

									if (status = 0) {
										newStatus2 = "Pre-Fund Raising Stage";
									} else if (status = 1) {
										newStatus2 = "Pre-Fund Raising Stage";
									}
									B.push({
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
										status: newStatus2,
										tapRate: _tapRate + "ETH every " + summary[8] + " days",
										rating: approvalRating + " out of 5"
									});
								}

								console.log("details are " + erc20Details[0]);

							case 52:
								i++;
								_context3.next = 25;
								break;

							case 55:
								return _context3.abrupt("return", { A: A, B: B, C: C, daIco: daIco, listOfDaicos: listOfDaicos, erc20Details: erc20Details });

							case 56:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getInitialProps() {
				return _ref4.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return DacIcoDisplay;
}(_react2.default.Component);

exports.default = DacIcoDisplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkVSQzIwIiwiSGVhZCIsIkxheW91dCIsIlRhYmxlIiwiRGl2aWRlciIsIkJ1dHRvbiIsIlRhZyIsIlRhYnMiLCJEYUljbyIsIkxpbmsiLCJjb2x1bW5zQSIsImNvbHVtbnNCIiwiY29sdW1uc0MiLCJ3ZWIzIiwiVGFiUGFuZSIsIkRhY0ljb0Rpc3BsYXkiLCJzdGF0ZSIsImRhdGFBIiwiZGF0YUIiLCJkYXRhQyIsImVuZEljbyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImRhSWNvIiwibWV0aG9kcyIsInZvdGVGb3JUYXBDaGFuZ2UiLCJzZW5kIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJlcmMyMERldGFpbHMiLCJzZXRTdGF0ZSIsIkEiLCJCIiwiQyIsIkRhSWNvcyIsIm1hcCIsImFkZHJlc3MiLCJ3aWR0aCIsImtleSIsImNhbGxiYWNrIiwiZ2V0RGVwbG95ZWREQUlDT3MiLCJjYWxsIiwibGlzdE9mRGFpY29zIiwiZ2V0ZGVwbG95ZWRFUkMyMHMiLCJsaXN0T2ZFUkMyMHMiLCJlcmMyMCIsInN1bW1hcnkiLCJjdXJyZW50YmFsbG90IiwiaSIsImxlbmd0aCIsImdldFN1bW1hcnkiLCJwdXNoIiwidG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJpbml0U3VwcGx5IiwiYWxsb2NhdGlvbiIsIm1hbmFnZXIiLCJjb250cmFjdEFkZHJlc3MiLCJ0YXBSYXRlIiwiX3RhcFJhdGUiLCJhcHByb3ZhbFJhdGluZyIsImdldEN1cnJlbnRCYWxsb3QiLCJzdGF0dXMiLCJzdGF0dXNOdW1iZXIiLCJnZXRSYWlzVXBBbmRCYWxhbmNlIiwiX2JhbGFuY2UiLCJkYXRlIiwiRGF0ZSIsImljb3N0YXJ0IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJkYXRlMiIsImljb0VuZCIsIm5ld1N0YXR1cyIsIm5hbWUiLCJzeW1ib2wiLCJiYWxhbmNlIiwicmFpc2VVcCIsIm1pbmltdW1Db250cmlidXRpb24iLCJtYXhpbXVtQ29udHJpYnV0aW9uIiwic29mdENhcCIsImhhcmRDYXAiLCJpY29TdGFydERhdGUiLCJpY29FbmREYXRlIiwicmF0aW5nIiwibmV3U3RhdHVzMiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7QUFFcEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFPLEFBQVMsQUFBUSxBQUFLOztBQUN0QyxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7QUFWakI7OztBQVlBLElBQU0sVUFBVSxXQUFoQixBQUFxQjs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0wsQTtVQUFRLEFBQ0EsQUFDUDtVQUZPLEFBRUEsQUFDUDtVQUhPLEFBR0EsQTtBQUhBLEFBQ1AsV0FtSEQsQSxrRkFBUyxtQkFBQTtPQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FBQTt1QkFBQTtjQUNlLGNBQUEsQUFBSyxJQURwQixBQUNlLEFBQVM7O1dBQTFCO0FBREUsMkJBRVI7O2FBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixRQUFqQixBQUF5QixpQkFBekIsQUFBMEMsS0FBMUMsQUFBK0M7Y0FDeEMsU0FIQyxBQUVSLEFBQW9ELEFBQzdDLEFBQVM7QUFEb0MsQUFDbkQ7O1dBSE87V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0E7Ozs7Ozs7Ozs7WUFSUjtnQkFBQSxBQUFRLElBQUksaUJBQWlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBeEMsQUFBNkIsQUFBd0IsQUFDckQ7YUFBQSxBQUFLO2dCQUNHLEtBQUEsQUFBSyxNQURDLEFBQ0ssQUFDbEI7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LEFBQW1CLEdBQUcsQUFDeEI7QUFEd0IsMkJBRTVCOzthQUFLLFNBQUwsQUFBYyxHQUFJLEFBQ2pCO3VCQUFBLEFBQWEsQUFDYjtBQUZELGdCQUVPLElBQUssU0FBTCxBQUFjLEdBQUksQUFDeEI7dUJBQUEsQUFBYSxBQUNiO0FBQ0Q7V0FBQSxBQUFFO21CQUNRLGFBREgsQUFDRyxBQUFhLEFBQ3RCO2dCQUFNLFFBRkEsQUFFQSxBQUFRLEFBQ2Q7a0JBQVEsUUFIRixBQUdFLEFBQVEsQUFDaEI7bUJBQVMsU0FKSCxBQUlHLEFBQVMsQUFDbEI7bUJBQVMsU0FMSCxBQUtHLEFBQVMsQUFDbEI7K0JBQXFCLFFBTmYsQUFNZSxBQUFRLEFBQzdCOytCQUFxQixRQVBmLEFBT2UsQUFBUSxBQUM3QjttQkFBUyxRQVJILEFBUUcsQUFBUSxBQUNqQjttQkFBUyxRQVRILEFBU0csQUFBUSxBQUNqQjt3QkFWTSxBQVVRLEFBQ2Q7c0JBWE0sQUFXTSxBQUNaO2tCQVpNLEFBWUUsQUFDUjttQkFBUyxXQUFBLEFBQVcsZUFBZSxRQUExQixBQUEwQixBQUFRLEtBYnJDLEFBYTBDLEFBQ2hEO2tCQUFRLGlCQWRULEFBQU8sQUFjbUIsQUFFMUI7QUFoQk8sQUFDTjtBQWlCRjs7Z0JBQUEsQUFBUSxJQUFJLGlCQUFpQixhQUE3QixBQUE2QixBQUFhOztZQXRFRjtBOzs7OzswQ0F3RWxDLEVBQUUsR0FBRixHQUFLLEdBQUwsR0FBUSxHQUFSLEdBQVcsT0FBWCxPQUFrQixjQUFsQixjQUFnQyxjLEFBQWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekdtQixnQkFBTSxBLEFBMEtsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9Db25zZW5zdXMyMDE5L3Rlc3QyL0RhSWNvIn0=