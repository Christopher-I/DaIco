"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/chris/Documents/BlockchainProjects/Consensus2019/test2/DaIco/pages/columnB.js";


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
	key: "Info",
	dataIndex: "",
	render: function render(text, record) {
		return _react2.default.createElement(_routes.Link, { route: "/PreDaIco/" + record.address, __source: {
				fileName: _jsxFileName,
				lineNumber: 51
			}
		}, _react2.default.createElement(_antd.Button, {
			style: {
				align: "right",
				color: "green"
			},
			__source: {
				fileName: _jsxFileName,
				lineNumber: 52
			}
		}, "More Details"));
	}
}];

exports.default = columnsB;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbHVtbkIuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiVGFnIiwiTGluayIsImNvbHVtbnNCIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwicmVjb3JkIiwiYWRkcmVzcyIsImFsaWduIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTLEFBQVE7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztBQUVyQixJQUFNO1FBQ0wsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BSmUsQUFDaEIsQUFHTTtBQUhOLEFBQ0MsQ0FGZTtRQU1oQixBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFUZSxBQU1oQixBQUdNO0FBSE4sQUFDQztRQUlELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQUhELEFBR00sQUFDTDtTQUFRLGdCQUFBLEFBQUMsTUFBRCxBQUFPLFFBQVA7eUJBQ1AsQUFBQyw4QkFBSyxvQkFBa0IsT0FBeEIsQUFBK0I7Y0FBL0I7Z0JBQUEsQUFBMkM7QUFBM0M7R0FBQSxFQURPLEFBQ1A7QUFoQmMsQUFXaEI7QUFBQSxBQUNDO1FBUUQsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BdkJlLEFBb0JoQixBQUdNO0FBSE4sQUFDQztRQUtELEFBQ1EsQUFDUDtZQUZELEFBRVksQUFDWDtNQTdCZSxBQTBCaEIsQUFHTTtBQUhOLEFBQ0M7UUFJRCxBQUNRLEFBQ1A7WUFGRCxBQUVZLEFBQ1g7TUFsQ2UsQUErQmhCLEFBR007QUFITixBQUNDO1FBSUQsQUFDUSxBQUNQO1lBRkQsQUFFWSxBQUNYO01BdkNlLEFBb0NoQixBQUdNO0FBSE4sQUFDQztRQUtELEFBQ1EsQUFDUDtNQUZELEFBRU0sQUFDTDtZQUhELEFBR1ksQUFDWDtTQUFRLGdCQUFBLEFBQUMsTUFBRCxBQUFPLFFBQVA7eUJBQ1AsQUFBQyw4QkFBSyxzQkFBb0IsT0FBMUIsQUFBaUM7Y0FBakM7Z0JBQUEsQUFDQztBQUREO0dBQUEsa0JBQ0MsQUFBQzs7V0FDTyxBQUNDLEFBQ1A7V0FIRixBQUNRLEFBRUM7QUFGRCxBQUNOOztjQUZGO2dCQUFBO0FBQUE7QUFDQyxLQUhLLEFBQ1AsQUFDQztBQWhESixBQUFpQixBQTBDaEIsQUFtQkQ7QUFuQkMsQUFDQzs7a0JBa0JGLEFBQWUiLCJmaWxlIjoiY29sdW1uQi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL0Jsb2NrY2hhaW5Qcm9qZWN0cy9Db25zZW5zdXMyMDE5L3Rlc3QyL0RhSWNvIn0=