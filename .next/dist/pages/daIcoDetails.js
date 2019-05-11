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

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _getDaIcoDetails = require("../ethereum/getDaIcoDetails");

var _getDaIcoDetails2 = _interopRequireDefault(_getDaIcoDetails);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/test2/DaIco/pages/daIcoDetails.js?entry";


var RadioGroup = _antd.Radio.Group;

var daIcoDetails = function (_React$Component) {
	(0, _inherits3.default)(daIcoDetails, _React$Component);

	function daIcoDetails() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, daIcoDetails);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = daIcoDetails.__proto__ || (0, _getPrototypeOf2.default)(daIcoDetails)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			name: "",
			deposit: "",
			symbol: "",
			minimumContribution: "",
			maximumContribution: "",
			softCap: "",
			hardCap: "",
			icoStartDate: "",
			icoEndDate: "",
			votePeriodInterval: "",
			desc: ["terrible", "bad", "normal", "good", "wonderful"],
			value: "",
			tapRate: "",
			voteCount: "",
			ballotCreationDate: "",
			ballotExpiryDate: "",
			increaseVoteCount: "",
			unchangeVoteCount: "",
			decreaseVoteCount: "",
			selfDestructVoteCount: "",
			fundsLeft: "",
			approvalRating: "",
			loading2: ""
		}, _this.handleChange = function (approvalRating) {
			console.log("approvalRating " + approvalRating);
			_this.setState({ approvalRating: approvalRating });
		}, _this.submitRating = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var accounts, daIco2, response;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_this.setState({
								loading3: true
							});
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							daIco2 = (0, _getDaIcoDetails2.default)(_this.props.address);
							_context.next = 7;
							return daIco2.methods.rateManagment(_this.state.approvalRating).send({
								from: accounts[0]
							});

						case 7:
							response = _context.sent;

							Router.pushRoute("/"); //redirect user back to Open Bids page(index)
							_this.setState({
								loading3: false
							});
						//Router.pushRoute("/"); //redirect user back to Open Bids page(index)

						case 10:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onChange = function (e) {
			_this.setState({
				value: e.target.value
			});
		}, _this.payDeposit = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
				var accounts, daIco2, response;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_this.setState({
									loading2: true
								});
								_context2.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context2.sent;
								daIco2 = (0, _getDaIcoDetails2.default)(_this.props.address);
								_context2.next = 7;
								return daIco2.methods.payDeposit(2777777).send({
									from: accounts[0],
									value: _this.state.deposit * 100
								});

							case 7:
								response = _context2.sent;

								Router.pushRoute("/"); //redirect user back to Open Bids page(index)
								_this.setState({
									loading2: false
								});

							case 10:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x) {
				return _ref3.apply(this, arguments);
			};
		}(), _this.Vote = function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(e) {
				var accounts, daIco2, response;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_this.setState({
									loading: true
								});
								_context3.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context3.sent;
								daIco2 = (0, _getDaIcoDetails2.default)(_this.props.address);

								console.log("I am here");
								_context3.next = 8;
								return daIco2.methods.voteForTapChange(_this.state.value).send({
									from: accounts[0]
								});

							case 8:
								response = _context3.sent;

								Router.pushRoute("/"); //redirect user back to Open Bids page(index)
								_this.setState({
									loading: false
								});
							//Router.pushRoute("/"); //redirect user back to Open Bids page(index)

							case 11:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, _this2);
			}));

			return function (_x2) {
				return _ref4.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(daIcoDetails, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setState({
				name: this.props.summary[0],
				symbol: this.props.summary[1],
				balance: this.props.balance[0],
				raiseUp: this.props.balance[1],
				minimumContribution: this.props.summary[2],
				maximumContribution: this.props.summary[3],
				softCap: this.props.summary[4],
				hardCap: this.props.summary[5],
				icoStartDate: this.props.icostart,
				icoEndDate: this.props.icoEnd,
				votePeriodInterval: this.props.summary[8],
				tokenPrice: this.props.summary[9],
				erc20Address: this.props.summary[10],
				manager: this.props.summary[11],
				tapRate: this.props.tapRate,
				voteCount: this.props.currentballot[0],
				ballotCreationDate: this.props.currentballot[1],
				ballotExpiryDate: this.props.currentballot[2],
				increaseVoteCount: this.props.currentballot[3],
				unchangeVoteCount: this.props.currentballot[4],
				decreaseVoteCount: this.props.currentballot[5],
				selfDestructVoteCount: this.props.currentballot[6],
				fundsLeft: this.props.balance[0] / this.props.balance[1] * 100,
				dayLeft: this.props.balance[0] / this.props.tapRate * this.props.summary[8]
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, _react2.default.createElement(_antd.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}, _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, _react2.default.createElement(_antd.Card, {
				size: "small",
				title: "Details",
				extra: this.state.name,
				style: { width: 500 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 197
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}, "Symbol: "), this.state.symbol), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 201
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 202
				}
			}, "Initial Capital: "), _react2.default.createElement("i", { style: { color: "green" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, this.state.raiseUp, " ETH")), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 208
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 209
				}
			}, "Balance: "), _react2.default.createElement("i", { style: { color: "green" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 210
				}
			}, this.state.balance / 100, " ETH")), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 214
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 215
				}
			}, "Token Price: "), "1 ETH to", " ", this.state.tokenPrice, " ", this.state.symbol), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 219
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 220
				}
			}, " Minimum Contribution: "), this.state.minimumContribution, " ETH"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 223
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 224
				}
			}, " Maximum Contribution: "), this.state.maximumContribution, " ETH"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 227
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 228
				}
			}, "Soft Cap: "), this.state.softCap, " ETH"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 231
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 232
				}
			}, " Hard Cap: "), this.state.hardCap, " ETH"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 235
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 236
				}
			}, " ICO Start Time: "), this.state.icoStartDate), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 239
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 240
				}
			}, " ICO End Time: "), this.state.icoEndDate), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 244
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 245
				}
			}, " Vote Period Interval : "), this.state.votePeriodInterval, " days"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 248
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 249
				}
			}, " ERC20 Address: "), this.state.erc20Address), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 253
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 254
				}
			}, " Managers Address: "), this.state.manager)), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 258
				}
			}, _react2.default.createElement(_antd.Button, {
				onClick: this.payDeposit,
				loading: this.state.loading2,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 259
				}
			}, "Pay Deposit"), _react2.default.createElement(_antd.Input, {
				style: {
					width: "120px",
					marginLeft: "30px"
				},
				label: { basic: true, content: "ETH" },
				labelPosition: "right",
				value: this.state.deposit,
				onChange: function onChange(event) {
					return _this3.setState({
						deposit: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 265
				}
			}), _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 279
				}
			}, "ETH")))), _react2.default.createElement(_antd.Col, { span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 283
				}
			}, _react2.default.createElement(_antd.Card, {
				size: "small",
				title: "Tap",
				extra: this.state.balance,
				style: { width: 500 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 284
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 290
				}
			}, _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 291
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 292
				}
			}, " Managment Team Proposal: "), "Increase Tap by 100X", _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 294
				}
			}, " View Reason")), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 296
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 297
				}
			}, " No of Votes Cast: "), this.state.voteCount), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 300
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 301
				}
			}, " Current Tap Rate: "), this.state.tapRate, " ETH every", " ", this.state.votePeriodInterval, " days"), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 305
				}
			}, _react2.default.createElement("b", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 306
				}
			}, " Funding : "), _react2.default.createElement(_antd.Progress, {
				type: "circle",
				percent: this.state.fundsLeft,
				width: 80,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 307
				}
			}), this.state.dayLeft, "days left till funds are depleted."), _react2.default.createElement(RadioGroup, {
				style: { width: 400 },
				onChange: this.onChange,
				value: this.state.value,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 315
				}
			}, _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 320
				}
			}, _react2.default.createElement(_antd.Radio, { value: 3, __source: {
					fileName: _jsxFileName,
					lineNumber: 321
				}
			}, "Increase Tap rate 100%"), _react2.default.createElement(_antd.Progress, {
				percent: Math.round(this.state.increaseVoteCount / this.state.voteCount * 100),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 324
				}
			})), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 333
				}
			}, _react2.default.createElement(_antd.Radio, { value: 2, __source: {
					fileName: _jsxFileName,
					lineNumber: 334
				}
			}, "I'm fine with the current Tap"), _react2.default.createElement(_antd.Progress, {
				percent: Math.round(this.state.unchangeVoteCount / this.state.voteCount * 100),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 337
				}
			})), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 346
				}
			}, _react2.default.createElement(_antd.Radio, { value: 1, __source: {
					fileName: _jsxFileName,
					lineNumber: 347
				}
			}, "Decrease Tap rate 100%"), _react2.default.createElement(_antd.Progress, {
				percent: Math.round(this.state.decreaseVoteCount / this.state.voteCount * 100),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 350
				}
			})), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 359
				}
			}, _react2.default.createElement(_antd.Radio, { value: 0, __source: {
					fileName: _jsxFileName,
					lineNumber: 360
				}
			}, "Terminate Contract"), _react2.default.createElement(_antd.Progress, {
				percent: Math.round(this.state.selfDestructVoteCount / this.state.voteCount * 100),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 363
				}
			}))), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 373
				}
			}, _react2.default.createElement(_antd.Button, {
				loading: this.state.loading,
				onClick: this.Vote,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 374
				}
			}, "Vote")))), _react2.default.createElement("br", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 383
				}
			}), _react2.default.createElement(_antd.Card, {
				size: "small",
				title: "Rate Managment Team",
				extra: this.props.approvalRating + "/5",
				style: { width: 500 },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 384
				}
			}, _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 390
				}
			}, _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 391
				}
			}, _react2.default.createElement(_antd.Rate, {
				tooltips: this.state.desc,
				onChange: this.handleChange,
				value: this.state.approvalRating,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 392
				}
			}), this.state.approvalRating ? _react2.default.createElement("span", { className: "ant-rate-text", __source: {
					fileName: _jsxFileName,
					lineNumber: 398
				}
			}, this.state.desc[this.state.approvalRating]) : ""), _react2.default.createElement("p", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 410
				}
			}, _react2.default.createElement(_antd.Button, {
				loading: this.state.loading3,
				onClick: this.submitRating,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 411
				}
			}, "Submit"))))))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
				var address, daIco, summary, approvalRating, tapRate, currentballot, balance, date, icostart, date2, icoEnd;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								address = props.query.address;
								daIco = (0, _getDaIcoDetails2.default)(props.query.address);
								_context4.next = 4;
								return daIco.methods.getSummary().call();

							case 4:
								summary = _context4.sent;
								_context4.next = 7;
								return daIco.methods.approvalRating().call();

							case 7:
								approvalRating = _context4.sent;
								_context4.next = 10;
								return daIco.methods.tapRate().call();

							case 10:
								tapRate = _context4.sent;
								_context4.next = 13;
								return daIco.methods.getCurrentBallot().call();

							case 13:
								currentballot = _context4.sent;
								_context4.next = 16;
								return daIco.methods.getRaisUpAndBalance().call();

							case 16:
								balance = _context4.sent;

								// let utcSeconds = summary[6];
								// let utcSeconds2 = summary[7];
								// let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
								// d.setUTCSeconds(utcSeconds);
								// let icostart = d;
								// let d2 = new Date(0); // The 0 there is the key, which sets the date to the epoch
								// d2.setUTCSeconds(utcSeconds2);
								// let icoEnd = d2;

								date = new Date(summary[6] * 1000);
								icostart = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
								date2 = new Date(summary[7] * 1000);
								icoEnd = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear();
								return _context4.abrupt("return", {
									summary: summary,
									approvalRating: approvalRating,
									tapRate: tapRate,
									currentballot: currentballot,
									daIco: daIco,
									address: address,
									balance: balance,
									icostart: icostart,
									icoEnd: icoEnd
								});

							case 22:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function getInitialProps(_x3) {
				return _ref5.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return daIcoDetails;
}(_react2.default.Component);

