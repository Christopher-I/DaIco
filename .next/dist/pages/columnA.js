"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/test2/DaIco/pages/columnA.js";


var columnsA = [{
	title: "Name",
	dataIndex: "name",
	key: "name",
	render: function render(text, record) {
		return _react2.default.createElement(_routes.Link, { route: "/DaIcos/" + record.address, __source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}, text);
	}
}, {
	title: "symbol",
	dataIndex: "symbol",
	key: "symbol"
}, {
	title: "status",
	dataIndex: "status",
	key: "status"
}, {
	title: "Approval Rating",
	dataIndex: "rating",
	key: "rating"
}, {
	title: "Tap Rate",
	dataIndex: "tapRate",
	key: "tapRate"
}, {
	title: "Funding (ETH)",
	dataIndex: "balance",
	key: "balance"
}, {
	title: "",
	key: "View Details..",
	dataIndex: "View Details..",
	render: function render(text, record) {
		return _react2.default.createElement(_routes.Link, { route: "/DaIcos/" + record.address, __source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}, _react2.default.createElement(_antd.Button, {
			style: {
				align: "right",
				color: "green"
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}, "View Details.."));
	}
}];

exports.default = columnsA;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbHVtbkEuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGFnIiwiTGluayIsImNvbHVtbnNBIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwicmVjb3JkIiwiYWRkcmVzcyIsImFsaWduIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztBQUVyQixJQUFNO1FBQ0wsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BSEQsQUFHTSxBQUNMO1NBQVEsZ0JBQUEsQUFBQyxNQUFELEFBQU8sUUFBUDt5QkFDUCxBQUFDLDhCQUFLLG9CQUFrQixPQUF4QixBQUErQjtjQUEvQjtnQkFBQSxBQUEyQztBQUEzQztHQUFBLEVBRE8sQUFDUDtBQU5jLEFBQ2hCO0FBQUEsQUFDQyxDQUZlO1FBU2hCLEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQVplLEFBU2hCLEFBR007QUFITixBQUNDO1FBS0QsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BbEJlLEFBZWhCLEFBR007QUFITixBQUNDO1FBS0QsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BeEJlLEFBcUJoQixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQTdCZSxBQTBCaEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFsQ2UsQUErQmhCLEFBR007QUFITixBQUNDO1FBSUQsQUFDUSxBQUNQO01BRkQsQUFFTSxBQUNMO1lBSEQsQUFHWSxBQUNYO1NBQVEsZ0JBQUEsQUFBQyxNQUFELEFBQU8sUUFBUDt5QkFDUCxBQUFDLDhCQUFLLG9CQUFrQixPQUF4QixBQUErQjtjQUEvQjtnQkFBQSxBQUNDO0FBREQ7R0FBQSxrQkFDQyxBQUFDOztXQUNPLEFBQ0MsQUFDUDtXQUhGLEFBQ1EsQUFFQztBQUZELEFBQ047O2NBRkY7Z0JBQUE7QUFBQTtBQUNDLEtBSEssQUFDUCxBQUNDO0FBMUNKLEFBQWlCLEFBb0NoQixBQW1CRDtBQW5CQyxBQUNDOztrQkFrQkYsQUFBZSIsImZpbGUiOiJjb2x1bW5BLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL0NvbnNlbnN1czIwMTkvdGVzdDIvRGFJY28ifQ==