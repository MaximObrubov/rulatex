"use strict";

var _parser = require("parser");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.group("%c Custom log:", "background: #222; color: #bada55; font-size: 16px;");
console.log(parser);
console.groupEnd();