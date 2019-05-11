"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _DAICOERC = require("./build/DAICOERC20.json");

var _DAICOERC2 = _interopRequireDefault(_DAICOERC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_DAICOERC2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dldEVSQzIwRGV0YWlscy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRVJDMjAiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFrQixBQUFsQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDekI7UUFBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsbUJBQU0sQUFBakIsQUFBdEIsWUFBbUQsQUFBbkQsQUFBUCxBQUNBO0FBRkQiLCJmaWxlIjoiZ2V0RVJDMjBEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvQmxvY2tjaGFpblByb2plY3RzL0NvbnNlbnN1czIwMTkvdGVzdDIvRGFJY28ifQ==