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

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _routes = require("../routes");

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/DaIco/pages/new.js?entry";

//import DaIco from "../ethereum/getDaIcoDetails";


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
            loading: "",
            name: "",
            symbol: "",
            tokenPrice: "",
            totalSupply: "",
            allocation: "",
            minimumContribution: "",
            maximumContribution: "",
            softCap: "",
            hardCap: "",
            votePeriodInterval: "",
            tapRate: "",
            icoStartDay: "",
            icoStartMonth: "",
            icoStartYear: "",
            icoStartDate: "",
            icoEndDay: "",
            icoEndMonth: "",
            icoEndYear: "",
            icoEndDate: ""
        }, _this.onSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, startDate, endDate, response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({
                                loading: true
                            });
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            startDate = new Date(_this.state.icoStartYear, _this.state.icoStartMonth - 1, _this.state.icoStartDay).getTime() / 1000;
                            endDate = new Date(_this.state.icoEndYear, _this.state.icoEndMonth - 1, _this.state.icoEndDay).getTime() / 1000;

                            console.log(startDate);
                            console.log(endDate);

                            _context.next = 10;
                            return _factory2.default.methods.createDAICOCampaign(_this.state.name, _this.state.symbol, _this.state.minimumContribution, _this.state.maximumContribution, _this.state.softCap, _this.state.hardCap, startDate, endDate, _this.state.votePeriodInterval, _this.state.tapRate, _this.state.totalSupply, _this.state.allocation, _this.state.tokenPrice).send({
                                from: accounts[0]
                            });

                        case 10:
                            response = _context.sent;

                            _routes.Router.pushRoute("/"); //redirect user back to Open Bids page(index)
                            _this.setState({
                                loading: false
                            });

                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DacIcoDisplay, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var Input = _semanticUiReact.Form.Input,
                Group = _semanticUiReact.Form.Group,
                Field = _semanticUiReact.Form.Field;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }))), _react2.default.createElement(_semanticUiReact.Form, {
                onSubmit: this.onSubmit,
                error: !!this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement("h4", { "class": "ui dividing header", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, "Create DaIco"), _react2.default.createElement(Group, { widths: "equal", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(Input, {
                fluid: true,
                label: "Token Name",
                placeholder: "name...",
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({
                        name: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Token Symbol",
                placeholder: "symbol...",
                value: this.state.symbol,
                onChange: function onChange(event) {
                    return _this3.setState({
                        symbol: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Token Price",
                placeholder: "20...",
                value: this.state.tokenPrice,
                onChange: function onChange(event) {
                    return _this3.setState({
                        tokenPrice: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Total Supply",
                placeholder: "2000...",
                value: this.state.totalSupply,
                onChange: function onChange(event) {
                    return _this3.setState({
                        totalSupply: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "DaIco Allocation",
                placeholder: "200...",
                value: this.state.allocation,
                onChange: function onChange(event) {
                    return _this3.setState({
                        allocation: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            })), _react2.default.createElement(Group, { widths: "equal", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, _react2.default.createElement(Input, {
                fluid: true,
                label: "Minimum Contribution",
                placeholder: "50...",
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        minimumContribution: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Maximum Contribution",
                placeholder: "500...",
                value: this.state.maximumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        maximumContribution: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Soft Cap",
                placeholder: "2000...",
                value: this.state.softCap,
                onChange: function onChange(event) {
                    return _this3.setState({
                        softCap: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }), _react2.default.createElement(Input, {
                fluid: true,
                label: "Hard Cap",
                placeholder: "20000...",
                value: this.state.hardCap,
                onChange: function onChange(event) {
                    return _this3.setState({
                        hardCap: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            })), _react2.default.createElement(Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, _react2.default.createElement(Input, {
                fluid: true,
                style: { width: "200px" },
                label: "Tap Rate",
                placeholder: "50...",
                value: this.state.tapRate,
                onChange: function onChange(event) {
                    return _this3.setState({
                        tapRate: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            }), _react2.default.createElement(Input, {
                style: { width: "100px" },
                label: "Vote Period Interval",
                placeholder: "500...",
                value: this.state.votePeriodInterval,
                onChange: function onChange(event) {
                    return _this3.setState({
                        votePeriodInterval: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }), _react2.default.createElement(Input, {
                style: { width: "100px" },
                label: "Fund Raise Start Date",
                placeholder: "01",
                value: this.state.icoStartDay,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoStartDay: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }), _react2.default.createElement(Input, {
                style: { width: "60px" },
                label: "Month",
                placeholder: "01",
                value: this.state.icoStartMonth,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoStartMonth: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                }
            }), _react2.default.createElement(Input, {
                style: { width: "60px" },
                label: "Year",
                placeholder: "2019",
                value: this.state.icoStartYear,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoStartYear: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                }
            }), _react2.default.createElement(Input, {
                style: { width: "100px" },
                label: "Fund Raise End Date",
                placeholder: "01",
                value: this.state.icoEndDay,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoEndDay: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }), _react2.default.createElement(Input, {
                style: { width: "60px" },
                label: "Month",
                placeholder: "01",
                value: this.state.icoEndMonth,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoEndMonth: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 301
                }
            }), _react2.default.createElement(Input, {
                style: { width: "60px" },
                label: "Year",
                placeholder: "01",
                value: this.state.icoEndyear,
                onChange: function onChange(event) {
                    return _this3.setState({
                        icoEndYear: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 312
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: "submit", loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 324
                }
            }, "Create")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var listOfDaicos, listOfERC20s, A, B, C, daIco, erc20, erc20Details, summary, currentballot;
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
                                return _context2.abrupt("return", { daIco: daIco });

                            case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJFUkMyMCIsIkxheW91dCIsIkhlYWQiLCJMaW5rIiwiUm91dGVyIiwiRm9ybSIsIkxhYmVsIiwiQnV0dG9uIiwiQ2hlY2tib3giLCJUZXh0QXJlYSIsIklucHV0IiwiTWVzc2FnZSIsIndlYjMiLCJEYWNJY29EaXNwbGF5Iiwic3RhdGUiLCJsb2FkaW5nIiwibmFtZSIsInN5bWJvbCIsInRva2VuUHJpY2UiLCJ0b3RhbFN1cHBseSIsImFsbG9jYXRpb24iLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWF4aW11bUNvbnRyaWJ1dGlvbiIsInNvZnRDYXAiLCJoYXJkQ2FwIiwidm90ZVBlcmlvZEludGVydmFsIiwidGFwUmF0ZSIsImljb1N0YXJ0RGF5IiwiaWNvU3RhcnRNb250aCIsImljb1N0YXJ0WWVhciIsImljb1N0YXJ0RGF0ZSIsImljb0VuZERheSIsImljb0VuZE1vbnRoIiwiaWNvRW5kWWVhciIsImljb0VuZERhdGUiLCJvblN1Ym1pdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiZW5kRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiY3JlYXRlREFJQ09DYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicmVzcG9uc2UiLCJwdXNoUm91dGUiLCJHcm91cCIsIkZpZWxkIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiaWNvRW5keWVhciIsImdldERlcGxveWVkREFJQ09zIiwiY2FsbCIsImxpc3RPZkRhaWNvcyIsImdldGRlcGxveWVkRVJDMjBzIiwibGlzdE9mRVJDMjBzIiwiQSIsIkIiLCJDIiwiZGFJY28iLCJlcmMyMCIsImVyYzIwRGV0YWlscyIsInN1bW1hcnkiLCJjdXJyZW50YmFsbG90IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoi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