exports.default = daIcoDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RhSWNvRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkRhSWNvIiwid2ViMyIsIkNhcmQiLCJSb3ciLCJDb2wiLCJQcm9ncmVzcyIsIkJ1dHRvbiIsIlJhdGUiLCJSYWRpbyIsIlNwaW4iLCJJbnB1dCIsIlJhZGlvR3JvdXAiLCJHcm91cCIsImRhSWNvRGV0YWlscyIsInN0YXRlIiwibmFtZSIsImRlcG9zaXQiLCJzeW1ib2wiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWF4aW11bUNvbnRyaWJ1dGlvbiIsInNvZnRDYXAiLCJoYXJkQ2FwIiwiaWNvU3RhcnREYXRlIiwiaWNvRW5kRGF0ZSIsInZvdGVQZXJpb2RJbnRlcnZhbCIsImRlc2MiLCJ2YWx1ZSIsInRhcFJhdGUiLCJ2b3RlQ291bnQiLCJiYWxsb3RDcmVhdGlvbkRhdGUiLCJiYWxsb3RFeHBpcnlEYXRlIiwiaW5jcmVhc2VWb3RlQ291bnQiLCJ1bmNoYW5nZVZvdGVDb3VudCIsImRlY3JlYXNlVm90ZUNvdW50Iiwic2VsZkRlc3RydWN0Vm90ZUNvdW50IiwiZnVuZHNMZWZ0IiwiYXBwcm92YWxSYXRpbmciLCJsb2FkaW5nMiIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInN1Ym1pdFJhdGluZyIsImxvYWRpbmczIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImRhSWNvMiIsInByb3BzIiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJyYXRlTWFuYWdtZW50Iiwic2VuZCIsImZyb20iLCJyZXNwb25zZSIsIlJvdXRlciIsInB1c2hSb3V0ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBheURlcG9zaXQiLCJWb3RlIiwibG9hZGluZyIsInZvdGVGb3JUYXBDaGFuZ2UiLCJzdW1tYXJ5IiwiYmFsYW5jZSIsInJhaXNlVXAiLCJpY29zdGFydCIsImljb0VuZCIsInRva2VuUHJpY2UiLCJlcmMyMEFkZHJlc3MiLCJtYW5hZ2VyIiwiY3VycmVudGJhbGxvdCIsImRheUxlZnQiLCJ3aWR0aCIsImNvbG9yIiwibWFyZ2luTGVmdCIsImJhc2ljIiwiY29udGVudCIsImV2ZW50IiwiTWF0aCIsInJvdW5kIiwicXVlcnkiLCJkYUljbyIsImdldFN1bW1hcnkiLCJjYWxsIiwiZ2V0Q3VycmVudEJhbGxvdCIsImdldFJhaXNVcEFuZEJhbGFuY2UiLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZGF0ZTIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFDQyxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7QUFHRCxJQUFNLGFBQWEsWUFBbkIsQUFBeUI7O0lBRW5CLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFDTCxBO1NBQVEsQUFDRCxBQUNOO1lBRk8sQUFFRSxBQUNUO1dBSE8sQUFHQyxBQUNSO3dCQUpPLEFBSWMsQUFDckI7d0JBTE8sQUFLYyxBQUNyQjtZQU5PLEFBTUUsQUFDVDtZQVBPLEFBT0UsQUFDVDtpQkFSTyxBQVFPLEFBQ2Q7ZUFUTyxBQVNLLEFBQ1o7dUJBVk8sQUFVYSxBQUNwQjtTQUFNLENBQUEsQUFBQyxZQUFELEFBQWEsT0FBYixBQUFvQixVQUFwQixBQUE4QixRQVg3QixBQVdELEFBQXNDLEFBQzVDO1VBWk8sQUFZQSxBQUNQO1lBYk8sQUFhRSxBQUNUO2NBZE8sQUFjSSxBQUNYO3VCQWZPLEFBZWEsQUFDcEI7cUJBaEJPLEFBZ0JXLEFBQ2xCO3NCQWpCTyxBQWlCWSxBQUNuQjtzQkFsQk8sQUFrQlksQUFDbkI7c0JBbkJPLEFBbUJZLEFBQ25COzBCQXBCTyxBQW9CZ0IsQUFDdkI7Y0FyQk8sQUFxQkksQUFDWDttQkF0Qk8sQUFzQlMsQUFDaEI7YUF2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