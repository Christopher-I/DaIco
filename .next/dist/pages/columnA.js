"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/DaIco/pages/columnA.js";


var columnsB = [{
	title: "ICO Start Date",
	dataIndex: "icoStartDate",
	key: "icoStartDate"
}, {
	title: "ICO End Date",
	dataIndex: "icoEndDate",
	key: "icoEndDate"
}, {
	title: "Name",
	dataIndex: "name",
	key: "name",
	render: function render(text, record) {
		return _react2.default.createElement(_routes.Link, { route: "/DaIcos/" + record.address, __source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}, text);
	}
}, {
	title: "status",
	dataIndex: "status",
	key: "status"
}, {
	title: "Soft Cap(ETH)",
	dataIndex: "softCap",
	key: "softCap"
}, {
	title: "Hard Cap(ETH)",
	dataIndex: "hardCap",
	key: "hardCap"
}, {
	title: "Amount Raised(ETH)",
	dataIndex: "balance",
	key: "balance"
}, {
	title: "",
	key: "Info2",
	dataIndex: "",
	render: function render(text, record) {
		return _react2.default.createElement(_antd.Button, {
			style: {
				align: "right",
				color: "green"
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 50
			}
		}, "Join Whitelist");
	}
}, {
	title: "",
	key: "Info",
	dataIndex: "",
	render: function render(text, record) {
		return _react2.default.createElement(_antd.Button, {
			style: {
				align: "right",
				color: "green"
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 65
			}
		}, "Buy ICO Tokens");
	}
}];

exports.default = columnsB;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbHVtbkEuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGFnIiwiTGluayIsImNvbHVtbnNCIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwicmVjb3JkIiwiYWRkcmVzcyIsImFsaWduIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztBQUVyQixJQUFNO1FBQ0wsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BSmUsQUFDaEIsQUFHTTtBQUhOLEFBQ0MsQ0FGZTtRQU1oQixBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFUZSxBQU1oQixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQUhELEFBR00sQUFDTDtTQUFRLGdCQUFBLEFBQUMsTUFBRCxBQUFPLFFBQVA7eUJBQ1AsQUFBQyw4QkFBSyxvQkFBa0IsT0FBeEIsQUFBK0I7Y0FBL0I7Z0JBQUEsQUFBMkM7QUFBM0M7R0FBQSxFQURPLEFBQ1A7QUFoQmMsQUFXaEI7QUFBQSxBQUNDO1FBUUQsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BdkJlLEFBb0JoQixBQUdNO0FBSE4sQUFDQztRQUtELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQTdCZSxBQTBCaEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFsQ2UsQUErQmhCLEFBR007QUFITixBQUNDO1FBSUQsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BdkNlLEFBb0NoQixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtNQUZELEFBRU0sQUFDTDtZQUhELEFBR1ksQUFDWDtTQUFRLGdCQUFBLEFBQUMsTUFBRCxBQUFPLFFBQVA7eUJBQ1AsQUFBQzs7V0FDTyxBQUNDLEFBQ1A7V0FIRixBQUNRLEFBRUM7QUFGRCxBQUNOOztjQUZGO2dCQUFBO0FBQUE7QUFDQyxHQURELEVBRE8sQUFDUDtBQTlDYyxBQXlDaEI7QUFBQSxBQUNDO1FBY0QsQUFDUSxBQUNQO01BRkQsQUFFTSxBQUNMO1lBSEQsQUFHWSxBQUNYO1NBQVEsZ0JBQUEsQUFBQyxNQUFELEFBQU8sUUFBUDt5QkFDUCxBQUFDOztXQUNPLEFBQ0MsQUFDUDtXQUhGLEFBQ1EsQUFFQztBQUZELEFBQ047O2NBRkY7Z0JBQUE7QUFBQTtBQUNDLEdBREQsRUFETyxBQUNQO0FBN0RILEFBQWlCLEFBd0RoQixBQWlCRDtBQWpCQyxBQUNDOztrQkFnQkYsQUFBZSIsImZpbGUiOiJjb2x1bW5BLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL0NvbnNlbnN1czIwMTkvRGFJY28ifQ==