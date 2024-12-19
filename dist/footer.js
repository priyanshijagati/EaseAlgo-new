"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _footer = _interopRequireDefault(require("./footer"));
require("./App.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/App.js

// Adjust the path if necessary
// Global styles (optional)

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_footer.default, null));
}
var _default = exports.default = App;